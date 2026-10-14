import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_documents_read } from "./lyric_video_documents_read.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { equal } from "./equal.mjs";
export async function lyric_video_documents_pictures_part_missing() {
  arguments_assert(arguments, 0);
  ("Every singing of part of a passage that has no pictures at all while a singing of the whole passage it sits inside does have them, named beside the whole it could take them from.");
  ("★ THE WHOLE IS FOUND BY THE NAME BEING A LONGER SPELLING OF IT, NEVER BY TAKING THE VERSE NUMBERS APART. Psalm 92:1-8 is filed as the name of Psalm 92 with more on the end, and so is another take of it and the version made from an mp3; reading the numbers would answer for the first spelling and quietly miss the other two. The longest such name wins, so another take of a part takes its pictures from that part rather than from the whole chapter.");
  ("A DOCUMENT HOLDING EVEN ONE PICTURE IS LEFT ALONE, because what is being looked for is the gap, and a document somebody has begun is a choice already made.");
  ("★ THE WHOLE MUST HAVE MORE LINES, WHICH IS WHAT TELLS A PART FROM ANOTHER TAKE OF THE SAME WORDS. A second recording is filed under the same name with a word on the end, exactly like a part is, so the name alone cannot separate them; but a take sings every line its sibling sings and a part sings fewer. Without this, every take of every psalm counted as a part and the answer came back three hundred long.");
  let read = await lyric_video_documents_read();
  let holding = [];
  for (let one of read) {
    let pictures = one.document.pictures;
    if (not_equal(pictures, undefined) && greater_than(pictures.length, 0)) {
      holding.push(one);
    }
  }
  let missing = [];
  for (let one of read) {
    let pictures = one.document.pictures;
    if (not_equal(pictures, undefined) && greater_than(pictures.length, 0)) {
      continue;
    }
    let best = null;
    for (let whole of holding) {
      let start = whole.name + "_";
      let shorter = less_than(
        one.document.lines.length,
        whole.document.lines.length,
      );
      if (text_starts_with(one.name, start) && shorter) {
        if (
          equal(best, null) ||
          greater_than(whole.name.length, best.name.length)
        ) {
          best = whole;
        }
      }
    }
    if (equal(best, null)) {
      continue;
    }
    let one_missing = {
      name: one.name,
      path: one.path,
      name_whole: best.name,
      path_whole: best.path,
    };
    missing.push(one_missing);
  }
  return missing;
}
