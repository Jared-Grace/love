import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
export function property_text_includes(object, property_name, part) {
  arguments_assert(arguments, 3);
  ("Whether the words a record keeps under a name contain a shorter run of words.");
  ("Which functions mention a given word in their code, which frozen value is");
  ("still spelled somewhere, whether a hook gave the reason expected of it. The");
  ("text is often long and is never wanted whole - only the answer to whether the");
  ("shorter run is somewhere in it.");
  let text = property_get(object, property_name);
  let includes = text_includes(text, part);
  return includes;
}
