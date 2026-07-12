import { list_remove } from "./list_remove.mjs";
import { noop } from "./noop.mjs";
import { app_a_list_chooser_generic } from "./app_a_list_chooser_generic.mjs";
import { property_get } from "./property_get.mjs";
import { app_a_on_keydown_add } from "./app_a_on_keydown_add.mjs";
import { html_on_enter_lambda } from "./html_on_enter_lambda.mjs";
import { list_first } from "./list_first.mjs";
export function app_a_list_chooser(context, noun, texts, lambda$text) {
  let root = property_get(context, "root");
  let r = app_a_list_chooser_generic(root, noun, texts, lambda, noop);
  let filtered_get = property_get(r, "filtered_get");
  async function on_enter() {
    let list = filtered_get();
    let first = list_first(list);
    await f_name_select(first);
  }
  let on_keydown = html_on_enter_lambda(on_enter);
  let on_keydowns = app_a_on_keydown_add(context, on_keydown);
  async function lambda(text) {
    list_remove(on_keydowns, on_keydown);
    await lambda$text(text);
  }
  return r;
}
