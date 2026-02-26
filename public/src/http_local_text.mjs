import { error } from "../../../love/public/src/error.mjs";
import { buffer_text_to } from "../../../love/public/src/buffer_text_to.mjs";
import { http_local } from "../../../love/public/src/http_local.mjs";
export async function http_local_text(url) {
  let project_url = error();
  let buffer = await http_local(url, project_url);
  const text = buffer_text_to(buffer);
  return text;
}
