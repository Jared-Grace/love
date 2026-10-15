import {readFileSync} from "node:fs";
import { arguments_assert } from "./arguments_assert.mjs";
export function file_read_sync(f_path) {
  arguments_assert(arguments, 1);
  ("A file's text, read without waiting, for a caller that has to answer without waiting itself - a list a mirror writer asks for with no await. Anything that can wait should read through the waiting reader instead.");
  let text = readFileSync(f_path, "utf8");
  return text;
}
