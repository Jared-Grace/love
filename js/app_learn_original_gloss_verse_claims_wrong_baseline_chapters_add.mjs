import { text_split_comma } from "./text_split_comma.mjs";
import { app_learn_original_gloss_verse_claims_wrong_names } from "./app_learn_original_gloss_verse_claims_wrong_names.mjs";
import { app_learn_original_gloss_verse_claims_wrong_baseline_path } from "./app_learn_original_gloss_verse_claims_wrong_baseline_path.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { baseline_known_add } from "./baseline_known_add.mjs";
import { not } from "./not.mjs";
export async function app_learn_original_gloss_verse_claims_wrong_baseline_chapters_add(
  chapter_codes,
) {
  "Record in the verse-claims ratchet every sentence of the named chapters that is failing right now and not recorded yet, and leave every other chapter's failures still red.";
  "The whole-store writer refuses to grow the record, because one run of it would bless every sentence in the store whether anyone had read it or not. This is the narrower door for after a chapter has been read through: the reader names the chapters they read, and only those chapters' sentences are recorded. The commit then carries the chapter names, so which chapters were read and blessed is on the record by name.";
  "Read the chapter first. A sentence that says its word stands in the verse it names, when it does not, is mended rather than recorded; the ones recorded here only point at another word in that verse, or say the word was absent.";
  "$plain chapter_codes";
  "the codes are chapter names joined by commas, like DEU28,DEU29, chosen from the Bible's own book and chapter numbering. They name chapters to read and nothing that runs.";
  let codes = text_split_comma(chapter_codes);
  let offending = await app_learn_original_gloss_verse_claims_wrong_names();
  let path = app_learn_original_gloss_verse_claims_wrong_baseline_path();
  let known = await baseline_known_read(path);
  function chapter_named_is(name) {
    for (let code of codes) {
      if (text_starts_with(name, code + " ")) {
        return true;
      }
    }
    return false;
  }
  function unrecorded_is(name) {
    let recorded = list_includes(known, name);
    let n = not(recorded);
    return n;
  }
  let named = list_filter(offending, chapter_named_is);
  let names = list_filter(named, unrecorded_is);
  let r = await baseline_known_add(names, path, offending);
  return r;
}
