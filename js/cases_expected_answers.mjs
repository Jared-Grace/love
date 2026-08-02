import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { json_to } from "./json_to.mjs";
export function cases_expected_answers(cases, expected_key) {
  arguments_assert(arguments, 2);
  ("The different answers a corpus writes down, each one written out as text so two lists holding the same things count as one answer rather than two.");
  ("Asked so a corpus can be refused for writing the same answer beside every case. A corpus like that cannot tell the reader it is asking from a reader that hands back that one answer whatever it is given - the gate above it passes, and goes on passing after the reader stops working.");
  let written = [];
  for (let c of cases) {
    let expected = property_get(c, expected_key);
    let text = json_to(expected);
    list_add(written, text);
  }
  let answers = list_unique(written);
  return answers;
}
