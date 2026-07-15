import { emoji_restart } from "./emoji_restart.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_button_start_over_text() {
  let left = emoji_restart();
  let combined = text_combine(left, " Start over");
  return combined;
}
