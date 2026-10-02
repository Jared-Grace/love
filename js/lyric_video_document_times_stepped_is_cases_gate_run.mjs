import { lyric_video_document_times_stepped_is_cases } from "./lyric_video_document_times_stepped_is_cases.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_document_times_stepped_is } from "./lyric_video_document_times_stepped_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function lyric_video_document_times_stepped_is_cases_gate_run() {
  "QA gate: each timing document written down in the corpus is called evenly stepped or not the way the corpus says.";
  "★ WHAT IT GUARDS IS UNRECOVERABLE AND SILENT IN BOTH DIRECTIONS. Said wrongly of a document somebody has tapped, an afternoon of listening is replaced by an even spread, the file still looks entirely well-formed, every other gate stays green, and the loss appears only as a video whose words drift for whoever next watches it. Said wrongly of a draft, the draft is defended as a person's work and the only command that could time it refuses, which is how two psalms sat on a metronome for as long as nothing asked this question.";
  "Throws so the dispatcher seam exits nonzero";
  let cases = lyric_video_document_times_stepped_is_cases();
  function answer(c) {
    let document = property_get(c, "document");
    let stepped = lyric_video_document_times_stepped_is(document);
    return stepped;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "stepped",
    "name",
    "lyric video document times stepped is",
  );
  return r;
}
