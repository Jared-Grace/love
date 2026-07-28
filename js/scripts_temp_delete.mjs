import { text_is } from "./text_is.mjs";
import { arguments_assert_each } from "./arguments_assert_each.mjs";
import { path_base } from "./path_base.mjs";
import { path_join } from "./path_join.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
export async function scripts_temp_delete(name) {
  arguments_assert_each(arguments, [text_is]);
  ("Delete a throwaway file scripts/temp/<name> - the sanctioned in-repo scratch");
  ("location - by NAME only. The basename step strips any directory components");
  ("off name first, so the target can never escape scripts/temp (no traversal, no");
  ("absolute path). This replaces `rm -f scripts/temp/<name>`, which can't be");
  ("safely allow-listed - an exact rule is whack-a-mole across throwaway names");
  ("and a wildcard rule would let a dangerous path be appended. No-op if absent.");
  let base = path_base(name);
  let path = path_join(["scripts", "temp", base]);
  await file_delete_if_exists(path);
}
