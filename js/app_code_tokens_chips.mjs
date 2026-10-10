import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_quiz_tokens_places } from "./app_code_quiz_tokens_places.mjs";
import { property_get } from "./property_get.mjs";
import { text_slice } from "./text_slice.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { each } from "./each.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_tokens_chips(parent, code) {
  arguments_assert(arguments, 2);
  ("the tokens of the code in the order they are read, each drawn as a code chip of its own with a space between, so a learner sees where one token ends and the next begins, as the human asked 2026-10-10");
  let places = app_code_quiz_tokens_places(code);
  let parts = [""];
  function part_add(place) {
    let start = property_get(place, "start");
    let end = property_get(place, "end");
    let text = text_slice(code, start, end);
    list_add_multiple(parts, [text, " "]);
  }
  each(places, part_add);
  html_div_cycle_code(parent, parts);
}
