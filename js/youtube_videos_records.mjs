import { arguments_assert } from "./arguments_assert.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { youtube_api_get } from "./youtube_api_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { list_flat } from "./list_flat.mjs";
export async function youtube_videos_records(video_ids) {
  "$plain video_ids";
  "What youtube says about each of many videos at once - the part that holds the title, the words underneath, and what the video is filed under.";
  "Fifty names go in one ask, because that is the most the door will take, and it charges the same for one name as for fifty. So the whole of a thousand-song channel is twenty-seven asks against a daily allowance of ten thousand, where reading the same thousand pages as a stranger would be a thousand reads and gets the machine refused for the rest of the hour.";
  "IT ANSWERS ONLY FOR WHAT IT WAS TOLD ABOUT. A name youtube does not know, or a video belonging to somebody else, is simply left out of the answer rather than coming back empty - so the list handed back can be shorter than the list asked for, and the caller has to notice that rather than assume one record per name.";
  "Two asks at a time. Signed-in asks are counted rather than throttled, so there is nothing to hide from here; two is enough to stop the run being spent waiting and small enough that a wrong list cannot become a flood.";
  arguments_assert(arguments, 1);
  let chunks = list_chunk(video_ids, 50);
  async function lambda$chunk(chunk) {
    let params = {
      part: "snippet",
      id: list_join_comma(chunk),
    };
    let answer = await youtube_api_get("videos", params);
    let items = property_get(answer, "items");
    return items;
  }
  let by_chunk = await list_map_limited_async(chunks, lambda$chunk, 2);
  let records = list_flat(by_chunk);
  return records;
}
