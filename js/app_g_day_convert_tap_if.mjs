import { fn_name } from "./fn_name.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_day_convert } from "./app_g_day_convert.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { g_coordinates_same_is } from "./g_coordinates_same_is.mjs";
import { app_g_day_guide_clear } from "./app_g_day_guide_clear.mjs";
export async function app_g_day_convert_tap_if(div_map, npc) {
  ("in the #day_unbelievers stub, tapping the DISCERNED target person IS the (stubbed) conversation — short-circuit to an instant GREEN believes cross (",
    fn_name("app_g_day_convert"),
    ") instead of opening the real quiz, clear the target + gold guide, and report TRUE so ",
    fn_name("app_g_click_npc"),
    " stops. returns FALSE for the normal game and for any non-target tap (nobody discerned, or a different person — the blocked-gate dove handles that), so it is safe to call from the shared NPC-tap. this is how the route exercises the macro cycle (walk → conversation → sky) without playing turns; the real conversation has its own #");
  ("with NOBODY discerned, tapping any of the day's chosen converts them the same way. the stub stands in for a whole conversation, and there is no conversation to play here whether or not a prayer picked the person - leaving that one case to the real quiz meant the demo told two different stories about what a tap does, and the one it told when you had not prayed was the one that could not be finished. praying still CHANGES things: it names who is next and lays the gold guide to them, and from then on the blocked-gate dove turns you away from everybody else.");
  let state = app_g_day_state();
  let talkable = property_get(state, "talkable");
  if (null_is(talkable)) {
    return false;
  }
  let target = property_get(state, "target");
  if (null_is(target)) {
    let chosen = list_includes(talkable, npc);
    if (not(chosen)) {
      return false;
    }
    await app_g_day_convert(div_map, npc);
    return true;
  }
  let b = g_coordinates_same_is(npc, target);
  if (not(b)) {
    return false;
  }
  property_set(state, "target", null);
  app_g_day_guide_clear();
  await app_g_day_convert(div_map, npc);
  return true;
}
