import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_buttons_mark_current } from "./app_shared_buttons_mark_current.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function app_reply_testament_choose(root) {
  "A row asking whether the passages may come from the whole Bible or only the Old Testament, and a holder saying which is chosen for whoever picks the passages next.";
  "Both is chosen to begin with, because that is what the page did before there was a choice. Choosing does not pick new passages by itself: the count below is the step that says it resets what is showing, so this one only changes what the next pick draws from.";
  arguments_assert(arguments, 1);
  let card = app_shared_container_blue(root);
  app_shared_text_body(card, "2. Which parts of the Bible?");
  let testament_held = {
    old_only: false,
  };
  let choices = [
    {
      label: "Old Testament only",
      old_only: true,
    },
    {
      label: "Both New and Old Testaments",
      old_only: false,
    },
  ];
  let buttons = [];
  let items = [];
  function mark() {
    let current = property_get(testament_held, "old_only");
    app_shared_buttons_mark_current(buttons, items, current);
  }
  function choice_draw(choice) {
    let old_only = property_get(choice, "old_only");
    function on_click() {
      property_set(testament_held, "old_only", old_only);
      mark();
    }
    let label = property_get(choice, "label");
    let button = app_shared_button(card, label, on_click);
    list_add(buttons, button);
    list_add(items, old_only);
  }
  each(choices, choice_draw);
  mark();
  return testament_held;
}
