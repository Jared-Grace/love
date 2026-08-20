import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function baseline_names_gate_walked_verdict(walked, told) {
  "$plain walked";
  "A ratchet's verdict handed on with how much its sweep reached attached to it.";
  "THE TWO RATCHETS GIVEN A COUNT END THE SAME WAY, and they will keep doing so: the ending is what every gate still saying nothing about how much it reached will grow as it is given its count. Written once, a later change to what a walked verdict carries reaches both, rather than reaching whichever of them somebody happened to open.";
  "IT TAKES WHAT THE RATCHET SAID RATHER THAN ASKING FOR IT, because the two are handed different things - one carries a sentence, the other a way of making one - and the only part they share is what to do with the answer afterwards.";
  arguments_assert(arguments, 2);
  let added = property_get(told, "added");
  let stale = property_get(told, "stale");
  let r = {
    walked,
    added,
    stale,
  };
  return r;
}
