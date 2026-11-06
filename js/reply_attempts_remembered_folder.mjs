import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { reply_attempts_remembered_root } from "./reply_attempts_remembered_root.mjs";
export function reply_attempts_remembered_folder(code_hash) {
  arguments_assert(arguments, 1);
  ("Where the kept answers of one version of the reply rules' code sit: a folder of its own, so the answers of older code can be taken away whole.");
  let path2 = reply_attempts_remembered_root();
  let path = path_join([path2, code_hash]);
  return path;
}
