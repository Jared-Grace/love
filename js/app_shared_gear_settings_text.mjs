import { emoji_gear } from "./emoji_gear.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_gear_settings_text() {
  let left = emoji_gear();
  let text = text_combine(left, " Settings");
  return text;
}
