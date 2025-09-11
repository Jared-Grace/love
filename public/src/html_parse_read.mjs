import { html_parse } from "./html_parse.mjs";
import { file_read } from "./file_read.mjs";
export async function html_parse_read() {
  let contents = await file_read(joined);
  let { d, root } = await html_parse(contents);
}
