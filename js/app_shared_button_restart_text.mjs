import { emoji_restart } from "./emoji_restart.mjs";
import { text_combine_middle_space_nb } from "./text_combine_middle_space_nb.mjs";
export function app_shared_button_restart_text(label) {
  "restart-button text: the restart emoji on the left, a non-breaking space, then the given label";
  let emoji = emoji_restart();
  let combined = text_combine_middle_space_nb(emoji, label);
  return combined;
}
