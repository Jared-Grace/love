import { arguments_assert } from "./arguments_assert.mjs";
import { json_from } from "./json_from.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
export function js_code_getter_literal_frozen_texts(body) {
  arguments_assert(arguments, 1);
  let frozen = [...body.matchAll(/text_frozen\(\s*("(?:[^"\\]|\\.)*")\s*\)/g)];
  function frozen_text(found) {
    let text = json_from(found[1]);
    return text;
  }
  let texts = list_map_unique(frozen, frozen_text);
  return texts;
}
