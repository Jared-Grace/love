import { bible_interlinear_chapters_generic } from "./bible_interlinear_chapters_generic.mjs";
import { bible_interlinear_original_key } from "./bible_interlinear_original_key.mjs";
import { bible_interlinear_verses_upload_folder } from "./bible_interlinear_verses_upload_folder.mjs";
import { list_filter_map_property } from "./list_filter_map_property.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { property_exists } from "./property_exists.mjs";
"Every chapter's verses, each carrying its original-language text as one joined string.";
"The per-word columns - transliteration, parsing, Strong's number, gloss - are dropped here.";
"Reach for bible_interlinear_chapters_words when you want them; this one is for callers that";
"just need the text to show or to hand to a reader.";
export async function bible_interlinear_chapters() {
  bible_interlinear_verses_upload_folder();
  let original_key = bible_interlinear_original_key();
  function verse_parts(verse_words) {
    function word_has_original(item) {
      let exists = property_exists(item, original_key);
      return exists;
    }
    let mapped = list_filter_map_property(
      verse_words,
      word_has_original,
      original_key,
    );
    let text = list_join_space(mapped);
    let r = {
      text,
    };
    return r;
  }
  let chapters = await bible_interlinear_chapters_generic(verse_parts);
  return chapters;
}
