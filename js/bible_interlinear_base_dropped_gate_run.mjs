import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_interlinear_base_dropped_report } from "./bible_interlinear_base_dropped_report.mjs";
import { bible_interlinear_base_dropped_bounds } from "./bible_interlinear_base_dropped_bounds.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { assert_json } from "./assert_json.mjs";
export async function bible_interlinear_base_dropped_gate_run() {
  "QA gate: the words belonging to the copyright-restricted editions are still being dropped out of the published Bible text, and only those.";
  "This is the gate the whole copyright answer rests on. The interlinear tables are dedicated to the public domain by the people who made them, but they carry the readings of editions those people do not own - Nestle-Aland belongs to the German Bible Society, and the SBL text is free to use under a licence rather than public domain. The tables mark those readings, and a filter drops them before any reader sees a word. Nothing else in the repo checks the filter is alive.";
  "A filter that stops firing fails SILENTLY and in the dangerous direction. Every gate stays green, every word still reads as scripture, and the restricted readings are simply published. So the floor here is that SOMETHING was dropped, and it is checked against a count rather than against an error, because there is no error to catch.";
  "The ceiling is the other half and guards the opposite mistake. The marks run in spans, and a span read wrongly takes a whole clause instead of a word - reading the guillemets as an edition wrapper once cost 1 Corinthians 1:2 eight of its own words. A filter deleting scripture is as bad as one publishing what it should not, so both directions are named.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let report = await bible_interlinear_base_dropped_report();
  let words_total = property_get(report, "words_total");
  let words_dropped = property_get(report, "words_dropped");
  let bounds = bible_interlinear_base_dropped_bounds();
  let least = property_get(bounds, "least");
  let most = property_get(bounds, "most");
  let words_least = property_get(bounds, "words_least");
  let enough_words = greater_than(words_total, words_least);
  assert_json(enough_words, {
    hint: "the interlinear came back far smaller than the tables hold, so this gate was about to judge a filter on almost no text - check the spreadsheet is where it is expected before believing anything below",
    words_total,
    words_least,
  });
  let above_floor = greater_than(words_dropped, least);
  assert_json(above_floor, {
    hint: "no word was dropped, so the filter that removes the copyright-restricted readings is no longer removing them - the published text now carries Nestle-Aland and SBL readings, and nothing else in the repo would say so",
    words_dropped,
    least,
  });
  let below_ceiling = greater_than(most, words_dropped);
  assert_json(below_ceiling, {
    hint: text_combine_multiple([
      "far more words were dropped than the edition marks account for, so the filter is reading a span wrongly and deleting scripture - read ",
      fn_name("bible_interlinear_base_dropped_report"),
      " and look for one verse losing a whole clause",
    ]),
    words_dropped,
    most,
  });
  let r = {
    words_total,
    words_dropped,
    least,
    most,
  };
  return r;
}
