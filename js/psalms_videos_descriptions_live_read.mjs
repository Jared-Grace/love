import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_videos_descriptions_payload_path } from "./psalms_videos_descriptions_payload_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_map } from "./list_map.mjs";
import { youtube_videos_descriptions } from "./youtube_videos_descriptions.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_add } from "./list_add.mjs";
export async function psalms_videos_descriptions_live_read() {
  "Reads what every song on the channel is actually carrying right now, pairs each reading with the words worked out for that song, and keeps separately the songs youtube would say nothing about at all.";
  "Two different questions want this same reading and neither wants the other's answer: which songs still need doing, and what would be written over if they were done. Asking youtube is the slow part of both, so it is asked once here and the answers are sorted out afterwards by whoever wanted them.";
  "IT ASKS AS THE OWNER RATHER THAN READING THE PAGES A STRANGER SEES. Fifty songs go in one ask that way, so a thousand-song channel is twenty-seven asks instead of a thousand page reads - and a thousand page reads is what got this machine served a sign-in wall instead of videos, for the rest of the hour, twice. Signing in also means a video that is private or not listed answers plainly rather than looking like a video that has gone.";
  "THE SILENT SONGS ARE HANDED BACK APART FROM THE READ ONES. A song youtube said nothing about has not been shown to be carrying nothing; it has not been shown to be carrying anything either, and the one thing a reading must never do is invent the difference. Folding the two together is exactly what made an earlier sweep report four hundred and thirty-seven songs bare that were carrying their words the whole time.";
  arguments_assert(arguments, 0);
  let path = psalms_videos_descriptions_payload_path();
  let paired = await file_read_json(path);
  function lambda$id(one) {
    let video_id = property_get(one, "video_id");
    return video_id;
  }
  let video_ids = list_map(paired, lambda$id);
  let answered = await youtube_videos_descriptions(video_ids);
  let said = property_get(answered, "said");
  let read = [];
  let silent = [];
  for (let one of paired) {
    let heard = property_exists(said, one.video_id);
    if (heard) {
      let live = property_get(said, one.video_id);
      list_add(read, {
        one: one,
        live: live,
      });
      continue;
    }
    list_add(silent, one);
  }
  let r = {
    read: read,
    silent: silent,
  };
  return r;
}
