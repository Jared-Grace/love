import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_verses_storage_outcome } from "./ebible_chapter_verses_storage_outcome.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { json_to } from "./json_to.mjs";
import { bible_glyph_chapters_language_source } from "./bible_glyph_chapters_language_source.mjs";
export async function bible_glyph_chapters_language_write_source(
  chapters,
  bible_folder,
  empty,
  gathered,
  written_name,
  language_word,
) {
  "Every chapter of one translation read out of storage and turned into the text of a written file holding them all, with the chapters that came back with nothing gathered separately.";
  "A CHAPTER THAT CAME BACK EMPTY IS NAMED RATHER THAN PASSED OVER IN SILENCE, because an empty answer from storage looks exactly like a chapter that has no verses, and only a person can tell those two apart.";
  arguments_assert(arguments, 6);
  for (let chapter of chapters) {
    let chapter_code = property_get(chapter, "chapter_code");
    let outcome = await ebible_chapter_verses_storage_outcome(
      bible_folder,
      chapter_code,
    );
    let verses = property_get(outcome, "verses");
    let nothing = list_empty_is(verses);
    if (nothing) {
      list_add(empty, chapter_code);
      continue;
    }
    let numbered = [];
    for (let verse of verses) {
      let text2 = property_get(verse, "verse_number");
      let verse_number = number_from_text(text2);
      let text = property_get(verse, "text");
      list_add(numbered, {
        verse_number,
        text,
      });
    }
    list_add(gathered, {
      chapter_code,
      verses: numbered,
    });
  }
  let json = json_to(gathered);
  let source = bible_glyph_chapters_language_source(
    written_name,
    language_word,
    json,
  );
  return source;
}
