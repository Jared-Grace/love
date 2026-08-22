import { arguments_assert } from "./arguments_assert.mjs";
import { list_any } from "./list_any.mjs";
export function app_shared_folds_shut_any(folds) {
  "whether any card in this group is shut - which is the same as whether opening them all would change anything.";
  arguments_assert(arguments, 1);
  function member_collapsed_is(member) {
    let collapsed = member.collapsed;
    return collapsed;
  }
  let any = list_any(folds.members, member_collapsed_is);
  return any;
}
