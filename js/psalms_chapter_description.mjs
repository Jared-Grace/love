import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { ebible_verses_storage_browser } from "./ebible_verses_storage_browser.mjs";
import { youtube_description_verses } from "./youtube_description_verses.mjs";
export async function psalms_chapter_description(chapter_number) {
  "The words of one chapter of the Psalms, verse by verse, written out to sit under a playlist of that chapter being sung.";
  "The words themselves are put there rather than a sentence about them, because a person looking for a Psalm searches for a line of it they remember, and only the words can answer that search. The wording is the Berean Standard Bible, which is free for anyone to use for anything.";
  "A long Psalm is cut where a verse ends and told plainly how far it runs. The cutting itself is not done here: it is the same cutting every description of Bible verses needs, so it is said once next door and asked for.";
  arguments_assert(arguments, 1);
  let chapter_code = ebible_chapter_code_pad("PSA", chapter_number);
  let verses = await ebible_verses_storage_browser("engbsb", chapter_code);
  let verse_last = verses[subtract(verses.length, 1)].verse_number;
  let opening = "Psalm " + chapter_number + " - Berean Standard Bible";
  let closing =
    "Psalm " + chapter_number + " runs to verse " + verse_last + ".";
  let description = youtube_description_verses(opening, verses, closing);
  return description;
}
