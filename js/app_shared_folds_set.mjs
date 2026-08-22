import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { app_shared_folds_refresh } from "./app_shared_folds_refresh.mjs";
export function app_shared_folds_set(folds, collapsed) {
  "$plain collapsed";
  "open, or shut, every card in one group at once - what the open-everything and shut-everything buttons actually do, and what the first draw does to leave the page the way it should start.";
  "It takes the group it acts on because cards nest and the levels are folded for different reasons: the search results shut their book cards on the first draw to leave the reader an overview of what matched, and shutting the sections over them would hide that very overview.";
  arguments_assert(arguments, 2);
  function collapsed_set_call(member) {
    member.collapsed_set(collapsed);
  }
  each(folds.members, collapsed_set_call);
  app_shared_folds_refresh(folds);
}
