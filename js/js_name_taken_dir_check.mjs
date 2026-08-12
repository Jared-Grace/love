import { js_file_dir_path } from "./js_file_dir_path.mjs";
import { file_exists_not_assert_json } from "./file_exists_not_assert_json.mjs";
export async function js_name_taken_dir_check(dir, name) {
  "Refuses a rename onto a name the folder already has a file for, before any file is rewritten.";
  "The rename ends by moving the old file onto the new name, and a move writes over whatever was already standing there. So a rename onto a taken name does not land two things on one word - it destroys one of them, and it destroys the one nobody was renaming.";
  "The whole-repo verb asks the same question of every identifier the repo knows. A flat folder of one file per function is the whole world here, so a file already answering to the name is the same fact asked hermetically.";
  "It stood only on the whole-repo side until 2026-08-12, which is exactly the drift a pairing loses most easily: the command refused, the twin the corpus actually runs did not, and no example could reach the difference. Measured by writing the refusal down - the folder afterwards held one file where two had been.";
  let path_after = js_file_dir_path(dir, name);
  await file_exists_not_assert_json(path_after, {
    hint: "the new function name should not already be taken by another file in this folder — pick a name that isn't in use",
    name_after: name,
  });
}
