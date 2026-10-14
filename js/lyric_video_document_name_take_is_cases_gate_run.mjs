import { lyric_video_document_name_take_is_cases } from "./lyric_video_document_name_take_is_cases.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_document_name_take_is } from "./lyric_video_document_name_take_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function lyric_video_document_name_take_is_cases_gate_run() {
  "QA gate: the test that says whether a lyric video document is a superseded take answers the corpus exactly as the corpus says.";
  "★ IT IS A GATE RATHER THAN A CORPUS ALONE BECAUSE THE TEST GUARDS A WRITE. What it answers decides whether a repair is allowed to take a picture out of a document, so a rule loosened by one character - the end anchor dropped, the digits made optional - would hand the repair the version in use and shorten a video that was never broken. That is a change nothing else here would notice, because the repaired document still parses, still renders, and still names only files that exist.";
  "Throws so the dispatcher exits nonzero.";
  let cases = lyric_video_document_name_take_is_cases();
  function answer(c) {
    let asked = property_get(c, "asked");
    let take = lyric_video_document_name_take_is(asked);
    return take;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "take",
    "name",
    "lyric video take name",
  );
  return r;
}
