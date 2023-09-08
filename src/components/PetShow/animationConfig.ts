import PIXI from "src/utils/pixiLoader";

export const petStandApp = new PIXI.Application({
  height: 250,
  width: 250,
  transparent: true,
});

// 设置动画层级
petStandApp.stage.sortableChildren = true;