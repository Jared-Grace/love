import { json_from } from "./json_from.mjs";
import { json_to } from "./json_to.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_name_to_path_absolute } from "./function_name_to_path_absolute.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_add } from "./list_add.mjs";
import { text_split_plus } from "./text_split_plus.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { assert_json } from "./assert_json.mjs";
export async function bible_glyph_roots_drafted_part_replace(
  root,
  part_before,
  part_after,
) {
  arguments_assert(arguments, 3);
  ("Reseat one root in the drafted tables: in every row filed under the root, each part of the picture sequence spelled part_before becomes part_after. Marks and the other parts are left alone, so pit+doing and pit+thing follow the root together.");
  ("A ROOT MOVES AS A WHOLE OR NOT AT ALL. One picture per root is the alphabet's rule, so a command that changed one word of a root would leave its siblings drawn the old way and the root wearing two pictures. The rows are found by the root's name rather than by Strong's number for that reason.");
  ("It edits the drafted tables only, where every word is one row on one line. The hand-written table spells a word as a record over several lines and is edited by hand.");
  ("IT REFUSES WHEN NOTHING CHANGED. A misspelled root or part matches no row, and a command that quietly did nothing would read the same as one that worked.");
  let names = [
    fn_name("bible_glyph_roots_hebrew_drafted"),
    fn_name("bible_glyph_roots_greek_drafted"),
  ];
  let changed = [];
  for (let name of names) {
    let path = function_name_to_path_absolute(name);
    let text = await file_read(path);
    let lines = text_split_newline(text);
    let lines_after = [];
    let touched = false;
    for (let line of lines) {
      let trimmed = line.trim();
      let row = null;
      if (trimmed.startsWith('["') && trimmed.endsWith("],")) {
        let json2 = trimmed.slice(0, -1);
        row = json_from(json2);
      }
      if (equal(row, null) || not_equal(row[1], root)) {
        list_add(lines_after, line);
        continue;
      }
      let parts = [];
      for (let part of text_split_plus(row[2])) {
        if (equal(part, part_before)) {
          list_add(parts, part_after);
        } else {
          list_add(parts, part);
        }
      }
      let glyph = list_join_plus(parts);
      if (equal(glyph, row[2])) {
        list_add(lines_after, line);
        continue;
      }
      list_add(changed, {
        strong: row[0],
        before: row[2],
        after: glyph,
      });
      row[2] = glyph;
      let difference = subtract(line.length, line.trimStart().length);
      let indent = line.slice(0, difference);
      function lambda(cell) {
        let json = json_to(cell);
        return json;
      }
      let spelled = row.map(lambda).join(", ");
      list_add(lines_after, indent + "[" + spelled + "],");
      touched = true;
    }
    if (touched) {
      let contents = list_join_newline(lines_after);
      await file_overwrite(path, contents);
    }
  }
  if (equal(changed.length, 0)) {
    assert_json(false, {
      root,
      part_before,
      part_after,
      hint: "no drafted row under this root has this part",
    });
  }
  return changed;
}
