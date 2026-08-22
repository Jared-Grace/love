import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container_blue_collapsible } from "./app_shared_container_blue_collapsible.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { app_shared_folds_refresh } from "./app_shared_folds_refresh.mjs";
export function app_shared_folds_collapsible(folds, parent, title_text) {
  "the shared blue card that folds, drawn into a group so the buttons above it know whether it is open.";
  "This is the way to draw one on a page that offers open-everything and shut-everything, and drawing the card straight is the way on a page that does not. The card itself is the same card either way - only the listening is added here.";
  "The card is heard however it was folded, because the card tells this whenever it changes, and it changes whether the reader tapped its title or a button reached in from outside.";
  arguments_assert(arguments, 3);
  let member = {
    collapsed: false,
    collapsed_set: null,
  };
  function changed(collapsed) {
    member.collapsed = collapsed;
    app_shared_folds_refresh(folds);
  }
  let card = app_shared_container_blue_collapsible(parent, title_text, changed);
  let body = property_get(card, "body");
  let collapsed_set = property_get(card, "collapsed_set");
  member.collapsed_set = collapsed_set;
  list_add(folds.members, member);
  let r = {
    body: body,
    collapsed_set: collapsed_set,
  };
  return r;
}
