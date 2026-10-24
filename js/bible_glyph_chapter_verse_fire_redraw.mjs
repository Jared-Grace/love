import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function bible_glyph_chapter_verse_fire_redraw(
  chapter_code,
  verse_number,
  glyphs,
) {
  arguments_assert(arguments, 3);
  ("$plain chapter_code");
  ("$plain verse_number");
  ("$plain glyphs");
  ("the code is a written chapter's own, the verse number one of its verses, and the glyphs picture names joined by dashes. Each names something to look up and nothing that runs.");
  ("Redraws each bare fire picture in one verse of a written picture Bible chapter as the picture a reader of the sentence chose for it, the first fire as the first name, the second as the second, and so on.");
  ("THIS IS FOR THE VERSES A COUNT COULD NOT DECIDE. Where real fire and God meet in one verse, or God and the gods of the nations, which fire stands for which is a reading of the sentence; the reading is made by someone who read it and handed in here, never guessed.");
  ("IT REFUSES A READING THAT DOES NOT FIT. The verse has to draw exactly as many bare fires as there are names, so a reading made against a verse that has since changed cannot land on the wrong fire.");
  let names = String(glyphs).split("-");
  let lower = text_lower_to(chapter_code);
  let f_path = text_combine_3("js/bible_glyph_chapter_", lower, ".mjs");
  let before = await file_read(f_path);
  let lines = text_split_newline(before);
  let opener = "verse_number: " + verse_number + ",";
  function lambda(line) {
    let left = text_trim(line);
    let eq = equal(left, opener);
    return eq;
  }
  let start = lines.findIndex(lambda);
  if (less_than(start, 0)) {
    throw new Error("no such verse: " + chapter_code + " " + verse_number);
  }
  let changed = 0;
  let index = start + 1;
  while (less_than(index, lines.length)) {
    let left2 = text_trim(lines[index]);
    if (equal(left2, "},")) {
      break;
    }
    function lambda2() {
      let name = names[changed];
      changed = changed + 1;
      let r2 = "$" + name;
      return r2;
    }
    lines[index] = lines[index].replace(/\$fire(?![a-z_+])/g, lambda2);
    index = index + 1;
  }
  if (not_equal(changed, names.length)) {
    throw new Error(
      "fires drawn " +
        changed +
        ", names given " +
        names.length +
        ": " +
        chapter_code +
        " " +
        verse_number,
    );
  }
  let contents = list_join_newline(lines);
  await file_overwrite(f_path, contents);
  let r = {
    chapter_code,
    verse_number,
    redrawn: changed,
  };
  return r;
}
