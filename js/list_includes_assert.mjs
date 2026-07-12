import { assert } from "./assert.mjs";
import { list_includes } from "./list_includes.mjs";
export function list_includes_assert(all, repo_name) {
  let includes = list_includes(all, repo_name);
  assert(includes);
}
