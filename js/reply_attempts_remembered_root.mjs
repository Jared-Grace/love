import { arguments_assert } from "./arguments_assert.mjs";
import { folder_private_path } from "./folder_private_path.mjs";
export function reply_attempts_remembered_root() {
  arguments_assert(arguments, 0);
  ("Where the kept answers of the reply rules sit, every version of the rules' code together.");
  ("They sit in the private folder because each one is filed under a real person's message and carries what was said back to it - never in the repo, which is public, and never in a backup.");
  let path = folder_private_path("reply_attempts");
  return path;
}
