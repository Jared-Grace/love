import { lyric_video_document_times_hand_is_cases } from "./lyric_video_document_times_hand_is_cases.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_document_times_hand_is } from "./lyric_video_document_times_hand_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function lyric_video_document_times_hand_is_cases_gate_run() {
  "QA gate: each timing document written down in the corpus is called a person's work or not a person's work the way the corpus says.";
  "★ WHAT IT GUARDS IS UNRECOVERABLE AND SILENT IN ONE DIRECTION AND MERELY WASTEFUL IN THE OTHER, AND THE CORPUS HOLDS BOTH. Said wrongly of a document somebody tapped, an evening of listening is written over by a machine, the file stays entirely well-formed, every other gate stays green, and the loss shows up only as words that drift for whoever next watches. Said wrongly of a machine's own document, the repo simply refuses to improve on times it wrote itself, which is how the guard first went wrong and why the mark exists.";
  "Throws so the dispatcher seam exits nonzero";
  let cases = lyric_video_document_times_hand_is_cases();
  function answer(c) {
    let document = property_get(c, "document");
    let hand = lyric_video_document_times_hand_is(document);
    return hand;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "hand",
    "name",
    "lyric video document times hand is",
  );
  return r;
}
