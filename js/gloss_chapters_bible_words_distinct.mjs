import { each } from "./each.mjs";
import { ebible_chapter_text_prepared } from "./ebible_chapter_text_prepared.mjs";
import { identity } from "./identity.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_unique } from "./list_unique.mjs";
import { property_get } from "./property_get.mjs";
import { text_punctuation_split } from "./text_punctuation_split.mjs";
export async function gloss_chapters_bible_words_distinct(
  bible_folder,
  chapter_codes,
) {
  "Every different word the named chapters are written with in one bible, each counted once however many times and places it stands.";
  "This is what says the size of the reading a set of chapters will need before any of it is begun. A chapter store can only be asked about chapters somebody has already authored, so the chapters nobody has started - which are the whole of the work left - can be counted no other way than from the bible itself.";
  "The words come back cut at their punctuation and spelled exactly as the page spells them, capitals and all. Lowering them is what a dictionary wants and is done by whoever asks one, but it is not done here, because which words the text only ever writes with a capital is the one way a name can be told from a word - and a reading that lowered them first could never ask.";
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
    return bare;
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
