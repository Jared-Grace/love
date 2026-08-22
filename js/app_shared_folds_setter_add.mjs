import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { app_shared_folds_refresh } from "./app_shared_folds_refresh.mjs";
export function app_shared_folds_setter_add(folds, collapsed_set) {
  "put a card that folds itself its own way into a group, and hand back the way to fold it that the group can hear.";
  "IT IS THE ANSWER TO EVERY CARD THAT IS NOT THE SHARED ONE. The search results' book cards fold themselves - they scroll into view and fetch their verses as they open - so they cannot be built by the shared card, but the buttons above them still have to know how many of them are open.";
  "What comes back must be used in place of the setter handed in, everywhere: the group learns of a fold only through it, and a card folded by the original setter would leave the group believing it was still the way it was.";
  arguments_assert(arguments, 2);
  let member = {
    collapsed: false,
    collapsed_set: null,
  };
  function collapsed_set_heard(collapsed) {
    member.collapsed = collapsed;
    collapsed_set(collapsed);
    app_shared_folds_refresh(folds);
  }
  member.collapsed_set = collapsed_set_heard;
  list_add(folds.members, member);
  return collapsed_set_heard;
}
