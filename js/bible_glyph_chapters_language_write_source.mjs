import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_credit } from "./ebible_version_credit.mjs";
import { null_not_is_assert_json } from "./null_not_is_assert_json.mjs";
import { ebible_bible_folder_changes } from "./ebible_bible_folder_changes.mjs";
import { bible_glyph_language_credit_lines } from "./bible_glyph_language_credit_lines.mjs";
import { bible_glyph_chapters_language_written_kept } from "./bible_glyph_chapters_language_written_kept.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_verses_storage_outcome } from "./ebible_chapter_verses_storage_outcome.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
import { null_not_is } from "./null_not_is.mjs";
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
  "A CHAPTER THAT CAME BACK EMPTY IS NAMED RATHER THAN PASSED OVER IN SILENCE, because an empty answer from storage looks exactly like a chapter that has no verses.";
  "STORAGE ALREADY TELLS THOSE TWO APART AND THIS USED TO THROW THAT AWAY. The outcome says whether the chapter is absent from the bible or whether the fetch simply did not arrive, and both were being folded into one word here. A fetch that did not arrive now keeps whatever the written file already held, so a blip no longer deletes somebody's scripture off the page; only a chapter the bible genuinely does not hold is reported empty.";
  "THE COST OF NOT DOING THIS WAS MEASURED. On the eighth of September two runs of the Tagalog band an hour apart dropped eleven and nine chapters, seven of them the same seven, while the Urdu band next door came back whole both times. Exodus one had been in the file for twenty eight runs and was gone from the twenty ninth, and storage still answered with all twenty two of its verses when asked on its own.";
  "THE CREDIT IS READ BEFORE ANY OF THE TEXT IS, and a translation this machine cannot produce a credit for stops the write rather than being written uncredited. Both of the languages written before this refused were carrying a sentence saying they were public-domain bibles, and both were fetched under Creative Commons Attribution Share-Alike - a licence whose one condition is the credit. A file holding somebody's text and no attribution is the failure this is here to make impossible, and it is a failure that looks exactly like success from the outside.";
  "WHAT WAS ALTERED IS ASKED FOR ALONGSIDE THE CREDIT, because the verses gathered below have already been through the repair on the way out of storage. Attribution and a list of changes are two separate conditions of the same licence, and a file that answers one of them and not the other has met neither.";
  arguments_assert(arguments, 6);
  let credit = await ebible_version_credit(bible_folder);
  null_not_is_assert_json(credit, {
    hint: "this translation has no copyright page on this machine, so the credit its licence asks for cannot be written into the file - download the translation, because a file of somebody's scripture with no attribution in it may not be published at all",
    bible_folder,
    written_name,
  });
  let changes = ebible_bible_folder_changes(bible_folder);
  let credit_lines = bible_glyph_language_credit_lines(credit, changes);
  let kept = await bible_glyph_chapters_language_written_kept(written_name);
  for (let chapter of chapters) {
    let chapter_code = property_get(chapter, "chapter_code");
    let outcome = await ebible_chapter_verses_storage_outcome(
      bible_folder,
      chapter_code,
    );
    let verses = property_get(outcome, "verses");
    let nothing = list_empty_is(verses);
    if (nothing) {
      let absent = property_get(outcome, "absent");
      let held = property_get_or_null(kept, chapter_code);
      let left = not(absent);
      let right = null_not_is(held);
      let keepable = and(left, right);
      if (keepable) {
        list_add(gathered, held);
        continue;
      }
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
