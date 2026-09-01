import { property_null_is } from "./property_null_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_words_content } from "./text_words_content.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
export function bible_usfm_versions_book_verses_apart_words(
  carried,
  references,
  words_by_version,
) {
  "Turns the read versions of one book into words per verse per version, and fills in the list of every verse reference any of them carries. A verse with no words in it is passed over rather than recorded empty, because a version that simply does not carry that verse and a version that carries it as nothing would otherwise be indistinguishable to whatever compares them. The reference list is built as the versions are walked and each reference added once only, so the order is the order the first version to carry a verse put it in.";
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
        let first = property_null_is(references_seen, reference);
        if (first) {
          references_seen[reference] = reference;
          list_add(references, reference);
        }
      }
    }
    words_by_version[version] = words_by_reference;
  }
}
