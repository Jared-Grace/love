import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { less_than } from "./less_than.mjs";
import { audio_window_levels } from "./audio_window_levels.mjs";
import { video_speech_span_or_null } from "./video_speech_span_or_null.mjs";
import { divide } from "./divide.mjs";
import { path_join } from "./path_join.mjs";
import { folder_private_path } from "./folder_private_path.mjs";
export async function app_bible_record_chapter_video_write_output(
  passages,
  project,
  chapter_code,
  by_passage,
) {
  "Plans the joined chapter video without making it: for each passage's take, in verse order, finds where the speaking starts and ends, and hands back the inputs and the filter parts that cut each take to its speaking and join them, the list of what was kept from each, and where the video will be written.";
  arguments_assert(arguments, 4);
  if (equal(passages.length, 0)) {
    throw new Error(
      "no takes for " +
        project +
        " " +
        chapter_code +
        text_combine_multiple([
          " - run ",
          fn_name("app_bible_record_takes_download"),
          " first",
        ]),
    );
  }
  let inputs = [];
  let parts = [];
  let kept = [];
  for (let i = 0; less_than(i, passages.length); i++) {
    let take = by_passage[passages[i]];
    let levels = await audio_window_levels(take, "50");
    let span = video_speech_span_or_null(levels);
    inputs.push("-i", take);
    let cut_video = "";
    let cut_audio = "";
    if (equal(span, null)) {
      kept.push(passages[i] + ": whole (no voice found)");
    } else {
      let start = divide(span.start_ms, 1000);
      let end = divide(span.end_ms, 1000);
      kept.push(
        passages[i] + ": " + start.toFixed(2) + "-" + end.toFixed(2) + " s",
      );
      cut_video = "trim=start=" + start + ":end=" + end + ",";
      cut_audio = "atrim=start=" + start + ":end=" + end + ",";
    }
    parts.push("[" + i + ":v]" + cut_video + "setpts=PTS-STARTPTS[v" + i + "]");
    parts.push(
      "[" + i + ":a]" + cut_audio + "asetpts=PTS-STARTPTS[a" + i + "]",
    );
  }
  let joined = "";
  for (let i = 0; less_than(i, passages.length); i++) {
    joined += "[v" + i + "][a" + i + "]";
  }
  parts.push(joined + "concat=n=" + passages.length + ":v=1:a=1[v][a]");
  let path = path_join(["bible_record_videos", project, chapter_code + ".mp4"]);
  let output = folder_private_path(path);
  let r = {
    inputs,
    parts,
    kept,
    output,
  };
  return r;
}
