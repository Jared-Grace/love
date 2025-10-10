import { assert } from "../../../love/public/src/assert.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export function list_includes_assert(all, repo_name) {
  let includes = list_includes(all, repo_name);
  assert(includes);
}
