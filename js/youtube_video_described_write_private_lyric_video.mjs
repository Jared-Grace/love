import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { assert_json } from "./assert_json.mjs";
import { youtube_video_record } from "./youtube_video_record.mjs";
import { property_get } from "./property_get.mjs";
import { youtube_channel_lyric_videos } from "./youtube_channel_lyric_videos.mjs";
import { youtube_video_described_write } from "./youtube_video_described_write.mjs";
export async function youtube_video_described_write_private_lyric_video(
  video_id,
  file_path,
) {
  arguments_assert(arguments, 2);
  ("$plain video_id");
  ("$plain file_path");
  ("Gives a lyric video that is still private the title and the description written beside its film in a file.");
  ("★ IT WRITES ONLY ON A PRIVATE VIDEO OF THE LYRIC VIDEO CHANNEL, which is what lets it be granted. The writer it wraps renames and redescribes any video the signed-in account owns, public ones included; here the video's own record is read first, and one that is not private, or is on another channel, is refused before anything is written. So nobody watching sees a word change without a person having said so.");
  ("THE FILM'S NAME MUST END IN (BSB) lyric video.mp4, so the words read are the ones written beside a lyric video and not some other file's.");
  let lyric = text_ends_with(file_path, " (BSB) lyric video.mp4");
  assert_json(lyric, {
    hint: "only the words beside a file ending in (BSB) lyric video.mp4 are written",
    file_path,
  });
  let record = await youtube_video_record(video_id);
  let status = property_get(record, "status");
  let privacy = property_get(status, "privacyStatus");
  let b = equal(privacy, "private");
  assert_json(b, {
    hint: "only a private video is written to; a video anyone can see asks a person first",
    video_id,
    privacy,
  });
  let snippet = property_get(record, "snippet");
  let channel_id = property_get(snippet, "channelId");
  let right = youtube_channel_lyric_videos();
  let b2 = equal(channel_id, right);
  assert_json(b2, {
    hint: "only a video on the lyric video channel is written to",
    video_id,
    channel_id,
  });
  let described = await youtube_video_described_write(video_id, file_path);
  return described;
}
