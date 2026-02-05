import { buffer_string_to } from "../../../love/public/src/buffer_string_to.mjs";
import { http_local } from "../../../love/public/src/http_local.mjs";
export async function http_local_text(url) {
  let buffer = await http_local(url);
  const text = buffer_string_to(buffer);
  return text;
}
