import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { function_name_to_path_absolute } from "./function_name_to_path_absolute.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { json_from } from "./json_from.mjs";
import { not_equal } from "./not_equal.mjs";
import { subtract } from "./subtract.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
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
  let lines = text_split_newline(text);
  for (let i = 0; less_than(i, lines.length); i++) {
    let line = lines[i];
    let trimmed = line.trim();
    if (not(trimmed.startsWith('["') && trimmed.endsWith("],"))) {
      continue;
    }
    let json2 = trimmed.slice(0, -1);
    let row = json_from(json2);
    if (not_equal(row[0], strong)) {
      continue;
    }
    if (not_equal(row[2], glyph_before)) {
      assert_json(false, {
        language,
        strong,
        glyph_before,
        seated: row,
        hint: "the row does not hold this picture now",
      });
    }
    row[2] = glyph_after;
    let difference = subtract(line.length, line.trimStart().length);
    let indent = line.slice(0, difference);
    function lambda(cell) {
      let json = json_to(cell);
      return json;
    }
    lines[i] = indent + "[" + row.map(lambda).join(", ") + "],";
    let contents = list_join_newline(lines);
    await file_overwrite(path, contents);
    return row;
  }
  assert_json(false, {
    language,
    strong,
    hint: "no row has this number",
  });
}
