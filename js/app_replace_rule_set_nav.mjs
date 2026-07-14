import { app_replace_button_home } from "./app_replace_button_home.mjs";
import { emoji_target } from "./emoji_target.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_replace_button_screen } from "./app_replace_button_screen.mjs";
import { app_replace_goals } from "./app_replace_goals.mjs";
export function app_replace_rule_set_nav(context, root) {
  app_replace_button_home(root, context);
  let left3 = emoji_target();
  let combined2 = text_combine(left3, "Goals");
  app_replace_button_screen(context, app_replace_goals, root, combined2);
}
