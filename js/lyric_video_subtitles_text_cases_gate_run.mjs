import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_subtitles_text_cases } from "./lyric_video_subtitles_text_cases.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_subtitles_text } from "./lyric_video_subtitles_text.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter_text_includes } from "./list_filter_text_includes.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function lyric_video_subtitles_text_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("Writes a subtitle file for every authored document in the corpus and refuses the run when the sung lines come back other than the way the corpus says they should.");
  ("READS ONLY THE SUNG LINES BACK OUT OF THE FILE. Everything else a subtitle file holds is lettering sizes, colours and margins, and those are meant to be arguable - somebody looks at the video, disagrees, and changes one. Pinning them here would make each of those changes a red gate with nothing wrong behind it, and a gate that goes red for reasons nobody believes is one that gets edited into agreement rather than read. Where a line stands is not arguable, because it was heard.");
  ("The reason it is worth a gate at all is that the step it guards is the last one before a finished video, and it fails without complaining. A line the person never tapped has no time; if no time comes out as zero instead of as nothing, that line is written as a card standing over the whole song from the first frame, and nothing anywhere says so - it is found by watching the video.");
  let cases = lyric_video_subtitles_text_cases();
  function answer(one) {
    let document = property_get(one, "document");
    let written = lyric_video_subtitles_text(document);
    let lines = text_split_newline(written);
    let events = list_filter_text_includes(lines, ",Lyric,,");
    return events;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "events",
    "why",
    "lyric video subtitles text",
  );
  return r;
}
