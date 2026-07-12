import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { file_read_lines } from "./file_read_lines.mjs";
export async function file_read_lines_empty_not_is(file_path) {
  let lines = await file_read_lines(file_path);
  let filtered = list_filter_text_empty_not_is(lines);
  return filtered;
}
