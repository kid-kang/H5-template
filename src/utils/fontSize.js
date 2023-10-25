import device from "current-device";
// 设置dpr与rem适配
const docEl = document.documentElement;
const metaEl = docEl.querySelector('meta[name = "viewport"]');
const deviceWidth = docEl.clientWidth;
const dpr = window.devicePixelRatio || 1;
const rem = device.desktop() ? 50 : (deviceWidth * dpr) / 10;
const scale = 1 / dpr;
// 设置dpr标识 作hack
docEl.setAttribute("data-dpr", dpr);

metaEl.setAttribute(
  "content",
  `width=${
    dpr * deviceWidth
  },initial-scale = ${scale},maximum-scale=${scale},minimum-scale=${scale},user-scalable = no`
);
docEl.style.fontSize = rem + "px";
