import { http_post_options } from "./http_post_options.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
export async function http_post_json_minutes(url, body) {
  "$plain url";
  "$plain body";
  "Posts a question whose answer takes minutes rather than milliseconds, and reads what came back as json.";
  "IT IS THE ORDINARY POST WITH THE TWO NUMBERS THAT WERE WRONG FOR IT SAID OUT LOUD: half an hour to answer in, and one try. Everything else about it is the same, which is why it is four lines rather than a second way of posting - a copy of the fetching would be a second place for a header or a reading of the body to be got right.";
  "HALF AN HOUR IS THE CEILING AND NOT AN EXPECTATION. There still has to be one, because a fetch with no ceiling never settles and the loading mark it sits inside never comes down; a number far past anything real means a stalled connection is eventually let go of while nothing that is merely slow is cut off.";
  "One try, because these are the jobs where asking again is the expensive mistake. A render that failed halfway through has already written and burnt whatever it burnt, and starting it twice more is three times the work to reach the same failure.";
  let options_extra = {
    milliseconds_ceiling: 1800000,
    tries: 1,
  };
  let buffer = await http_post_options(url, body, options_extra);
  let o = buffer_to_json(buffer);
  return o;
}
