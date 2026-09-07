import { gloss_classes_word_claims_apart_cases } from "./gloss_classes_word_claims_apart_cases.mjs";
import { gloss_classes_word_claims_apart } from "./gloss_classes_word_claims_apart.mjs";
import { not_equal } from "./not_equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
export function gloss_classes_word_claims_apart_gate_run() {
  "Gate: the words a reader is shown as explained more than one way, and their order, are the ones the written-down classes say they should be. Throws so the dispatcher seam exits nonzero.";
  "This reading finds faults no dictionary can settle, which is also to say nothing else in the repo would notice it going wrong. A fold reaching one letter further would quietly merge two different claims into agreement and empty rows out of the queue; a fold reaching one letter less would split one word into two and fill the queue with words nobody explained twice. Neither would fail anywhere except in what a person is asked to read.";
  "The order is checked and not only the membership, because the reading exists to be read from the top and a ranking that drifted would still hold every right row.";
  let written = gloss_classes_word_claims_apart_cases();
  let classes = written.classes;
  let wanted = written.wanted;
  let read = gloss_classes_word_claims_apart(classes);
  let defects = [];
  let size = wanted.length;
  let found = read.length;
  let miscounted = not_equal(found, size);
  if (miscounted) {
    defects.push({
      wanted: size,
      found,
    });
    console.log("word claims apart  wanted " + size + " words, read " + found);
  }
  let i = 0;
  while (less_than(i, size)) {
    let one = wanted[i];
    let got = read[i];
    let absent = less_than(found, i + 1);
    let word = absent ? "" : got.word;
    let claims = absent ? 0 : got.claims;
    let sightings_at_most = absent ? 0 : got.sightings_at_most;
    let wrong =
      not_equal(word, one.word) ||
      not_equal(claims, one.claims) ||
      not_equal(sightings_at_most, one.sightings_at_most);
    if (wrong) {
      defects.push({
        at: i,
        wanted: one,
        word,
        claims,
        sightings_at_most,
      });
      console.log(
        "word claims apart  at " +
          i +
          "  wanted " +
          one.word +
          " " +
          one.claims +
          " claims / " +
          one.sightings_at_most +
          "  read " +
          word +
          " " +
          claims +
          " claims / " +
          sightings_at_most,
      );
    }
    i = i + 1;
  }
  let count = defects.length;
  console.log("word claims apart defects: " + count);
  let any = greater_than(count, 0);
  if (any) {
    throw new Error(
      "gloss classes word claims apart gate: " +
        count +
        " rows read wrong - words explained two ways are being merged, split or reordered",
    );
  }
  let r = {
    checked: size,
    defects: 0,
  };
  return r;
}
