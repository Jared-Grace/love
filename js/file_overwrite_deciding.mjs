import { arguments_assert } from "./arguments_assert.mjs";
import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { file_overwrite_unfenced } from "./file_overwrite_unfenced.mjs";
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
  await file_overwrite_unfenced(file_path, contents);
}
