import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_overlay_render_tap_prayed_drawing } from "./app_g_bless_overlay_render_tap_prayed_drawing.mjs";
import { app_g_bless_overlay_render_tap_prayed_prayer_said } from "./app_g_bless_overlay_render_tap_prayed_prayer_said.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_g_bless_overlay_render_tap_prayed_celebrate } from "./app_g_bless_overlay_render_tap_prayed_celebrate.mjs";
import { app_g_bless_overlay_render_tap_prayed_person_id_pray } from "./app_g_bless_overlay_render_tap_prayed_person_id_pray.mjs";
import { app_g_bless_overlay_render_tap_prayed_person_at } from "./app_g_bless_overlay_render_tap_prayed_person_at.mjs";
import { not } from "./not.mjs";
import { app_g_bless_overlay_render_tap_prayed_amen_ask } from "./app_g_bless_overlay_render_tap_prayed_amen_ask.mjs";
export function app_g_bless_overlay_render_tap_prayed(
  r2,
  view_now,
  glows,
  wash,
) {
  "How a tap on the street becomes a prayer, and what one prayer does to the street.";
  "FIVE PIECES OF THIS ARE WRITTEN NEXT DOOR, and each one is a piece that needs to remember nothing between prayers: the drawing side and what it is holding back, saying one prayer over one person, putting the prayer to the player, finding who a tap landed on, and praying by person number. What is kept here is the one thing that cannot be handed anywhere - the rung the player currently stands on, which one prayer can move and every later prayer has to be said at.";
  arguments_assert(arguments, 4);
  let walking = property_get(r2, "walking");
  let world = property_get(r2, "world");
  let blessed = property_get(r2, "blessed");
  let blocks = property_get(r2, "blocks");
  let rung = property_get(r2, "rung");
  let container_map = property_get(r2, "container_map");
  let bar = property_get(r2, "bar");
  let view_everyone = property_get(r2, "view_everyone");
  let hold_release = property_get(r2, "hold_release");
  let drawing = app_g_bless_overlay_render_tap_prayed_drawing(r2, glows, wash);
  let render = property_get(drawing, "render");
  let ground_show = property_get(drawing, "ground_show");
  let faces_show = property_get(drawing, "faces_show");
  let hold_set = property_get(drawing, "hold_set");
  async function person_pray(person) {
    "Saying the prayer over one person and showing everything it reached. It is the whole of";
    "what praying DOES, and it is written here rather than inside the tap because a tap is";
    "only one of the ways it can be asked for - a dev opening asks for it with no tap at all.";
    "The rung the player stood on before the prayer is kept, because the sentence that says";
    "what just happened is about the difference between the two - and the prayer itself may";
    "have moved it.";
    let rung_before = rung;
    let said = app_g_bless_overlay_render_tap_prayed_prayer_said(
      person,
      blessed,
      blocks,
      view_everyone,
      rung,
      hold_release,
    );
    let lit_now = property_get(said, "lit_now");
    let people_now = property_get(said, "people_now");
    rung = property_get(said, "rung_after");
    ("What this prayer just lit is now held back from the picture, and the street is drawn");
    ("with it held. Both halves of the celebration will hand it over in their own time: the");
    ("faces once the arriving light on them is spent, the house once the camera has reached");
    ("it. Until then the map keeps saying what it said a moment ago.");
    ("The ground is held only when there IS a house to hold. Held on a prayer that finished");
    ("nothing, the map would sit a draw behind for no reason and the release would be a line");
    ("somebody had to remember to reach.");
    ("The draw is asked for HERE, after the holds are set and not before them, or it would");
    ("be the one draw in the whole celebration that showed everything.");
    let holding = list_empty_not_is(lit_now);
    hold_set(holding, people_now);
    render();
    await app_g_bless_overlay_render_tap_prayed_celebrate({
      r: r2,
      lit_now,
      people_now,
      rung_before,
      rung,
      ground_show,
      faces_show,
    });
  }
  function pray_person_id(id) {
    let r4 = app_g_bless_overlay_render_tap_prayed_person_id_pray(
      id,
      view_everyone,
      person_pray,
    );
    return r4;
  }
  function tap_prayed(target) {
    "Whether the tap landed on somebody, and so became a prayer instead of a walk.";
    let person = app_g_bless_overlay_render_tap_prayed_person_at(
      target,
      view_now,
    );
    if (not(person)) {
      return false;
    }
    function amen() {
      person_pray(person);
    }
    app_g_bless_overlay_render_tap_prayed_amen_ask(container_map, rung, amen);
    return true;
  }
  let r = {
    walking,
    world,
    bar,
    render,
    tap_prayed,
    pray_person_id,
  };
  return r;
}
