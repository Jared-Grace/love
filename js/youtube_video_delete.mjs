import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_video_record } from "./youtube_video_record.mjs";
import { youtube_api_delete } from "./youtube_api_delete.mjs";
export async function youtube_video_delete(video_id) {
  "Deletes one of the channel's own videos for good, and answers its title and privacy as they were just before.";
  "★ IT REFUSES A PUBLIC VIDEO. The videos this is for are private copies left behind by a retried upload or replaced by a corrected render; a public one has viewers, and taking it down is a decision for a person in Studio, not for a command that was handed the wrong id.";
  arguments_assert(arguments, 1);
  let record = await youtube_video_record(video_id);
  let title = record.snippet.title;
  let privacy = record.status.privacyStatus;
  if (equal(privacy, "public")) {
    throw new Error(
      "refusing to delete a public video: " + video_id + " " + title,
    );
  }
  await youtube_api_delete("videos", {
    id: video_id,
  });
  let r = {
    video_id,
    title,
    privacy,
  };
  return r;
}
