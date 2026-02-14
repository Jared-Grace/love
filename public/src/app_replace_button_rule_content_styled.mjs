import { app_replace_lefts_rights_style } from "../../../love/public/src/app_replace_lefts_rights_style.mjs";
import { app_replace_button_rule_content } from "../../../love/public/src/app_replace_button_rule_content.mjs";
export function app_replace_button_rule_content_styled(title, left, right) {
  let rb = app_replace_button_rule_content(title, left, right);
  app_replace_lefts_rights_style(rb, false);
}
