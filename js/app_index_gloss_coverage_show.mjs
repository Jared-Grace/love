import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { each } from "./each.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function app_index_gloss_coverage_show(cards) {
  "Writes how many chapters each language app has published onto the card that leads to it, once the store has said.";
  "★ THE CARDS ARE ALREADY ON THE SCREEN WHEN THIS RUNS, AND THAT WAS THE SECOND ANSWER RATHER THAN THE FIRST. Waiting for the counts before drawing anything was written and measured and taken out. What the browser half of fetching does when a store is slow is give up after eight seconds and try again twice, so a front page that waits for a count is a front page that can be blank for the better part of half a minute - and it would be blank on exactly the connection that can least afford it. Two sentences growing a line a second after the page appears is the smaller harm, and it is the only harm on the other side.";
  "★ WHAT IT WEIGHS IS WHY THE STORE IS ASKED FOR BY NAME HERE RATHER THAN IMPORTED. Counting what a bucket holds reaches the whole of fetching, and the browser half of fetching carries the loading overlay behind it - the spinner, its two sets of keyframes, the backdrop, the message. Measured on 2026-09-06: importing it plainly took the front page from thirty-nine thousand bytes to fifty-seven thousand, past a ceiling of fifty-one thousand that exists to catch exactly this. A bundler follows a plain import whether the branch runs or not; a name written out at the moment it is wanted is a separate piece, fetched by whoever is already looking at the page.";
  "A count that did not arrive leaves its card exactly as it was written, and so does a card this page never drew. Every step of the way down is allowed to answer with nothing, because the one thing that must not happen is a front page failing over a clause.";
  arguments_assert(arguments, 1);
  function card_count_shown(row) {
    let app_fn = property_get(row, "app_fn");
    let count = property_get(row, "count");
    let counted_not = null_is(count);
    if (counted_not) {
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
    let count_text = text_from_number(count);
    let text_counted = list_join_space([
      text,
      "-",
      count_text,
      "chapters so far",
    ]);
    html_text_set(caption, text_counted);
  }
  async function coverage_shown() {
    let module = await import("./app_index_gloss_coverage.mjs");
    let fn = property_get(module, "app_index_gloss_coverage");
    let coverage = await fn();
    each(coverage, card_count_shown);
  }
  await catch_null_async(coverage_shown);
}
