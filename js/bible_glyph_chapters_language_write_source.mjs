import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_credit } from "./ebible_version_credit.mjs";
import { null_not_is_assert_json } from "./null_not_is_assert_json.mjs";
import { bible_glyph_language_credit_lines } from "./bible_glyph_language_credit_lines.mjs";
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
  "THE CREDIT IS READ BEFORE ANY OF THE TEXT IS, and a translation this machine cannot produce a credit for stops the write rather than being written uncredited. Both of the languages written before this refused were carrying a sentence saying they were public-domain bibles, and both were fetched under Creative Commons Attribution Share-Alike - a licence whose one condition is the credit. A file holding somebody's text and no attribution is the failure this is here to make impossible, and it is a failure that looks exactly like success from the outside.";
  arguments_assert(arguments, 6);
  let credit = await ebible_version_credit(bible_folder);
  null_not_is_assert_json(credit, {
    hint: "this translation has no copyright page on this machine, so the credit its licence asks for cannot be written into the file - download the translation, because a file of somebody's scripture with no attribution in it may not be published at all",
    bible_folder,
    written_name,
  });
  let credit_lines = bible_glyph_language_credit_lines(credit);
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
    credit_lines,
  );
  return source;
}
