import { error } from "../../../love/public/src/error.mjs";
import { html_parse } from "../../../love/public/src/html_parse.mjs";
import { http_local_text } from "../../../love/public/src/http_local_text.mjs";
export async function http_local_html_parse(url) {
  let project_url = error();
  let text = await http_local_text(url, project_url);
  let r = await html_parse(text);
  return r;
}
