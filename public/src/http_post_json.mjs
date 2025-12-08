import { buffer_to_json } from "../../../love/public/src/buffer_to_json.mjs";
import { http_generic } from "../../../love/public/src/http_generic.mjs";
export async function http_post_json(url, body) {
  let buffer = await http_generic(url, {
    method: "POST",
    body: body,
  });
  let parsed = buffer_to_json(buffer);
  return parsed;
}
