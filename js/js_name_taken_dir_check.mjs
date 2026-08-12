import { js_file_dir_path } from "./js_file_dir_path.mjs";
import { file_exists_not_assert_json } from "./file_exists_not_assert_json.mjs";
export async function js_name_taken_dir_check(dir, name) {
  "Refuses a name the folder already has a file for, before anything is written.";
  "Every verb that gives a function a new name finishes by putting a file at that name, and both ways of putting one there write over whatever was already standing. Renaming moves the old file onto the new name; copying writes a whole new file at it. So neither lands two things on one word - each destroys one of them, and the one destroyed is the one nobody named.";
  "The whole-repo verbs ask the same question of every identifier the repo knows. A flat folder of one file per function is the whole world here, so a file already answering to the name is the same fact asked hermetically.";
  "It stood only on the whole-repo side until 2026-08-12, which is exactly the drift a pairing loses most easily: the command refused, the twin the corpus actually runs did not, and no example could reach the difference. Both twins were measured by writing the refusal down - rename left the folder holding one file where two had been, and copy did not even throw.";
  let path = js_file_dir_path(dir, name);
  await file_exists_not_assert_json(path, {
    hint: "the new function name should not already be taken by another file in this folder — pick a name that isn't in use",
    name,
  });
}
