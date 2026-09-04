import { lyric_video_document_times_spread_is_cases } from "./lyric_video_document_times_spread_is_cases.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_document_times_spread_is } from "./lyric_video_document_times_spread_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function lyric_video_document_times_spread_is_cases_gate_run() {
  "QA gate: each timing document written down in the corpus is called a draft or not a draft the way the corpus says.";
  "★ WHAT IT GUARDS IS UNRECOVERABLE AND SILENT. The answer decides whether a command may write measured times over the times already in a document. Said wrongly of a document somebody has tapped, an afternoon of listening is replaced by an even spread, the file still looks entirely well-formed, every other gate stays green, and the loss appears only as a video whose words drift for whoever next watches it.";
  "Throws so the dispatcher seam exits nonzero";
  let cases = lyric_video_document_times_spread_is_cases();
  function answer(c) {
    let document = property_get(c, "document");
    let spread = lyric_video_document_times_spread_is(document);
    return spread;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "spread",
    "name",
    "lyric video document times spread is",
  );
  return r;
}
