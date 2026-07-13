import { assert_message } from "./assert_message.mjs";
import { list_includes } from "./list_includes.mjs";
export function list_includes_assert(all, repo_name) {
  let includes = list_includes(all, repo_name);
  assert_message(
    includes,
    "This list was expected to include that value. Would you like to check what's inside it?",
  );
}
