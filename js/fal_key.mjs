import { file_exists_assert_json } from "./file_exists_assert_json.mjs";
import { file_read } from "./file_read.mjs";
import { text_trim } from "./text_trim.mjs";
import { fal_key_path } from "./fal_key_path.mjs";
export async function fal_key() {
  "the fal key this machine draws on, read off the disk each time it is wanted rather than held anywhere, so that it never lands in a log, a cache or a commit";
  "the file being missing is the ordinary case the first time, not a fault, so the complaint names the file to put the key in rather than only saying that something went wrong";
  let path = fal_key_path();
  await file_exists_assert_json(path, {
    hint: "put the fal key in this file, on its own, and nothing else will need to know it",
  });
  let text = await file_read(path);
  let key = text_trim(text);
  return key;
}
