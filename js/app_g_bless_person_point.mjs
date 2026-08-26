import { sides_middle_point } from "./sides_middle_point.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_npc_img_get } from "./app_shared_game_npc_img_get.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
export function app_g_bless_person_point(person) {
  arguments_assert(arguments, 1);
  ("Where on the SCREEN a person is standing at this moment - the middle of their picture, measured in the same coordinates a finger touching the glass would be in.");
  ("Measured off the page rather than worked out from their square, and that is the whole reason it exists. A person's square says where they are on the map, and the map is scrolled, zoomed to whatever the phone has room for, and drawn at a tile size worked out from the screen - so turning a square into a place on the glass would mean redoing every one of those sums here, from values this cannot see. The page has already done them, and asking it is one line.");
  ("The MIDDLE and not a corner, because what asks for this is aiming an arrow at the person, and an arrow aimed at somebody's foot points to one side of them at close range.");
  let img = app_shared_game_npc_img_get(person);
  let rect = html_bounding_client_rect(img);
  let point = sides_middle_point(rect);
  return point;
}
