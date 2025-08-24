import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { list_get } from "./list_get.mjs";
import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { emoji_home } from "./emoji_home.mjs";
import { html_button_screen } from "./html_button_screen.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { marker } from "./marker.mjs";
export function app_replace_rule_set(context) {
  let body = html_document_body();
  html_button_screen(body, emoji_home() + "Home", context, "home");
  let index = storage_local_get_context(context, "rule_set_index");
  let rule_sets = app_replace_rule_sets();
  let item = list_get(rule_sets, index);
  marker("1");
}
