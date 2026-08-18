import { app_shared_bible_about } from "./app_shared_bible_about.mjs";
import { app_shared_money_body } from "./app_shared_money_body.mjs";
import { app_shared_bible_screen_open } from "./app_shared_bible_screen_open.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { html_div } from "./html_div.mjs";
export function app_shared_bible_money(context) {
  "what this app does with money, as its own screen reached from about; back returns to the about hub";
  async function lambda_back() {
    await app_shared_screen_set(context, app_shared_bible_about);
  }
  let root = app_shared_bible_screen_open(context, lambda_back);
  let container = html_div(root);
  app_shared_money_body(container);
}
