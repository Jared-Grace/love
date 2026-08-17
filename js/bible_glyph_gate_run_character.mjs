import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { assert_json } from "./assert_json.mjs";
export function bible_glyph_gate_run_character(r) {
  arguments_assert(arguments, 1);
  let orthodox = property_get(r, "orthodox");
  let known = property_get(r, "known");
  for (let character of orthodox) {
    let replaces = property_exists(known, character.name);
    assert_json(replaces, {
      name: character.name,
      hint: "a tradition may only redraw a glyph the base vocabulary already names, because verses are written against the base names",
    });
  }
}
