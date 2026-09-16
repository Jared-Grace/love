import { gloss_chapters_same_as_faults } from "./gloss_chapters_same_as_faults.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_stores_offenders_generic } from "./gloss_stores_offenders_generic.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_same_as_gate_run() {
  "Gate: every pointer written into a gloss store lands on exactly one explanation. Throws so the dispatcher seam exits nonzero.";
  "A pointer is an explanation that names another word instead of repeating it. That is honest writing while the word it names is really there, and an empty entry the moment it is not: the reader is sent to a verse to find something nobody wrote.";
  "Measured against nothing at all rather than against a record, unlike the gate over the older prose pointers. Those were written in their thousands before anything could check them, so they have to be paid off a few at a time. This shape did not exist until there was something that could follow it, so the day it lets a broken one through is the day it stops being worth writing.";
  "Several explanations found is a failure as loudly as none. An address that catches two different meanings leaves the page to guess, and measured over ten chapters a spelling on its own was ambiguous in nearly half the places a pointer used it - so a guess here is wrong about as often as it is right, and says nothing about having guessed.";
  "A store that is not on the disk is passed over and said so, rather than counted as clean. These stores live on a drive that is not always mounted, and every Claude in the repo runs this gate.";
  async function store_ask(fn) {
    let found = await gloss_chapters_same_as_faults(fn);
    let offenders = property_get(found, "offenders");
    return offenders;
  }
  let asked = await gloss_stores_offenders_generic(store_ask);
  let counts = property_get(asked, "counts");
  let missing = property_get(asked, "missing");
  function faulty_is(count) {
    let offending = property_list_empty_not_is(count, "found");
    return offending;
  }
  let offenders = list_filter(counts, faulty_is);
  list_empty_is_assert_json(offenders, {
    hint: "these pointers name a word and a verse that does not hold exactly one explanation of it - no choices means nothing was written there, several means the address catches two different meanings, so name the verse the writer actually meant",
    offenders,
  });
  let r = {
    stores: list_size(counts),
    skipped: missing,
  };
  return r;
}
