import { list_get } from "./list_get.mjs";
import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { emoji_home } from "./emoji_home.mjs";
import { html_button_screen } from "./html_button_screen.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { marker } from "./marker.mjs";
export function app_replace_rule_set(context) {
  let body = html_document_body();
  html_button_screen(body, emoji_home() + "Home", context, "home");
  let key = "rule_set_index";
  let { app_fn } = context;
  let value = storage_local_get(app_fn, key);
  let rule_sets = app_replace_rule_sets();
  let item = list_get(list, index);
  marker("1");
}
