import { fn_name } from "./fn_name.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_sky_set } from "./app_g_sky_set.mjs";
import { app_g_conversation_sky_target } from "./app_g_conversation_sky_target.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
import { integer_random_0 } from "./integer_random_0.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { not } from "./not.mjs";
export async function app_g_sky_reset() {
  ("snap the sky to the START of this conversation's slice and persist it, called when an unbeliever conversation BEGINS. ",
    fn_name("app_g_conversation_sky_target"),
    "(0) is that start: in a day session it is the slice's opening clock (6 AM at the first slice) and the conversation then walks the sky forward across its slice (",
    fn_name("app_g_sky_to"),
    ") as the parts complete; with no session it is plain MORNING, so ordinary tapped-npc play is untouched. also re-rolls the sky_seed (0-100) so each conversation's day gets a fresh, stable tint WARMTH (varies day to day, steady within the conversation — no flicker on refresh)");
  let g = await app_g_game_save_get();
  let value = app_g_conversation_sky_target(0);
  property_set(g, "sky_phase", value);
  let value2 = integer_random_0(101);
  property_set(g, "sky_seed", value2);
  let bag = global_function_initialize(app_g_sky_set, {});
  let b = property_exists(bag, "element");
  if (not(b)) {
    return;
  }
  let element = property_get(bag, "element");
  app_g_sky_set(element, g);
}
