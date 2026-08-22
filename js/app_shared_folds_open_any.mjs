import { arguments_assert } from "./arguments_assert.mjs";
import { list_any } from "./list_any.mjs";
import { not } from "./not.mjs";
export function app_shared_folds_open_any(folds) {
  "whether any card in this group is open - which is the same as whether shutting them all would change anything.";
  arguments_assert(arguments, 1);
  function member_open_is(member) {
    let open = not(member.collapsed);
    return open;
  }
  let any = list_any(folds.members, member_open_is);
  return any;
}
