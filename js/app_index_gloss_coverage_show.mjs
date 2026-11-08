import { list_add_multiple } from "./list_add_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_chapters_whole_count } from "./bible_chapters_whole_count.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { each } from "./each.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function app_index_gloss_coverage_show(cards) {
  "Writes how many chapters each language app has published onto the card that leads to it, once the store has said.";
  "★ THE CARDS ARE ALREADY ON THE SCREEN WHEN THIS RUNS, AND THAT WAS THE SECOND ANSWER RATHER THAN THE FIRST. Waiting for the counts before drawing anything was written and measured and taken out. What the browser half of fetching does when a store is slow is give up after eight seconds and try again twice, so a front page that waits for a count is a front page that can be blank for the better part of half a minute - and it would be blank on exactly the connection that can least afford it. Two sentences growing a line a second after the page appears is the smaller harm, and it is the only harm on the other side.";
  "★ WHAT IT WEIGHS IS WHY THE STORE IS ASKED FOR BY NAME HERE RATHER THAN IMPORTED. Counting what a bucket holds reaches the whole of fetching, and the browser half of fetching carries the loading overlay behind it - the spinner, its two sets of keyframes, the backdrop, the message. Measured on 2026-09-06: importing it plainly took the front page from thirty-nine thousand bytes to fifty-seven thousand, past a ceiling of fifty-one thousand that exists to catch exactly this. A bundler follows a plain import whether the branch runs or not; a name written out at the moment it is wanted is a separate piece, fetched by whoever is already looking at the page.";
  "A count that did not arrive leaves its card exactly as it was written, and so does a card this page never drew. Every step of the way down is allowed to answer with nothing, because the one thing that must not happen is a front page failing over a clause.";
  "A store holding every chapter says the whole Bible rather than a number with so far after it, because so far promises more is coming to a store that is finished.";
  "An app counted in more than one language gets one caption naming each, since each row is a different store a reader may or may not be able to read.";
  arguments_assert(arguments, 1);
  let whole = bible_chapters_whole_count();
  function count_text_get(row) {
    let count = property_get(row, "count");
    let language = property_get(row, "language");
    let words = [];
    let complete = equal(count, whole);
    if (complete) {
      words = ["the whole Bible"];
    } else {
      let count_text = text_from_number(count);
      words = [count_text, "chapters so far"];
    }
    let unnamed = null_is(language);
    if (not(unnamed)) {
      list_add_multiple(words, ["in", language]);
    }
    let count_text_full = list_join_space(words);
    return count_text_full;
  }
  async function coverage_shown() {
    let module = await import("./app_index_gloss_coverage.mjs");
    let fn = property_get(module, "app_index_gloss_coverage");
    let coverage = await fn();
    let app_fns_all = list_map_property(coverage, "app_fn");
    let app_fns = list_unique(app_fns_all);
    function card_counts_shown(app_fn) {
      let rows = list_filter_property(coverage, "app_fn", app_fn);
      function row_counted(row) {
        let count = property_get(row, "count");
        let counted = null_not_is(count);
        return counted;
      }
      let counted_rows = list_filter(rows, row_counted);
      let none = list_empty_is(counted_rows);
      if (none) {
        return;
      }
      let card = list_find_property_or_null(cards, "app_fn", app_fn);
      let drawn_not = null_is(card);
      if (drawn_not) {
        return;
      }
      let caption = property_get(card, "caption");
      let captioned_not = null_is(caption);
      if (captioned_not) {
        return;
      }
      let text = property_get(card, "text");
      let counts = list_map(counted_rows, count_text_get);
      let counts_text = list_join_comma_space(counts);
      let text_counted = list_join_space([text, "-", counts_text]);
      html_text_set(caption, text_counted);
    }
    each(app_fns, card_counts_shown);
  }
  await catch_null_async(coverage_shown);
}
