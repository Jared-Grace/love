import { equal } from "./equal.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { not } from "./not.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { error } from "./error.mjs";
import { folder_home } from "./folder_home.mjs";
import { path_join } from "./path_join.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function downloads_video_frames_at_write(
  video_name,
  seconds_joined,
) {
  "One picture holding the frames of a video in the Downloads folder at the moments named, side by side at a quarter of full size, so framing can be judged on the frame itself rather than on a thumbnail sheet. Answers where the picture was written; open it with the Read tool.";
  "The moments arrive as one comma-joined word, because a command line hands each word over separately. Each must read as a plain number of seconds, and anything else is refused, so the only thing a caller chooses is where in the video to look.";
  "THE VIDEO IS NAMED, NEVER PATHED, and the picture goes to one fixed folder - the same two refusals as the frames sheet, for the same reason: nothing handed in can choose what is read or where anything lands.";
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
  let seconds = String(seconds_joined).split(",");
  let number_shape = /^\d+(\.\d+)?$/;
  for (let second of seconds) {
    let b = number_shape.test(second);
    if (not(b)) {
      error({
        hint: "name each moment as a plain number of seconds, joined by commas",
        second,
      });
    }
  }
  let home = folder_home();
  let video_path = path_join([home, "Downloads", video_name]);
  let folder = "gitignore/video_frames_at";
  await folder_exists_ensure(folder);
  let picture_path = path_join([folder, video_name + ".png"]);
  let command_words = ["-hide_banner", "-loglevel", "error", "-y"];
  let scaled = [];
  let labels = "";
  function lambda(second, index) {
    command_words.push("-ss", second, "-i", video_path);
    scaled.push(
      "[" + index + ":v]scale=270:480,trim=end_frame=1[f" + index + "]",
    );
    labels += "[f" + index + "]";
  }
  seconds.forEach(lambda);
  let stacked = labels + "hstack=inputs=" + seconds.length;
  let filter = equal(seconds.length, 1)
    ? "[0:v]scale=270:480"
    : scaled.join(";") + ";" + stacked;
  command_words.push(
    "-filter_complex",
    filter,
    "-frames:v",
    "1",
    "-update",
    "1",
    picture_path,
  );
  await ffmpeg_words_run(command_words);
  return picture_path;
}
