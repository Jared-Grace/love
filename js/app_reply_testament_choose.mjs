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
  "A row asking whether the reply is for a Christian or a Jewish reader, and a holder saying which is chosen. Jewish means the passages come only from the Old Testament and the blessing is the priestly one of Numbers 6 instead of the one in the name of the Trinity.";
  "Christian is chosen to begin with, because that is what the page did before there was a choice. Choosing does not pick new passages by itself: the count below is the step that says it resets what is showing, so this one only changes what the next pick draws from and what the next copy blesses with.";
  arguments_assert(arguments, 1);
  let card = app_shared_container_blue(root);
  app_shared_text_body(card, "2. Christian or Jewish?");
  let testament_held = {
    jewish: false,
  };
  let choices = [
    {
      label: "Christian",
      jewish: false,
    },
    {
      label: "Jewish",
      jewish: true,
    },
  ];
  let buttons = [];
  let items = [];
  function mark() {
    let current = property_get(testament_held, "jewish");
    app_shared_buttons_mark_current(buttons, items, current);
  }
  function choice_draw(choice) {
    let jewish = property_get(choice, "jewish");
    function on_click() {
      property_set(testament_held, "jewish", jewish);
      mark();
    }
    let label = property_get(choice, "label");
    let button = app_shared_button(card, label, on_click);
    list_add(buttons, button);
    list_add(items, jewish);
  }
  each(choices, choice_draw);
  mark();
  return testament_held;
}
