import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { function_name_to_path_absolute } from "./function_name_to_path_absolute.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { not } from "./not.mjs";
import { json_from } from "./json_from.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function bible_glyph_roots_drafted_row_add(
  language,
  strong,
  root,
  glyph,
  gloss,
) {
  arguments_assert(arguments, 5);
  ("Seat one more word in a drafted table: a new row holding its Strong's number, its root, its picture sequence and its gloss, written after the last row there. Hands back the row as it was written.");
  ("$plain language");
  ("hebrew or greek, the word that picks the drafted table. Any other word is refused. A Strong's number belongs to a testament, so the table has to be named rather than guessed from the number.");
  ("$plain strong");
  ("the Strong's number as digits, the key the row is read by.");
  ("$plain root");
  ("the root's name, which files the word with its family.");
  ("$plain glyph");
  ("the picture sequence, names joined by plus.");
  ("$plain gloss");
  ("the English meaning, read by people. It may not hold a comma, because this command's arguments travel joined by commas into the commit that records it, and a comma inside one would split it into two on the way back.");
  ("IT REFUSES A NUMBER THE TABLE ALREADY SEATS. A second row under one number would give the word two pictures and the reader would meet whichever the merge kept; reseating a word is a different command, the one that moves a whole root.");
  ("The gates decide whether the picture is free; this only writes the row. A picture already standing for another root comes back red from the collisions gate, which is the one place that question is answered.");
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
  if (gloss.includes(",")) {
    assert_json(false, {
      gloss,
      hint: "a gloss may not hold a comma",
    });
  }
  let path = function_name_to_path_absolute(name);
  let text = await file_read(path);
  let lines = text_split_newline(text);
  let last = -1;
  let indent = "";
  for (let i = 0; less_than(i, lines.length); i++) {
    let line = lines[i];
    let trimmed = line.trim();
    if (not(trimmed.startsWith('["') && trimmed.endsWith("],"))) {
      continue;
    }
    let json2 = trimmed.slice(0, -1);
    let row = json_from(json2);
    if (equal(row[0], strong)) {
      assert_json(false, {
        language,
        strong,
        seated: row,
        hint: "this number already has a row",
      });
    }
    last = i;
    let difference = subtract(line.length, line.trimStart().length);
    indent = line.slice(0, difference);
  }
  if (equal(last, -1)) {
    assert_json(false, {
      language,
      hint: "the table has no rows to write after",
    });
  }
  let row_new = [strong, root, glyph, gloss];
  function lambda(cell) {
    let json = json_to(cell);
    return json;
  }
  let spelled = row_new.map(lambda).join(", ");
  lines.splice(last + 1, 0, indent + "[" + spelled + "],");
  let contents = list_join_newline(lines);
  await file_overwrite(path, contents);
  return row_new;
}
