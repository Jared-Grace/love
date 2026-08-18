import { arguments_assert } from "./arguments_assert.mjs";
import { qa_commit_named_red_since_nothing } from "./qa_commit_named_red_since_nothing.mjs";
import { property_get } from "./property_get.mjs";
export function qa_commit_named_red_since_head(report) {
  arguments_assert(arguments, 1);
  let r2 = qa_commit_named_red_since_nothing(report);
  let nothing = property_get(r2, "nothing");
  let newest = property_get(r2, "newest");
  let placed = property_get(r2, "placed");
  let head = property_get(r2, "head");
  let r = {
    nothing,
    newest,
    placed,
    head,
  };
  return r;
}
