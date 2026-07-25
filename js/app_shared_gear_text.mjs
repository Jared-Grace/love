import { emoji_gear } from "./emoji_gear.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_gear_text(label) {
  "one gear button's caption: the gear emoji then the label that names what it opens";
  let left = emoji_gear();
  let text = text_combine(left, label);
  return text;
}
