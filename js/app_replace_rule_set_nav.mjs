import { text_combine_space_between } from "./text_combine_space_between.mjs";
import { app_replace_button_home } from "./app_replace_button_home.mjs";
import { emoji_target } from "./emoji_target.mjs";
import { app_shared_screen_set_button } from "./app_shared_screen_set_button.mjs";
import { app_replace_goals } from "./app_replace_goals.mjs";
export function app_replace_rule_set_nav(context, root) {
  app_replace_button_home(root, context);
  let left = emoji_target();
  let combined = text_combine_space_between(left, "Goals");
  app_shared_screen_set_button(root, context, app_replace_goals, combined);
}
