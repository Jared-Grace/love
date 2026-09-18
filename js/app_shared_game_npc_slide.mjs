import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_npc_elements } from "./app_shared_game_npc_elements.mjs";
import { object_assign } from "./object_assign.mjs";
import { app_shared_game_npc_place } from "./app_shared_game_npc_place.mjs";
import { g_img_square_style_transition_delay } from "./g_img_square_style_transition_delay.mjs";
import { each } from "./each.mjs";
export function app_shared_game_npc_slide(npc, to, delay) {
  arguments_assert(arguments, 3);
  ("Takes one person one tile onward without turning them: everything they are made of slides there together, still facing whatever way they were facing.");
  ("The MOVING half of a step, said on its own, because a step and a turn are two separate things that usually happen together. Somebody walking faces the way they are going; somebody shoved aside by a crowd parting may not turn at all, and a person who slides sideways still facing up the street is a person being moved rather than a person moving.");
  ("What a person is made of is filed under WHO they are, so a move moves what is on the screen and nothing has to be filed again. The parts are asked for as one list rather than named here one at a time - named, this knew about a picture and a cross, and a light added later would have been left standing on the tile the person walked off.");
  ("The delay is how long they stand still first, which is what puts one member of a line after another instead of all of them at once. It is written after the parts are placed, because placing one writes the whole transition over again.");
  let elements = app_shared_game_npc_elements(npc);
  object_assign(npc, to);
  app_shared_game_npc_place(npc);
  function element_delay(element) {
    g_img_square_style_transition_delay(element, delay);
  }
  each(elements, element_delay);
}
