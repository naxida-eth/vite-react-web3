import * as PIXI from "pixi.js";

window.PIXI = PIXI; //Solution to use dragonbones with PIXI v5
PIXI.settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = false;

export const lordDragonbones = new PIXI.Loader()
  .add("skeleton", "/pixi-dragonbones/lord_play/pk_ske.json")
  .add("texture_json", "/pixi-dragonbones/lord_play/pk_tex.json")
  .add("texture_png", "/pixi-dragonbones/lord_play/pk_tex.png");

export default PIXI;
