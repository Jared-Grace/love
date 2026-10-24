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
export async function bible_glyph_chapter_verse_word_redraw(
  chapter_code,
  verse_number,
  from,
  glyphs,
) {
  arguments_assert(arguments, 4);
  ("$plain chapter_code");
  ("$plain verse_number");
  ("$plain from");
  ("$plain glyphs");
  ("the code is a written chapter's own, the verse number one of its verses, from a picture name or an English word, and the glyphs picture names joined by dashes. Each names something to look up and nothing that runs.");
  ("Redraws each word of one verse of a written picture Bible chapter that is the picture or the English word named, as the picture a reader of the sentence chose for it - the first as the first name, the second as the second, and so on - keeping the punctuation around it.");
  ("THIS IS FOR WHAT A COUNT CANNOT DECIDE. When the table moves a word to a new picture, a chapter drawn earlier keeps the old one, and where the old picture also stands for another word in the same verse only a reader of the sentence can say which is which. The reading is made by someone who read it and handed in here, never guessed. To keep a word as it is, name its own picture again.");
  ("A WORD MATCHES ONLY WHOLE. The picture named matches its bare drawing and never a joined one, so the burning heart does not match the name of Israel built on it; an English word matches only where the verse still spells it in English.");
  ("IT REFUSES A READING THAT DOES NOT FIT. The verse has to hold exactly as many matching words as there are names, so a reading made against a verse that has since changed cannot land on the wrong word.");
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
    let line = lines[index];
    let left2 = text_trim(line);
    if (equal(left2, "},")) {
      break;
    }
    let token = left2.match(/^"(.*)",?$/);
    if (not_equal(token, null)) {
      let parts = token[1].match(/^([“"‘(]*)(.*?)([.,;:!?”’)]*)$/);
      let core = parts[2];
      if (equal(core, "$" + from) || equal(core, from)) {
        let name = names[changed];
        changed = changed + 1;
        lines[index] = line.replace(token[1], parts[1] + "$" + name + parts[3]);
      }
    }
    index = index + 1;
  }
  if (not_equal(changed, names.length)) {
    throw new Error(
      "words matched " +
        changed +
        ", names given " +
        names.length +
        ": " +
        chapter_code +
        " " +
        verse_number +
        " " +
        from,
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
