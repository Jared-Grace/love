import { arguments_assert } from "./arguments_assert.mjs";
import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { file_path_temp } from "./file_path_temp.mjs";
import { promise_catch_ignore } from "./promise_catch_ignore.mjs";
import { file_to_commit_add_try } from "./file_to_commit_add_try.mjs";
import { data_file_update } from "./data_file_update.mjs";
export async function file_overwrite_deciding(file_path, contents) {
  "$plain file_path";
  "$plain contents";
  "Writes a file that decides what runs without asking: the one way past the refusal every other file step gives those paths.";
  "It is on the permission roster, so the automatic grant and the safe edit both refuse whatever reaches it, and a person has to see each such command granted by name.";
  "The write goes to a temp name and is then renamed, so the guard never reads half a file.";
  arguments_assert(arguments, 2);
  text_is_assert_json(contents, {
    hint: "the file contents should be text before writing — did a non-text value arrive?",
    file_path,
  });
  await file_parent_exists_ensure(file_path);
  let fs = await import("fs");
  let temp_path = file_path_temp(file_path);
  try {
    await fs.promises.writeFile(temp_path, contents, "utf-8");
    await fs.promises.rename(temp_path, file_path);
  } catch (e) {
    let promise = fs.promises.unlink(temp_path);
    await promise_catch_ignore(promise);
    throw e;
  }
  await file_to_commit_add_try(file_path);
  await data_file_update(file_path);
}
