import { not } from "./not.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { error } from "./error.mjs";
import { folder_home } from "./folder_home.mjs";
import { path_join } from "./path_join.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function downloads_video_frames_sheet_write(video_name) {
  "One picture holding a frame every eight seconds of a video in the Downloads folder, twelve across and three down, so a whole video can be looked over at a glance. Answers where the picture was written; open it with the Read tool.";
  "THE VIDEO IS NAMED, NEVER PATHED: a name holding a slash, starting with a dot, or not ending in .mp4 is refused, so the only thing this can read is an mp4 sitting directly in Downloads, and never a device, a pipe or an address on the network.";
  "THE PICTURE GOES TO ONE FIXED FOLDER, under the ignored folder, named after the video. Nothing the caller hands in can choose where it lands, which is what lets this run without asking.";
  let refused =
    text_includes(video_name, "/") ||
    text_includes(video_name, "\\") ||
    text_starts_with(video_name, ".") ||
    not(text_ends_with(video_name, ".mp4"));
  if (refused) {
    error({
      hint: "name an mp4 that sits directly in the Downloads folder, without any folder in front of it",
      video_name,
    });
  }
  let home = folder_home();
  let video_path = path_join([home, "Downloads", video_name]);
  let folder = "gitignore/video_frames_sheets";
  await folder_exists_ensure(folder);
  let sheet_path = path_join([folder, video_name + ".jpg"]);
  let command_words = [
    "-hide_banner",
    "-loglevel",
    "error",
    "-y",
    "-i",
    video_path,
    "-vf",
    "fps=1/8,scale=120:-1,tile=12x3",
    "-frames:v",
    "1",
    "-update",
    "1",
    sheet_path,
  ];
  await ffmpeg_words_run(command_words);
  return sheet_path;
}
