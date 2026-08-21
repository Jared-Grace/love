import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_api_url } from "./youtube_api_url.mjs";
import { youtube_oauth_access_token } from "./youtube_oauth_access_token.mjs";
import { http_generic } from "./http_generic.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
import { text_combine } from "./text_combine.mjs";
export async function youtube_api_get(path, params) {
  "$plain path";
  "$plain params";
  "Asks YouTube's own door a question as the owner of the channel, and gives back what it said.";
  "Signing in even to read is what makes the answer the owner's own rather than the public's. A video that is private or unlisted is invisible to an unsigned ask and comes back plainly here, and the record handed over is the whole editable one rather than the part a stranger is shown - which matters because that whole record is what has to be handed back when a single word of it is changed.";
  arguments_assert(arguments, 2);
  let url = youtube_api_url(path, params);
  let access_token = await youtube_oauth_access_token();
  let authorization = text_combine("Bearer ", access_token);
  let options = {
    method: "GET",
    headers: {
      Authorization: authorization,
    },
  };
  let buffer = await http_generic(url, options);
  let answer = buffer_to_json(buffer);
  return answer;
}
