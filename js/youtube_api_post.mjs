import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_api_bytes } from "./youtube_api_bytes.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
export async function youtube_api_post(path, params, body) {
  "$plain path";
  "$plain params";
  "$plain body";
  "Hands YouTube's own door a record that does not exist yet, and gives back the record as it now stands, including the name it has been given.";
  "The name is the reason to read the reply. A thing made this way is named by YouTube rather than by whoever asked for it, and that name is the only way to reach it again - so a reply thrown away is a thing made and then lost, still there and no longer referable to.";
  "Making the same thing twice makes two of it. There is no asking for a thing only if it is missing, so whether it is already there is a question to settle before asking rather than after.";
  arguments_assert(arguments, 3);
  let buffer = await youtube_api_bytes("POST", path, params, body);
  let answer = buffer_to_json(buffer);
  return answer;
}
