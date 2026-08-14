import { each } from "./each.mjs";
import { ebible_chapter_text_prepared } from "./ebible_chapter_text_prepared.mjs";
import { identity } from "./identity.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_unique } from "./list_unique.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_punctuation_split } from "./text_punctuation_split.mjs";
export async function gloss_chapters_bible_words_distinct(
  bible_folder,
  chapter_codes,
) {
  "Every different word the named chapters are written with in one bible, each counted once however many times and places it stands.";
  "This is what says the size of the reading a set of chapters will need before any of it is begun. A chapter store can only be asked about chapters somebody has already authored, so the chapters nobody has started - which are the whole of the work left - can be counted no other way than from the bible itself.";
  "The words come back cut at their punctuation and lowered, which is the shape a dictionary is asked about them in. Left as the page writes them, a word standing at the start of a sentence and the same word inside one are two things to look up.";
  "$plain bible_folder";
  "the folder is a bible's name, like cebulb, chosen from the bibles this repo already holds. It names text to read and nothing that runs.";
  async function chapter_words(chapter_code) {
    let prepared = await ebible_chapter_text_prepared(
      bible_folder,
      chapter_code,
      identity,
    );
    let text = property_get(prepared, "text");
    let bare = text_punctuation_split(text);
    let lowered = list_map(bare, text_lower_to);
    return lowered;
  }
  let chapters = await list_map_async(chapter_codes, chapter_words);
  let words = [];
  function chapter_add(chapter) {
    list_add_multiple(words, chapter);
  }
  each(chapters, chapter_add);
  let distinct = list_unique(words);
  return distinct;
}
