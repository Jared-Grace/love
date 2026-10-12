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
export async function bible_glyph_roots_drafted_glyph_set(
  language,
  strong,
  glyph_before,
  glyph_after,
) {
  arguments_assert(arguments, 4);
  ("Reseat one word in a drafted table: the row under this Strong's number has its picture sequence changed from glyph_before to glyph_after. Hands back the row as it was written.");
  ("$plain language");
  ("hebrew or greek, the word that picks the drafted table.");
  ("$plain strong");
  ("the Strong's number as digits, the key the row is read by.");
  ("$plain glyph_before");
  ("the picture sequence the row holds now, names joined by plus.");
  ("$plain glyph_after");
  ("the picture sequence it is to hold.");
  ("IT TAKES THE OLD PICTURE AS WELL AS THE NEW ONE so that it says what it changed: the commit that records it then reads as the whole edit, and run a second time it refuses rather than quietly writing the same thing over a row somebody has since reseated.");
  ("ONE WORD, NOT ONE ROOT. Moving a whole root is the part-replace command's job; this is for a word whose picture differs from its siblings on purpose, as a name built on a root does.");
  let names = {
    hebrew: fn_name("bible_glyph_roots_hebrew_drafted"),
    greek: fn_name("bible_glyph_roots_greek_drafted"),
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
  ("THE ROW IS FOUND IN THE WHOLE TEXT, NOT LINE BY LINE. The formatter folds a row too long for one line into one cell per line, so a reading that only knew the one-line shape could not see those rows at all - a name with a long gloss was exactly that.");
  let escaped = glyph_before.replaceAll("+", "\\+");
  let pattern = new RegExp(
    '(\\[\\s*"' + strong + '",\\s*"[^"]*",\\s*)"' + escaped + '"',
    "g",
  );
  let found = text.match(pattern);
  if (not_equal(found?.length, 1)) {
    assert_json(false, {
      language,
      strong,
      glyph_before,
      found,
      hint: "exactly one row under this number must hold this picture now",
    });
  }
  let contents = text.replace(pattern, "$1" + json_to(glyph_after));
  await file_overwrite(path, contents);
  let row = [strong, glyph_after];
  return row;
}
