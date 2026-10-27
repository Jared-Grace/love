import { arguments_assert } from "./arguments_assert.mjs";
import { not_equal } from "./not_equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { youtube_channel_lyric_videos } from "./youtube_channel_lyric_videos.mjs";
import { youtube_video_record } from "./youtube_video_record.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { text_includes } from "./text_includes.mjs";
import { less_than } from "./less_than.mjs";
import { youtube_video_delete } from "./youtube_video_delete.mjs";
export async function youtube_video_delete_replaced_private_lyric_video(
  video_id_old,
  video_id_new,
) {
  arguments_assert(arguments, 2);
  ("$plain video_id_old");
  ("$plain video_id_new");
  ("Deletes for good a private lyric video that a newer private upload of the same song has replaced, and answers its title and privacy as they were just before.");
  ("★ IT CAN ONLY DELETE THE OLDER OF TWO PRIVATE COPIES OF ONE SONG, which is what lets it be granted. The delete it wraps removes any video that is not public, so a wrong id loses a video for good. Here both records are read first, and the old one is refused unless both are private, both are on the lyric video channel, both carry the same lyric video title, and the old one was uploaded before the new one. The worst a mistaken pair can do is delete a copy that a later copy of the same song already stands in for - which is the one thing it is for.");
  ("THE NEW ONE MUST BE A DIFFERENT VIDEO, or the same id handed twice would pass every check against itself.");
  let different = not_equal(video_id_old, video_id_new);
  assert_json(different, {
    hint: "name two different videos: the old copy, then the upload that replaces it",
    video_id_old,
    video_id_new,
  });
  let channel_right = youtube_channel_lyric_videos();
  let ids = [video_id_old, video_id_new];
  let snippets = [];
  for (let video_id of ids) {
    let record = await youtube_video_record(video_id);
    let status = property_get(record, "status");
    let privacy = property_get(status, "privacyStatus");
    let private_is = equal(privacy, "private");
    assert_json(private_is, {
      hint: "both videos must be private; a video anyone can see is taken down by a person",
      video_id,
      privacy,
    });
    let snippet = property_get(record, "snippet");
    let channel_id = property_get(snippet, "channelId");
    let channel_is = equal(channel_id, channel_right);
    assert_json(channel_is, {
      hint: "both videos must be on the lyric video channel",
      video_id,
      channel_id,
    });
    snippets.push(snippet);
  }
  let [snippet_old, snippet_new] = snippets;
  let title_old = property_get(snippet_old, "title");
  let title_new = property_get(snippet_new, "title");
  ('A SONG NUMBER MAY FOLLOW THE WORDS, as in "Psalm 114:1-8 (BSB) lyric video, song 3", so the title only has to hold them.');
  let lyric = text_includes(title_old, " (BSB) lyric video");
  assert_json(lyric, {
    hint: "only a video titled as a lyric video is deleted",
    video_id_old,
    title_old,
  });
  let same = equal(title_old, title_new);
  assert_json(same, {
    hint: "the two videos must carry the same title, so the new one is the same song",
    title_old,
    title_new,
  });
  let value = property_get(snippet_old, "publishedAt");
  let at_old = Date.parse(value);
  let value2 = property_get(snippet_new, "publishedAt");
  let at_new = Date.parse(value2);
  let older = less_than(at_old, at_new);
  assert_json(older, {
    hint: "the video deleted must be the older upload; the newer one is the one kept",
    video_id_old,
    video_id_new,
  });
  let deleted = await youtube_video_delete(video_id_old);
  return deleted;
}
