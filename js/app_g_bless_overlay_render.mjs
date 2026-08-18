import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_wash } from "./app_g_bless_wash.mjs";
import { html_clear } from "./html_clear.mjs";
import { bless_cone_view } from "./bless_cone_view.mjs";
import { bless_view_count } from "./bless_view_count.mjs";
import { math_min } from "./math_min.mjs";
import { app_g_bless_readout } from "./app_g_bless_readout.mjs";
import { app_g_bless_overlay_pray } from "./app_g_bless_overlay_pray.mjs";
import { greater_than } from "./greater_than.mjs";
import { bless_prayer_text } from "./bless_prayer_text.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
export function app_g_bless_overlay_render(r, npcs) {
  arguments_assert(arguments, 2);
  let street = property_get(r, "street");
  let div_map = property_get(r, "div_map");
  let wash = property_get(r, "wash");
  let player_img_c = property_get(r, "player_img_c");
  let glows = property_get(r, "glows");
  let bar = property_get(r, "bar");
  let told = property_get(r, "told");
  let unlocked = property_get(r, "unlocked");
  let blessings = property_get(r, "blessings");
  let cone_get = property_get(r, "cone_get");
  let r2 = property_get(r, "r2");
  let world = property_get(r2, "world");
  let walking = property_get(r2, "walking");
  function render() {
    let cone = cone_get();
    app_g_bless_wash(wash, cone);
    html_clear(told);
    let view = bless_cone_view(cone, npcs);
    let visible = bless_view_count(view);
    let count = math_min(unlocked, visible);
    app_g_bless_readout(told, cone, street, visible, count);
    function pray() {
      let app_g_bless_overlay_pray_answer = app_g_bless_overlay_pray(
        glows,
        view,
        count,
        blessings,
        unlocked,
        render,
      );
      unlocked = property_get(app_g_bless_overlay_pray_answer, "unlocked");
    }
    let anybody = greater_than(count, 0);
    if (anybody) {
      let prayer = bless_prayer_text(count);
      app_g_button_green(told, prayer, pray);
    }
  }
  let r3 = {
    div_map,
    player_img_c,
    bar,
    world,
    walking,
    render,
  };
  return r3;
}
