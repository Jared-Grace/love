import { arguments_assert } from "./arguments_assert.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { ebible_testament_new_name } from "./ebible_testament_new_name.mjs";
import { equal } from "./equal.mjs";
export function app_emoji_bible_original_language_text(chapter_code) {
  arguments_assert(arguments, 1);
  ("What the language a chapter was written in is called on the picture Bible's settings: Greek for the New Testament, Hebrew/Aramaic for the Old, asked for by the human.");
  ("$plain chapter_code");
  ("the code is a chapter's name, like JHN04, or nothing when no chapter is open. It names a place in the canon and nothing that runs.");
  ("THE OLD TESTAMENT SAYS HEBREW/ARAMAIC, not Hebrew alone, because parts of Daniel and Ezra are written in Aramaic and a label that said Hebrew there would be wrong. Rejected: deciding per chapter between Hebrew and Aramaic, which would split one book's label by a line no reader is looking for.");
  ("WITH NO CHAPTER OPEN IT SAYS ORIGINAL, in small letters because it sits mid-sentence on the show and hide buttons, since there is then no testament to name and the choice still holds for every chapter. Rejected: Greek or Hebrew/Aramaic spelled out together, which made one button twice as long as its partner to say what original already says.");
  if (text_empty_is(chapter_code)) {
    let r = "original";
    return r;
  }
  let testament_name = bible_chapter_testament_name(chapter_code);
  let testament_new = ebible_testament_new_name();
  if (equal(testament_name, testament_new)) {
    let r2 = "Greek";
    return r2;
  }
  let r3 = "Hebrew/Aramaic";
  return r3;
}
