import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { ebible_chapter_verses_storage_outcome } from "./ebible_chapter_verses_storage_outcome.mjs";
import { false_is_assert } from "./false_is_assert.mjs";
import { list_empty_not_is_assert } from "./list_empty_not_is_assert.mjs";
import { giveaway_bible_verses_words_text } from "./giveaway_bible_verses_words_text.mjs";
import { giveaway_bible_verses_numbered_text } from "./giveaway_bible_verses_numbered_text.mjs";
import { giveaway_bible_verses_numbered_object } from "./giveaway_bible_verses_numbered_object.mjs";
import { json_to_indented } from "./json_to_indented.mjs";
export async function giveaway_psalms_chapter_text_report(chapter) {
  arguments_assert(arguments, 1);
  ("$plain chapter");
  ("The words of one psalm shown in all three of the shapes a box gives them away in, so they can be read before eighty-two boxes of them are written.");
  ("★ THE READING IS CHECKED FOR BEING ABSENT AND FOR BEING UNREACHABLE BEFORE ANYTHING IS RENDERED, BECAUSE BOTH COME BACK AS NO VERSES. The store says which of the two it was, and the renderers cannot - handed nothing they write an empty file and say nothing is wrong. That failure is the kind that gets published: a box holding a nought-byte text file beside twenty megabytes of singing, with the download page listing it as the words of the psalm. Unreachable is also the common one rather than the rare one - a hundred bibles were once recorded as holding no readable verse of Luke 1 and twenty eight of them read in full when asked again the same morning.");
  ("★ ONE PSALM AT A TIME, ON PURPOSE. The whole point of this report is to put the actual words in front of the person giving them away while the shapes can still be changed, and eighty-two psalms printed at once is not read - it is scrolled past. The decision being asked for is about the shape of a file, and one psalm settles that as well as all of them.");
  ("The psalm is handed in as a plain number because that is what a person types. The padded code it is stored under is built from it here, which is also the word that goes in the published file name.");
  ("Nothing is written to disk and nothing is uploaded. This prints.");
  let bible_folder = "engbsb";
  let chapter_code = ebible_chapter_code_pad("PSA", chapter);
  let outcome = await ebible_chapter_verses_storage_outcome(
    bible_folder,
    chapter_code,
  );
  false_is_assert(outcome.absent);
  false_is_assert(outcome.unreachable);
  let verses = outcome.verses;
  list_empty_not_is_assert(verses);
  let words = giveaway_bible_verses_words_text(verses);
  let numbered = giveaway_bible_verses_numbered_text(verses);
  let object = giveaway_bible_verses_numbered_object(verses);
  let json = json_to_indented(object);
  console.log("== words only");
  console.log(words);
  console.log("== words and verse numbers");
  console.log(numbered);
  console.log("== words and verse numbers as json");
  console.log(json);
  let r = {
    chapter_code,
    verses_count: verses.length,
    words_length: words.length,
    numbered_length: numbered.length,
    json_length: json.length,
  };
  return r;
}
