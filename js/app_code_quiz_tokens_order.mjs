import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_quiz_tokens_places } from "./app_code_quiz_tokens_places.mjs";
import { property_get } from "./property_get.mjs";
import { text_slice } from "./text_slice.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function app_code_quiz_tokens_order(code) {
  arguments_assert(arguments, 1);
  ("the tokens of the code in the order they are read, left to right and then top to bottom, joined by spaces: if (a) { becomes if ( a ) {");
  let places = app_code_quiz_tokens_places(code);
  function text_of(place) {
    let start = property_get(place, "start");
    let end = property_get(place, "end");
    let text = text_slice(code, start, end);
    return text;
  }
  let texts = list_map(places, text_of);
  let order = list_join_space(texts);
  return order;
}
