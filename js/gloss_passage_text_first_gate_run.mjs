import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_passage_text_first_cases } from "./gloss_passage_text_first_cases.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passage_text_first } from "./gloss_passage_text_first.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function gloss_passage_text_first_gate_run() {
  "Gate: a passage's verses are made into one line by joining them with a space, and every passage written down is checked against the line it should come out as. Throws so the dispatcher seam exits nonzero.";
  "It runs the function the screens actually call rather than joining the verses again here. A check that does the work a second way can only ever agree with itself, and this fault was a join written the wrong way once - so the reading has to come from the one place the reader's own sentence comes from, or the gate would have passed all along beside the broken page.";
  "It reads a written-down corpus rather than the store, because the store cannot show the fault. Almost every passage in it covers a single verse, which reads correctly however the joining is done, and the joined ones are scattered a few to a chapter; a sweep over real chapters would spend a long time to reach the handful of passages a written case states outright.";
  arguments_assert(arguments, 0);
  let cases = gloss_passage_text_first_cases();
  let offenders = [];
  function each_case(one) {
    let texts = property_get(one, "texts");
    let text = property_get(one, "text");
    let why = property_get(one, "why");
    let passage = {
      texts: [texts],
    };
    let got = gloss_passage_text_first(passage);
    if (not_equal(got, text)) {
      list_add(offenders, {
        why,
        wanted: text,
        got,
      });
    }
  }
  each(cases, each_case);
  function each_offender(one) {
    let why = property_get(one, "why");
    let wanted = property_get(one, "wanted");
    let got = property_get(one, "got");
    console.log("passage line wrong  " + why);
    console.log("  wanted  " + wanted);
    console.log("  got     " + got);
  }
  each(offenders, each_offender);
  let size = list_size(offenders);
  console.log("passage line defects: " + size);
  if (list_empty_not_is(offenders)) {
    throw new Error(
      "gloss passage text gate: " +
        size +
        " passages come out as a different line than they should - the verses of a passage are joined with a space, and a join written any other way shows a reader two marks stuck together where two verses meet",
    );
  }
  let r = {
    cases: list_size(cases),
    offenders: 0,
  };
  return r;
}
