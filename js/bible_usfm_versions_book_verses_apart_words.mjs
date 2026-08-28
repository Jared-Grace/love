import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_words_content } from "./text_words_content.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
export function bible_usfm_versions_book_verses_apart_words(
  carried,
  references,
  words_by_version,
) {
  arguments_assert(arguments, 3);
  let references_seen = {};
  for (let read of carried) {
    let version = property_get(read, "version");
    let chapters = property_get(read, "chapters");
    let words_by_reference = {};
    for (let chapter of chapters) {
      let chapter_number = property_get(chapter, "chapter_number");
      let verses = property_get(chapter, "verses");
      for (let verse of verses) {
        let verse_number = property_get(verse, "verse_number");
        let text = property_get(verse, "text");
        let reference = chapter_number + ":" + verse_number;
        let content = text_words_content(text);
        let wordless = list_empty_is(content);
        if (wordless) {
          continue;
        }
        words_by_reference[reference] = content;
        let before = property_get_or_null(references_seen, reference);
        let first = null_is(before);
        if (first) {
          references_seen[reference] = reference;
          list_add(references, reference);
        }
      }
    }
    words_by_version[version] = words_by_reference;
  }
}
