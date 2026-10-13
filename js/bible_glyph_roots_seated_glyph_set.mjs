import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { function_name_to_path_absolute } from "./function_name_to_path_absolute.mjs";
import { file_read } from "./file_read.mjs";
import { not_equal } from "./not_equal.mjs";
import { json_to } from "./json_to.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function bible_glyph_roots_seated_glyph_set(
  language,
  strong,
  glyph_before,
  glyph_after,
) {
  arguments_assert(arguments, 4);
  ("Reseat one word in a seated table, the reviewed one rather than the drafted one: the word under this Strong's number has its picture sequence changed from glyph_before to glyph_after. Hands back the word as it was written.");
  ("$plain language");
  ("hebrew or greek, the word that picks the seated table.");
  ("$plain strong");
  ("the Strong's number as digits, the key the word is read by.");
  ("$plain glyph_before");
  ("the picture sequence the word holds now, names joined by plus.");
  ("$plain glyph_after");
  ("the picture sequence it is to hold.");
  ("THE TWIN OF THE DRAFTED SETTER, FOR THE OTHER SHAPE OF TABLE. A seated table writes each word as an object with a strong and a glyph property, where a drafted one writes a row of four cells, so the one pattern cannot find both. It takes the old picture for the same reason the drafted one does: run twice, it refuses rather than writing over a word somebody has since reseated.");
  ("Built on 2026-10-13 when the human said different root words take different pictures even when they mean the same thing, which turned the pairs the collision record held into work, and every one of them sits in a seated table.");
  let names = {
    hebrew: fn_name("bible_glyph_roots_hebrew"),
    greek: fn_name("bible_glyph_roots"),
  };
  let name = property_get_or_null(names, language);
  if (equal(name, null)) {
    assert_json(false, {
      language,
      hint: "say hebrew or greek",
    });
  }
  let path = function_name_to_path_absolute(name);
  let text = await file_read(path);
  let escaped = glyph_before.replaceAll("+", "\\+");
  let pattern = new RegExp(
    '(strong:\\s*"' + strong + '",\\s*glyph:\\s*)"' + escaped + '"',
    "g",
  );
  let found = text.match(pattern);
  if (not_equal(found?.length, 1)) {
    assert_json(false, {
      language,
      strong,
      glyph_before,
      found,
      hint: "exactly one word under this number must hold this picture now",
    });
  }
  let contents = text.replace(pattern, "$1" + json_to(glyph_after));
  await file_overwrite(path, contents);
  let word = [strong, glyph_after];
  return word;
}
