import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_channel_uploads_newest } from "./youtube_channel_uploads_newest.mjs";
import { youtube_api_get } from "./youtube_api_get.mjs";
export async function youtube_channel_uploads_newest_views(channel_id) {
  "The fifty newest uploads of one channel, each with its view count beside when it was published - so a question like 'are new videos getting fewer views' is answered from the numbers rather than from memory.";
  arguments_assert(arguments, 1);
  let videos = await youtube_channel_uploads_newest(channel_id);
  function lambda(v) {
    let r = v.video_id;
    return r;
  }
  let ids = videos.map(lambda).join(",");
  let answer = await youtube_api_get("videos", {
    part: "statistics",
    id: ids,
  });
  let views = {};
  for (let item of answer.items) {
    views[item.id] = Number(item.statistics.viewCount);
  }
  let rows = [];
  for (let v of videos) {
    rows.push({
      published_at: v.published_at,
      views: views[v.video_id] ?? null,
      privacy: v.privacy,
      title: v.title,
      video_id: v.video_id,
    });
  }
  return rows;
}
