import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { file_exists } from "./file_exists.mjs";
import { youtube_channel_lyric_videos } from "./youtube_channel_lyric_videos.mjs";
import { youtube_studio_upload_private } from "./youtube_studio_upload_private.mjs";
export async function youtube_studio_upload_private_lyric_video(file_path) {
  arguments_assert(arguments, 1);
  ("$plain file_path");
  ("Puts one rendered lyric video up as private on the lyric video channel, and answers the new video's id.");
  ("★ IT TAKES ONLY A LYRIC VIDEO AND NAMES THE CHANNEL ITSELF, which is what lets it be granted. The upload it wraps sends any file it is handed to any channel the signed-in profile owns; here the file must be a whole path ending in (BSB) lyric video.mp4 that exists, and the channel is the one lyric videos go to, so nothing handed in can send anything else anywhere else.");
  ("Private, so nothing is seen until its title and words are written and it is made public - those steps still ask.");
  let whole = text_starts_with(file_path, "/");
  assert_json(whole, {
    hint: "only a whole path from the root is uploaded",
    file_path,
  });
  let lyric = text_ends_with(file_path, " (BSB) lyric video.mp4");
  assert_json(lyric, {
    hint: "only a file ending in (BSB) lyric video.mp4 is uploaded",
    file_path,
  });
  let exists = await file_exists(file_path);
  assert_json(exists, {
    hint: "there is no file at this path",
    file_path,
  });
  let channel_id = youtube_channel_lyric_videos();
  let uploaded = await youtube_studio_upload_private(channel_id, file_path);
  return uploaded;
}
