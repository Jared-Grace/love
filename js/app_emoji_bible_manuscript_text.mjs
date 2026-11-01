import { arguments_assert } from "./arguments_assert.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { ebible_testament_new_name } from "./ebible_testament_new_name.mjs";
import { equal } from "./equal.mjs";
export function app_emoji_bible_manuscript_text(chapter_code) {
  arguments_assert(arguments, 1);
  ("What the manuscript a chapter was written in is called on the button that puts the pictures in its order: Greek for the New Testament, Hebrew/Aramaic for the Old, asked for by the human.");
  ("$plain chapter_code");
  ("the code is a chapter's name, like JHN04, or nothing when no chapter is open. It names a place in the canon and nothing that runs.");
  ("THE OLD TESTAMENT SAYS HEBREW/ARAMAIC, not Hebrew alone, because parts of Daniel and Ezra are written in Aramaic and a button that said Hebrew there would be wrong. Rejected: deciding per chapter between Hebrew and Aramaic, which would split one book's button by a line no reader is looking for.");
  ("WITH NO CHAPTER OPEN IT SAYS ORIGINAL, because there is then no testament to name and the choice still holds for every chapter. Rejected: Greek or Hebrew/Aramaic spelled out together, which made the one button twice as long as its partner to say what original already says.");
  if (text_empty_is(chapter_code)) {
    let r = "Original manuscript";
    return r;
  }
  let testament_name = bible_chapter_testament_name(chapter_code);
  let testament_new = ebible_testament_new_name();
  if (equal(testament_name, testament_new)) {
    let r2 = "Greek manuscript";
    return r2;
  }
  let r3 = "Hebrew/Aramaic manuscript";
  return r3;
}
