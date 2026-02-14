import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_rule_set_get } from "../../../love/public/src/app_replace_rule_set_get.mjs";
export function app_replace_goals(context) {
  let root = property_get(context, "root");
  let item = app_replace_rule_set_get(context);
  let name = property_get(item, "name");
  html_p_text(root, "Rule set: " + name);
  let goals = property_get(item, "goals");
}
