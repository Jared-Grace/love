import { log } from "./log.mjs";
import { html_parse } from "./html_parse.mjs";
import { file_read } from "./file_read.mjs";
export async function html_parse_read(file_path) {
  let contents = await file_read(file_path);
  log(message);
  let parsed = await html_parse(contents);
  return parsed;
}
