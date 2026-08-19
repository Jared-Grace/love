import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { ebible_verses_storage_browser } from "./ebible_verses_storage_browser.mjs";
export async function psalms_chapter_verse_last(chapter_number) {
  "The number of the last verse one chapter of the Psalms has, counted in the Berean Standard Bible.";
  "A chapter is asked for rather than a table of counts being written down here, because a table would be a second copy of something the text itself already says, and the two would quietly disagree the day either changed. The reading keeps what it fetches on this disk, so asking for all hundred and fifty costs the wait once.";
  arguments_assert(arguments, 1);
  let chapter_code = ebible_chapter_code_pad("PSA", chapter_number);
  let verses = await ebible_verses_storage_browser("engbsb", chapter_code);
  let last = 0;
  for (let verse of verses) {
    let number = Number(verse.verse_number);
    if (greater_than(number, last)) {
      last = number;
    }
  }
  return last;
}
