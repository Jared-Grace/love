import { app_replace_rule_set_button_rule_on_click_inner_answer } from "./app_replace_rule_set_button_rule_on_click_inner_answer.mjs";
import { property_get } from "./property_get.mjs";
export async function app_replace_rule_set(context) {
  let root = property_get(context, "root");
  await app_replace_rule_set_button_rule_on_click_inner_answer(context, root);
}
