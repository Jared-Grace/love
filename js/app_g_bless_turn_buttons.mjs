import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { g_directions } from "./g_directions.mjs";
export function app_g_bless_turn_buttons(container, on_turn) {
  arguments_assert(arguments, 2);
  ("The four ways the player can turn to look.");
  ("Turning is the only way to change who you can pray for, and that is the whole verb the");
  ("game is named after. There is deliberately no way to tap a person: tapping would let you");
  ("bless somebody standing behind you, and being unable to do that is the game.");
  ("The four are asked of the same list the character art is drawn from, so a facing can");
  ("never be offered here that nobody can be drawn facing.");
  function lambda$way(way) {
    function turn() {
      on_turn(way);
    }
    let label = text_combine("Face ", way);
    app_g_button_green(container, label, turn);
  }
  let list = g_directions();
  each(list, lambda$way);
}
