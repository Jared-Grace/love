import { app_ceb_bible_gloss_words_edged_labelled } from "./app_ceb_bible_gloss_words_edged_labelled.mjs";
import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { gloss_chapters_words_edged } from "./gloss_chapters_words_edged.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_words_edged() {
  "Every word in the Cebuano gloss store that carries a mark from the sentence around it, named once each, set beside what the dictionary says about the same word spelled bare.";
  "This prices a blind spot rather than repairing one. Every check over these explanations asks the dictionary under the spelling the author typed, so a word wearing a quotation mark or a comma is asked for under a spelling no dictionary holds, comes back unknown, and is passed over in silence by every root and affix check there is. Nothing goes red; the word is simply never looked at.";
  "The three answers are kept apart because they cost different things to fix. A word the dictionary breaks down under its bare spelling is checking that is being thrown away and could be had by changing where the mark is taken off. A word the dictionary refuses to break down would have been passed over anyway, so it is no loss. A word the dictionary has never been asked about at all is a gather that still has to be run before anything can be checked.";
  let offenders = await gloss_chapters_words_edged(
    app_ceb_bible_gloss_generate,
  );
  let carried = ["bare"];
  let labelled = await app_ceb_bible_gloss_words_edged_labelled(
    offenders,
    carried,
  );
  function broken_down_is(row) {
    let taken_apart = property_equals(row, "kind", "broken_down");
    return taken_apart;
  }
  function refused_is(row) {
    let said_no = property_equals(row, "kind", "refused");
    return said_no;
  }
  function unknown_is(row) {
    let never_asked = property_equals(row, "kind", "unknown");
    return never_asked;
  }
  let broken_down = list_filter(labelled, broken_down_is);
  let refused = list_filter(labelled, refused_is);
  let unknown = list_filter(labelled, unknown_is);
  let words_total = list_size(labelled);
  let sightings_total = list_map_sum(labelled, gloss_row_sightings);
  let broken_down_words = list_size(broken_down);
  let refused_words = list_size(refused);
  let unknown_words = list_size(unknown);
  let broken_down_sightings = list_map_sum(broken_down, gloss_row_sightings);
  let r = {
    words_total,
    sightings_total,
    broken_down_words,
    broken_down_sightings,
    refused_words,
    unknown_words,
    broken_down,
    refused,
    unknown,
  };
  return r;
}
