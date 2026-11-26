import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { app_bible_record_chapter_video_write_output } from "./app_bible_record_chapter_video_write_output.mjs";
import { property_get } from "./property_get.mjs";
import { folder_private_path } from "./folder_private_path.mjs";
import { path_join } from "./path_join.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
export async function app_bible_record_chapter_video_write_command_words(
  first_verse,
  by_passage,
  project,
  chapter_code,
) {
  arguments_assert(arguments, 4);
  function lambda(a, b) {
    let left = first_verse(a);
    let right = first_verse(b);
    let difference = subtract(left, right);
    return difference;
  }
  let passages = object_property_names(by_passage).sort(lambda);
  let r2 = await app_bible_record_chapter_video_write_output(
    passages,
    project,
    chapter_code,
    by_passage,
  );
  let output = property_get(r2, "output");
  let kept = property_get(r2, "kept");
  let parts = property_get(r2, "parts");
  let inputs = property_get(r2, "inputs");
  let joined = folder_private_path("bible_record_videos");
  let dir = path_join([joined, project]);
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
  let r = {
    output,
    kept,
    command_words,
  };
  return r;
}
