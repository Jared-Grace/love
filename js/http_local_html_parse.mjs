import { html_parse } from "./html_parse.mjs";
import { http_local_text } from "./http_local_text.mjs";
export async function http_local_html_parse(url, project_url) {
  let text = await http_local_text(url, project_url);
  let r = await html_parse(text);
  return r;
}
