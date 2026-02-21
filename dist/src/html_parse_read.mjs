import { html_parse } from "../../../love/public/src/html_parse.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
export async function html_parse_read(file_path) {
  let contents = await file_read(file_path);
  let parsed = await html_parse(contents);
  return parsed;
}
