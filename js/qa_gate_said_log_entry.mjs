import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { text_slice } from "./text_slice.mjs";
import { sha256_hash } from "./sha256_hash.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
export function qa_gate_said_log_entry(commit, kept) {
  "$plain commit";
  "$plain kept";
  "The short form of one filed judgement: for each red gate, one word standing for all it said, plus how its saying began and how it ended";
  "THE WORD ANSWERS WHETHER A GATE THAT STAYED RED SAID SOMETHING NEW. Red then red looks like no change in the record, while the complaint under it may have been replaced entirely, and any plan to skip a gate has to know that";
  "THE TWO ENDS ANSWER WHY A GATE TURNED RED FOR ONE RUN. Replayed 2026-11-04, gates flipped from passing to failing and straight back with nothing they read having changed, and nothing kept could tell a real fault from a machine that ran out of something. A gate lists its findings first and throws last, so a crash shows at the end and a finding shows at the start";
  arguments_assert(arguments, 2);
  let ends = 300;
  let said = property_get(kept, "said");
  let gates = {};
  for (let gate of object_property_names(said)) {
    let text = property_get(said, gate);
    let s = sha256_hash(text);
    gates[gate] = {
      hash: text_slice(s, 0, 12),
      size: text.length,
      start: text_slice(text, 0, ends),
      end: text_slice_from(text, -ends),
    };
  }
  let entry = {
    commit,
    failed: property_get(kept, "failed"),
    gates,
  };
  return entry;
}
