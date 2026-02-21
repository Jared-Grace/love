import { http_post } from "../../../love/public/src/http_post.mjs";
import { buffer_to_json } from "../../../love/public/src/buffer_to_json.mjs";
export async function http_post_json(url, body) {
  let buffer = await http_post(url, body);
  let o = buffer_to_json(buffer);
  return o;
}
