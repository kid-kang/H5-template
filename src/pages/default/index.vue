<!-- default -->
<template>
  <div class="default">
    {{ store.state.count }}
    <div class="button-group">
      <div ref="btn1">
        <van-button type="primary" @click="plus">数字加1</van-button>
      </div>
      <div ref="btn2">
        <van-button type="primary" @click="minus">数字减1</van-button>
      </div>
    </div>
    <scm-tour v-model:show="showTour" :tours="tours" />
  </div>
</template>

<script setup>
  import { showToast } from 'vant'
  const store = useStore()
  const plus = () => {
    store.commit('plus')
  }
  const minus = () => {
    if (store.state.count <= 0) {
      showToast('不能再小辣！')
      return
    }
    store.commit('minus')
  }
  const btn1 = ref(null)
  const btn2 = ref(null)
</script>
<style lang="less" scoped>
  .default {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .button-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin-top: 30px;
  }
</style>
