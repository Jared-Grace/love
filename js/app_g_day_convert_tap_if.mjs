import { app_g_day_tap_action_if } from "./app_g_day_tap_action_if.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_g_day_convert } from "./app_g_day_convert.mjs";
export async function app_g_day_convert_tap_if(div_map, npc) {
  ("in the #day_unbelievers stub, tapping the DISCERNED target person IS the (stubbed) conversation — short-circuit to an instant GREEN believes cross (",
    fn_name("app_g_day_convert"),
    ") instead of opening the real quiz, clear the target + gold guide, and report TRUE so ",
    fn_name("app_g_click_npc"),
    " stops. returns FALSE for the normal game and for any non-target tap (nobody discerned, or a different person — the blocked-gate dove handles that), so it is safe to call from the shared NPC-tap. this is how the route exercises the macro cycle (walk → conversation → sky) without playing turns; the real conversation has its own #");
  ("with NOBODY discerned, tapping any of the day's chosen converts them the same way. the stub stands in for a whole conversation, and there is no conversation to play here whether or not a prayer picked the person - leaving that one case to the real quiz meant the demo told two different stories about what a tap does, and the one it told when you had not prayed was the one that could not be finished. praying still CHANGES things: it names who is next and lays the gold guide to them, and from then on the blocked-gate dove turns you away from everybody else.");
  ("which people are singled out, and how a discerned one is treated differently from a tap with no prayer behind it, is asked in one place now (",
    fn_name("app_g_day_tap_action_if"),
    ") - because the day asks the same question a second time, about the believers still to be gathered. what is left here is the only part that is about converting: which list, and what to do");
  async function convert(person) {
    await app_g_day_convert(div_map, person);
  }
  let converted = await app_g_day_tap_action_if(npc, "talkable", convert);
  return converted;
}
