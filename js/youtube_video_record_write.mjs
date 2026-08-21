import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_api_put } from "./youtube_api_put.mjs";
export async function youtube_video_record_write(record) {
  "$plain record";
  "Puts a whole video record back in place of the one YouTube holds, and gives back the record as it stands afterwards.";
  "The record handed in must be one that was read out first and then altered in one place, never one built up from the few fields somebody had in mind. The parts named here are replaced entire, so a field left off is a field emptied - and it is emptied silently, with a cheerful reply describing the damage as though it were the intent.";
  arguments_assert(arguments, 1);
  let params = {
    part: "snippet,status",
  };
  let answer = await youtube_api_put("videos", params, record);
  return answer;
}
