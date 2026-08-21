import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_videos_descriptions_payload_path } from "./psalms_videos_descriptions_payload_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { youtube_video_description } from "./youtube_video_description.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
export async function psalms_videos_descriptions_live_read() {
  "Reads what every song on the channel is actually carrying right now, and pairs each reading with the words worked out for that song.";
  "Two different questions want this same reading and neither wants the other's answer: which songs still need doing, and what would be written over if they were done. Asking youtube a thousand times is the slow part of both, so it is asked once here and the answers are sorted out afterwards by whoever wanted them.";
  "Nobody is signed in for this. What a stranger lands on is the only honest account of what a video carries, and it is also the only account that is true no matter who did the writing or whether they said so.";
  "Eight are asked at a time. These are ordinary page reads and there are over a thousand of them; one at a time spends the run waiting, and all at once is how a sweep gets itself refused.";
  arguments_assert(arguments, 0);
  let path = psalms_videos_descriptions_payload_path();
  let paired = await file_read_json(path);
  async function lambda$item(one) {
    let live = await youtube_video_description(one.video_id);
    let r = {
      one: one,
      live: live,
    };
    return r;
  }
  let read = await list_map_limited_async(paired, lambda$item, 8);
  return read;
}
