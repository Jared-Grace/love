import { text_prefix_without_inner } from "./text_prefix_without_inner.mjs";
import { html_hash_symbol } from "./html_hash_symbol.mjs";
import { text_split_first } from "./text_split_first.mjs";
import { hash_text_object } from "./hash_text_object.mjs";
import { app_shared_screen_hash_key } from "./app_shared_screen_hash_key.mjs";
import { app_replace_rule_set_hash_key } from "./app_replace_rule_set_hash_key.mjs";
import { app_replace_goal_hash_key } from "./app_replace_goal_hash_key.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
import { each } from "./each.mjs";
import { hash_to_url } from "./hash_to_url.mjs";
import { text_combine } from "./text_combine.mjs";
import { playwright_refresh } from "./playwright_refresh.mjs";
export async function app_replace_tests_refresh(page) {
  "Opens the replace page over again as a new visitor would, on the address the test chose: the screen, rule set and goal words the app wrote into the address as it was played are dropped, and every other word - such as the one that turns the animation off - is kept.";
  "Without dropping them the app does what a link asks and reopens on the goal the last test finished, so a test that starts by clicking a rule set on the home screen finds no such button.";
  let url = page.url();
  let symbol = html_hash_symbol();
  let before = text_split_first(url, symbol);
  let hash_url = text_prefix_without_inner(url, before);
  let hash = hash_text_object(hash_url);
  let v = app_shared_screen_hash_key();
  let v2 = app_replace_rule_set_hash_key();
  let v3 = app_replace_goal_hash_key();
  let keys = [v, v2, v3];
  function lambda(key) {
    property_delete_if_exists(hash, key);
  }
  each(keys, lambda);
  let url_hash = hash_to_url(hash);
  let url_new = text_combine(before, url_hash);
  await page.goto(url_new);
  await playwright_refresh(page);
}
