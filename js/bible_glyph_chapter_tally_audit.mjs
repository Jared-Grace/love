import { object_property_names } from "./object_property_names.mjs";
import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read } from "./file_read.mjs";
import { path_join } from "./path_join.mjs";
export async function bible_glyph_chapter_tally_audit(chapter_code) {
  arguments_assert(arguments, 1);
  ("Compares every mark in the drafted chapter file scripts/temp/bible_glyph_chapter_<code>.mjs against the marks by frequency line of scripts/temp/<CODE>draft.txt, and says TALLY MATCH or names each mark whose count differs.");
  ("The hand step between the draft and the chapter file has no other gate behind it: a dropped or added mark passes every later command, so this is run before a chapter lands and it must match exactly.");
  let file_path = path_join([
    "scripts",
    "temp",
    "bible_glyph_chapter_" + chapter_code.toLowerCase() + ".mjs",
  ]);
  let file = await file_read(file_path);
  let file_path2 = path_join(["scripts", "temp", chapter_code + "draft.txt"]);
  let draft = await file_read(file_path2);
  let m = {};
  for (let x of file.match(/\$[a-z_+]*/g) || []) m[x] = (m[x] || 0) + 1;
  let line = draft
    .split("=== marks by frequency\n")[1]
    .split("\n")[0]
    .trim()
    .split(/\s+/);
  let n = {};
  for (let i = 0; less_than(i, line.length); i += 2)
    n[line[i + 1]] = Number(line[i]);
  let d = [];
  for (let k of new Set([
    ...object_property_names(m),
    ...object_property_names(n),
  ]))
    if (not_equal(m[k], n[k])) {
      d.push(k + " file=" + m[k] + " draft=" + n[k]);
    }
  function lambda(a, b) {
    let r = a + b;
    return r;
  }
  let total = Object.values(n).reduce(lambda, 0);
  let r2 = d.length
    ? "MISMATCH\n" + d.join("\n")
    : "TALLY MATCH " +
      object_property_names(n).length +
      " marks, " +
      total +
      " drawn";
  return r2;
}
