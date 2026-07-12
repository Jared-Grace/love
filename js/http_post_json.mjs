import { http_post } from "./http_post.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
export async function http_post_json(url, body) {
  let buffer = await http_post(url, body);
  let o = buffer_to_json(buffer);
  return o;
}
