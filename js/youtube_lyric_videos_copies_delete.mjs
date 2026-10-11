import { youtube_lyric_videos_copies } from "./youtube_lyric_videos_copies.mjs";
import { youtube_video_delete } from "./youtube_video_delete.mjs";
export async function youtube_lyric_videos_copies_delete() {
  "Deletes every private or unlisted copy on the lyric-video channel whose song is already public, and answers what it deleted.";
  "★ IT TAKES NO ARGUMENTS ON PURPOSE. It finds its own list, so the human pastes one short line and never a list of ids, which wraps and breaks on paste. Each delete still refuses a public video.";
  let copies = await youtube_lyric_videos_copies();
  let deleted = [];
  for (let copy of copies) {
    let r = await youtube_video_delete(copy.video_id);
    deleted.push(r);
  }
  return deleted;
}
