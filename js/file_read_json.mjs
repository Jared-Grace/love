import { file_read } from "./file_read.mjs";
import { json_from } from "./json_from.mjs";
export async function file_read_json(file_path) {
  "What is in a file that holds JSON, given back as the thing it spells rather than as its text.";
  let json = await file_read(file_path);
  let data = json_from(json);
  return data;
}
