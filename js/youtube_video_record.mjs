import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_api_get } from "./youtube_api_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_single } from "./list_single.mjs";
export async function youtube_video_record(video_id) {
  "$plain video_id";
  "The whole editable record of one video as the channel's owner sees it - what it is called, what it says, what it is filed under, and who may watch it.";
  "The parts asked for are the ones that have to be handed back untouched when any single word of them is changed, so they are read together rather than one at a time. Asking for less would be cheaper and would make a later write destroy whatever was left out.";
  "One video was asked for, so exactly one is expected. A list that came back empty means the name is wrong or the video belongs to somebody else, and a list with more in it means the ask was not what it looked like - both are worth stopping on rather than quietly taking the first.";
  arguments_assert(arguments, 1);
  let params = {
    part: "snippet,status",
    id: video_id,
  };
  let answer = await youtube_api_get("videos", params);
  let items = property_get(answer, "items");
  let record = list_single(items);
  return record;
}
