import fs from "fs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
export async function file_append(f_path, contents) {
  arguments_assert(arguments, 2);
  ("Adds text to the end of a file, creating the file and its folder when absent.");
  ("Append mode is serialized by the operating system, so several sessions writing");
  ("at the same moment each land a whole line instead of overwriting one another.");
  await file_parent_exists_ensure(f_path);
  await fs.promises.appendFile(f_path, contents);
}
