import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_npc_elements } from "./app_shared_game_npc_elements.mjs";
import { g_img_square_style_position_object } from "./g_img_square_style_position_object.mjs";
import { each } from "./each.mjs";
export function app_shared_game_npc_place(npc) {
  arguments_assert(arguments, 1);
  ("Puts everything a person is made of on the square they stand on, sliding there from wherever it is drawn now.");
  ("Asked by a step, which has just changed that square, and by the end of a hold, which pinned the person where their picture had got to - part way across a square, often - and has to hand them back to it. Nothing else would: a person whose next step is a turn, or a stretch of standing, stays drawn between two squares for as long as that lasts.");
  let elements = app_shared_game_npc_elements(npc);
  function element_place(element) {
    g_img_square_style_position_object(npc, element);
  }
  each(elements, element_place);
}
