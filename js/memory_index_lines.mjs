import { memory_index_text } from "./memory_index_text.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
export async function memory_index_lines() {
  "the memory index one line at a time, exactly as the loader reads it";
  let text = await memory_index_text();
  let lines = text_split_newline(text);
  return lines;
}
