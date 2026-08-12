import { ebible_verse_browser_try } from "./ebible_verse_browser_try.mjs";
import { null_is } from "./null_is.mjs";
import { bible_folders_sentence_end_marked } from "./bible_folders_sentence_end_marked.mjs";
import { bible_verse_end_is } from "./bible_verse_end_is.mjs";
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
  ("A bible that does not have this verse at all is treated the same way as one that writes no marks: it takes no part, and the run stops here rather than reaching past a hole looking for an end it can never find. That is also the safe direction. Waiting on a missing verse would spend the whole reach every time, and a hole is exactly where a page should show what it has rather than ask for more.");
  async function lambda(bible_folder) {
    let d = await ebible_verse_browser_try(
      bible_folder,
      chapter_code,
      verse_number,
    );
    if (null_is(d)) {
      return true;
    }
    let text = property_get(d, "text");
    let ended = bible_verse_end_is(text);
    return ended;
  }
  let mapped = await list_map_unordered_async(marked, lambda);
  let all = list_all(mapped, identity);
  return all;
}
