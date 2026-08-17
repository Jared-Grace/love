import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_conversation_pronouns } from "./app_g_conversation_pronouns.mjs";
import { property_get } from "./property_get.mjs";
export async function app_g_conversation_meet(prayer, npc) {
  arguments_assert(arguments, 2);
  let r7 = await app_g_conversation_pronouns(prayer, npc);
  let pronouns = property_get(r7, "pronouns");
  let greeting = property_get(r7, "greeting");
  let christian = property_get(r7, "christian");
  let meet = property_get(r7, "meet");
  let r = {
    pronouns,
    greeting,
    christian,
    meet,
  };
  return r;
}
