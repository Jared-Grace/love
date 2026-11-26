import { app_bible_record_chapter_video_write_add } from "./app_bible_record_chapter_video_write_add.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_private_storage_path } from "./folder_private_storage_path.mjs";
import { path_join } from "./path_join.mjs";
import { audio_window_levels } from "./audio_window_levels.mjs";
import { video_speech_span_or_null } from "./video_speech_span_or_null.mjs";
import { folder_private_path } from "./folder_private_path.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function app_bible_record_chapter_video_write(
  project,
  chapter_code,
) {
  "$plain project";
  "$plain chapter_code";
  ("Joins one recorded chapter into one video on this machine, the way the phone's Download does it (human 2026-11-25: videos for the reading channel, concat and trim the same way the app does): each passage's newest take in verse order, each cut down to its speaking by ",
    fn_name("video_speech_span_or_null"),
    ", the same rule the phone runs. Reads the takes ",
    fn_name("app_bible_record_takes_download"),
    " brought down, and answers {path, kept} - the video written and what was kept of each take, said the way the phone says it.");
  ("THE NEWEST TAKE IS THE ONE STILL KEPT ON THE PHONE, backed up as a draft, before the one sent - the same order ",
    fn_name("app_bible_record_take_or_null"),
    " picks in, because a take is only kept on the phone when it was made after anything sent.");
  ("The video goes in the private folder outside every repo, beside the takes and not among them, since a video of somebody reading has no business in a public repo and a joined chapter is not a take anything should mistake for one.");
  arguments_assert(arguments, 2);
  let path2 = path_join(["bible_record", project, chapter_code]);
  let folder = folder_private_storage_path(path2);
  let draft = path_join([folder, "draft"]);
  let by_passage = {};
  await app_bible_record_chapter_video_write_add(folder, by_passage);
  await app_bible_record_chapter_video_write_add(draft, by_passage);
  function first_verse(passage) {
    let r = Number.parseInt(passage.split(",")[0], 10);
    return r;
  }
  function lambda(a, b) {
    let left = first_verse(a);
    let right = first_verse(b);
    let difference = subtract(left, right);
    return difference;
  }
  let passages = object_property_names(by_passage).sort(lambda);
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
  let path3 = path_join([
    "bible_record_videos",
    project,
    chapter_code + ".mp4",
  ]);
  let output = folder_private_path(path3);
  let joined2 = folder_private_path("bible_record_videos");
  let dir = path_join([joined2, project]);
  await folder_exists_ensure(dir);
  let v = parts.join(";");
  let command_words = [
    "-hide_banner",
    "-nostats",
    "-loglevel",
    "error",
    "-y",
    ...inputs,
    "-filter_complex",
    v,
    "-map",
    "[v]",
    "-map",
    "[a]",
    "-c:v",
    "libx264",
    "-crf",
    "20",
    "-preset",
    "medium",
    "-pix_fmt",
    "yuv420p",
    "-c:a",
    "aac",
    "-b:a",
    "160k",
    "-movflags",
    "+faststart",
    output,
  ];
  await ffmpeg_words_run(command_words);
  let r = {
    path: output,
    kept,
  };
  return r;
}
