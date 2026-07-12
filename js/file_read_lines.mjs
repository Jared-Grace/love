import { text_split_newline } from "./text_split_newline.mjs";
import { file_read } from "./file_read.mjs";
export async function file_read_lines(file_path) {
  let contents = await file_read(file_path);
  let lines = text_split_newline(contents);
  return lines;
}
