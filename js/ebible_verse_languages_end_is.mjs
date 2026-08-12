import { bible_folders_sentence_end_marked } from "./bible_folders_sentence_end_marked.mjs";
import { bible_verse_end_is } from "./bible_verse_end_is.mjs";
import { ebible_verse_browser } from "./ebible_verse_browser.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_all } from "./list_all.mjs";
import { identity } from "./identity.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_verse_languages_end_is(verse, bible_folders) {
  "Whether one verse finishes a sentence in every language a reader is reading it in.";
  "All of them rather than one of them, because a reader who chose three languages is reading three, and a sentence left half said in the second is as unfinished as one left half said in the first. Languages split their verses the same way and so nearly always agree; where they do not, the one still mid-sentence is the one worth waiting for.";
  "A language whose sentences carry no mark is not asked, so it neither finishes the sentence nor holds it open. With nothing left to ask, the verse counts as finished - which is what the page did before it learned to wait at all.";
  let chapter_code = property_get(verse, "chapter_code");
  let property_name = verse_number_key();
  let verse_number = property_get(verse, property_name);
  let marked = bible_folders_sentence_end_marked(bible_folders);
  async function lambda(bible_folder) {
    let d = await ebible_verse_browser(
      bible_folder,
      chapter_code,
      verse_number,
    );
    let text = property_get(d, "text");
    let ended = bible_verse_end_is(text);
    return ended;
  }
  let mapped = await list_map_unordered_async(marked, lambda);
  let all = list_all(mapped, identity);
  return all;
}
