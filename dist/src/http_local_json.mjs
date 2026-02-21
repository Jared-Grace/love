import { json_from } from "../../../love/public/src/json_from.mjs";
import { http_local_text } from "../../../love/public/src/http_local_text.mjs";
export async function http_local_json(url) {
  let text = await http_local_text(url);
  let dictionary = json_from(text);
  return dictionary;
}
