import { equal } from "./equal.mjs";
import { youtube_channel_uploads_all } from "./youtube_channel_uploads_all.mjs";
import { youtube_channel_lyric_videos } from "./youtube_channel_lyric_videos.mjs";
import { psalms_chapter_verse_last } from "./psalms_chapter_verse_last.mjs";
export async function youtube_lyric_videos_copies() {
  "Every private or unlisted video on the lyric-video channel that sings the same passage, as the same song number, as a video that is already public - the copies a retried upload or a corrected render left behind.";
  "★ A COPY IS ONLY A COPY WHEN ITS PUBLIC TWIN EXISTS. A private video with no public twin is a song still waiting for review, and it is left out of this list, so deleting the list can never take away the only version of a song.";
  "Twins are matched by chapter, verses and song number read out of the title rather than by the title's exact words, because the earliest uploads were titled with no verses at all - Psalm 150 BSB lyric video is song 1 of Psalm 150:1-6.";
  let channel_id = youtube_channel_lyric_videos();
  let videos = await youtube_channel_uploads_all(channel_id);
  let shape = new RegExp(
    "^Psalms? (\\d+)(?::(\\S+))?[ ,].*?(?:, song (\\d+))?$",
  );
  let verse_last_by_chapter = {};
  async function key_or_null(title) {
    let found = title.match(shape);
    if (equal(found, null)) {
      return null;
    }
    let chapter = found[1];
    let verses = found[2];
    if (equal(verses, undefined)) {
      let known = verse_last_by_chapter[chapter];
      if (equal(known, undefined)) {
        known = await psalms_chapter_verse_last(chapter);
        verse_last_by_chapter[chapter] = known;
      }
      verses = "1-" + known;
    }
    let song = equal(found[3], undefined) ? "1" : found[3];
    let key = chapter + ":" + verses + " song " + song;
    return key;
  }
  let public_keys = [];
  let hidden = [];
  for (let video of videos) {
    let key = await key_or_null(video.title);
    if (equal(key, null)) {
      continue;
    }
    if (equal(video.privacy, "public")) {
      public_keys.push(key);
      continue;
    }
    hidden.push({
      key,
      video,
    });
  }
  let copies = [];
  for (let one of hidden) {
    if (public_keys.includes(one.key)) {
      copies.push({
        video_id: one.video.video_id,
        title: one.video.title,
        privacy: one.video.privacy,
        twin_of: one.key,
      });
    }
  }
  return copies;
}
