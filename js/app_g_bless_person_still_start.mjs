import { arguments_assert } from "./arguments_assert.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_game_npc_img_get } from "./app_shared_game_npc_img_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { divide } from "./divide.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_game_npc_elements } from "./app_shared_game_npc_elements.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { each } from "./each.mjs";
export function app_g_bless_person_still_start(person, square) {
  arguments_assert(arguments, 2);
  ("Stops one person exactly where their picture has got to, and marks them as somebody");
  ("who is not to take another step until they are let go.");
  ("Both halves are needed and neither is enough. The mark stops a NEW step being taken;");
  ("writing the position down stops the step already under way. A person crosses a tile");
  ("over the whole gap between one of their steps and the next, so at any moment most of");
  ("the street is part way between two squares - and a picture part way is a picture the");
  ("browser is still moving.");
  ("Why that matters here: a camera journey switches sliding off for everything on the map,");
  ("and a slide switched off does not stop, it FINISHES. Every person part way across a");
  ("tile jumps the rest of the way in one frame, all of them at once - which is a street");
  ("full of people teleporting, and it is what a player sees straight after praying.");
  ("Written as a share of a square rather than as a number of pixels, which is the whole");
  ("trick. A camera journey changes how big a square is drawn, dozens of times a second;");
  ("a person pinned at so many pixels would be pinned to the OLD size and slide out of the");
  ("street as it grew. Pinned at three and a half squares across, they are three and a half");
  ("squares across at every size the journey passes through.");
  ("Only where they are is written, and not how deep they are drawn nor how long they take");
  ("to slide. Depth is worked out from the square they are ON and is right already; the");
  ("length of a slide belongs to their walking and is theirs to keep, so that the step they");
  ("take after they are let go is the ordinary one.");
  ("Somebody who has no picture is marked and left alone. That is a person in a world that");
  ("has been built but not drawn, which is what a dev screen does, and asking an absent");
  ("picture where it has got to is the only thing here that could fail.");
  property_set(person, "held_still", true);
  let img = app_shared_game_npc_img_get(person);
  let drawn = null_not_is(img);
  if (not(drawn)) {
    return;
  }
  let element = html_component_element_get(img);
  let x = divide(element.offsetLeft, square);
  let y = divide(element.offsetTop, square);
  let size = g_img_square_size_css();
  let left = text_combine_multiple(["calc(", x, " * (", size, "))"]);
  let top = text_combine_multiple(["calc(", y, " * (", size, "))"]);
  ("Everything the person is made of is given the same place, and not only their picture.");
  ("A light under somebody and a ring around them are their own things on the map, and one");
  ("left at the square the picture was heading for would stand a step away from the person");
  ("it belongs to for as long as the celebration lasts.");
  let elements = app_shared_game_npc_elements(person);
  function part_place(part) {
    html_style_assign(part, {
      left: left,
      top: top,
    });
  }
  each(elements, part_place);
}
