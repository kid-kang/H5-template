import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite' //自动引入
import { VantResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import legacyPlugin from '@vitejs/plugin-legacy'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vuex', 'vue-router'],
        dts: 'src/auto-import.d.ts',
      }),
      Components({
        resolvers: [VantResolver()],
      }),
      legacyPlugin({
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
        renderLegacyChunks: true,
        targets: ['chrome 52'], // 需要兼容的目标列表，可以设置多个
        polyfills: [
          'es.symbol',
          'es.array.filter',
          'es.promise',
          'es.promise.finally',
          'es/map',
          'es/set',
          'es.array.for-each',
          'es.object.define-properties',
          'es.object.define-property',
          'es.object.get-own-property-descriptor',
          'es.object.get-own-property-descriptors',
          'es.object.keys',
          'es.object.to-string',
          'web.dom-collections.for-each',
          'esnext.global-this',
          'esnext.string.match-all',
        ],
      }),
    ],
    define: {
      'process.env': env,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        utils: resolve(__dirname, 'src/utils'),
        assets: resolve(__dirname, 'src/assets'),
      },
    },
    server: {
      host: '0.0.0.0',
    },
    build: {
      target: 'es2015',
      sourcemap: mode === 'development' ? true : false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          },
        },
      },
    },
  }
})
