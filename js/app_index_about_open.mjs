import { app_shared_button_back } from "./app_shared_button_back.mjs";
import { app_shared_money_body } from "./app_shared_money_body.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
export function app_index_about_open(root, back) {
  "what is promised about money here, drawn in place over the list of apps; the way out is handed in and redraws that list";
  "the way out is handed in rather than reached for, because reaching for it would mean this file naming the index and the index naming this file, and neither would load without the other";
  arguments_assert(arguments, 2);
  html_clear(root);
  app_shared_button_back(root, back);
  let container = html_div(root);
  app_shared_money_body(container);
}
