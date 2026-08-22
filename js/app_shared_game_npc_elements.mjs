import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_npc_img_get } from "./app_shared_game_npc_img_get.mjs";
import { app_shared_game_npc_cross_get } from "./app_shared_game_npc_cross_get.mjs";
import { app_shared_game_npc_glow_get } from "./app_shared_game_npc_glow_get.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
export function app_shared_game_npc_elements(npc) {
  arguments_assert(arguments, 1);
  ("Everything on the map that IS this person - their picture, the cross over them, and the");
  ("light under them - as one list.");
  ("A person is drawn as several separate elements sitting on the same tile, and every one");
  ("of them has to be told about every step. Asked for one at a time, each caller ended up");
  ("with the same block of code written once per part: fetch it, check it is there, place");
  ("it, set its transition. Two parts made that a duplication; a third made it a shape.");
  ("The real cost was never the typing. A caller who knew about two of the three moved two");
  ("of them, and the third stayed where the person used to be - which is a light hanging");
  ("over an empty square, with nothing broken and no error to say so. Asking one question");
  ("means a part added later is carried by every caller that already exists, rather than by");
  ("whichever ones somebody remembers to visit.");
  ("Only the parts a person actually HAS come back. A picture is the one everybody has; a");
  ("cross belongs to somebody converted today and a light to somebody prayed for, so most");
  ("people have neither. Filtering here is what lets a caller simply do the same thing to");
  ("everything in the list.");
  let img = app_shared_game_npc_img_get(npc);
  let cross = app_shared_game_npc_cross_get(npc);
  let glow = app_shared_game_npc_glow_get(npc);
  let all = [img, cross, glow];
  let elements = list_filter_null_not_is(all);
  return elements;
}
