import { property_get } from "./property_get.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { reply_bible_references_merged } from "./reply_bible_references_merged.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { app_chapter_group_laid_out_load } from "./app_chapter_group_laid_out_load.mjs";
import { null_is } from "./null_is.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { list_last_or_null } from "./list_last_or_null.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_last } from "./list_last.mjs";
import { list_add } from "./list_add.mjs";
export async function reply_bible_references_runs(references) {
  arguments_assert(arguments, 1);
  ("The noted verses as runs: verses next to each other in the same chapter, all quoted or all not, become one run. Nothing when a chapter could not be downloaded.");
  ("★ NEIGHBOURS ARE READ OFF THE CHAPTER'S OWN VERSE LIST, NEVER BY ADDING ONE. This Bible has no Matthew 17:21, so 17:20 and 17:22 are next to each other and 1 added to 20 would say otherwise.");
  ("A verse the chapter does not have throws. That is a typing mistake in a rule, and the reply must not go out without it.");
  let merged = reply_bible_references_merged(references);
  let english = ebible_folder_english();
  let runs = [];
  for (let reference of merged) {
    let quote = property_get(reference, "quote");
    let verse_number = property_get(reference, "verse_number");
    let chapter_code = property_get(reference, "chapter_code");
    let verses = await app_chapter_group_laid_out_load(english, chapter_code);
    if (null_is(verses)) {
      return null;
    }
    let verse = list_find_property(verses, "verse_number", verse_number);
    let run = list_last_or_null(runs);
    let joins = false;
    if (
      not_equal(run, null) &&
      equal(run.chapter_code, chapter_code) &&
      equal(run.quote, quote)
    ) {
      let item = list_last(run.verses);
      let index_last = list_index_of(verses, item);
      let right = list_index_of(verses, verse);
      joins = equal(index_last + 1, right);
    }
    if (joins) {
      list_add(run.verses, verse);
    } else {
      list_add(runs, {
        chapter_code,
        quote,
        verses: [verse],
      });
    }
  }
  return runs;
}
