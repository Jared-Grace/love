import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_api_bytes } from "./youtube_api_bytes.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
export async function youtube_api_put(path, params, body) {
  "$plain path";
  "$plain params";
  "$plain body";
  "Hands YouTube's own door a record to put in place of the one it holds, and gives back the record as it stands afterwards.";
  "IT REPLACES RATHER THAN AMENDS, and that is the one thing to hold on to here. The parts named in the values are overwritten wholesale by what is sent, so a part named but sent short is not left alone - it is emptied. A title changed by sending a record holding only a title is a title changed and a description destroyed, and nothing in the reply would say so, because the reply is a faithful account of a record that is now wrong.";
  "So the only safe way to use this is to read the whole record first, change the one word, and send back everything else exactly as it came. The reply is worth reading for the same reason: it is the record as it now stands, so it is the proof of what was actually done rather than a report of what was meant.";
  arguments_assert(arguments, 3);
  let buffer = await youtube_api_bytes("PUT", path, params, body);
  let answer = buffer_to_json(buffer);
  return answer;
}
