import { json_from } from "./json_from.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
import { ffprobe_words_run } from "./ffprobe_words_run.mjs";
export async function firebase_storage_video_dimensions(storage_path) {
  "$plain storage_path";
  "The shape a video kept in storage will play at: its width and height after the turn its file asks for, so a phone video stored sideways with a turn of 90 answers upright, as a player shows it. Read through the signed-in handle, so a private recording can be asked about too. Asked first for the bible_record takes (human 2026-11-23: is it the right shape for a YouTube Short?).";
  arguments_assert(arguments, 1);
  let bucket = await firebase_bucket();
  let [buffer] = await bucket.file(storage_path).download();
  let local = await user_repo_path_combine(
    "gitignore/video_dimensions_probe.mp4",
  );
  await file_overwrite_buffer(local, buffer);
  let out = await ffprobe_words_run([
    "-v",
    "error",
    "-select_streams",
    "v:0",
    "-show_entries",
    "stream=width,height:stream_side_data=rotation:stream_tags=rotate",
    "-of",
    "json",
    local,
  ]);
  let r = {
    storage_path,
    ffprobe: json_from(out),
  };
  return r;
}
