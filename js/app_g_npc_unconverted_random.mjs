import { app_g_npcs_get } from "./app_g_npcs_get.mjs";
import { list_filter_object_includes } from "./list_filter_object_includes.mjs";
import { list_random_item } from "./list_random_item.mjs";
export async function app_g_npc_unconverted_random() {
  "one of the people in the world who does not yet believe, picked at random - the person any screen that wants 'an unbeliever' should be handed.";
  "three places asked for this and each spelled the whole question out: fetch everyone, keep the ones whose christian field is false, take one at random. what counts as unconverted is a fact about the game, not about any one screen, so a fourth site would have had to know the field name too - and a screen holding the wrong answer to that would quietly open a believer as somebody to evangelise.";
  let npcs = await app_g_npcs_get();
  let unconverted = list_filter_object_includes(npcs, {
    christian: false,
  });
  let npc = list_random_item(unconverted);
  return npc;
}
