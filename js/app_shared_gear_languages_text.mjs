import { emoji_gear } from "./emoji_gear.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_gear_languages_text() {
  let text = text_combine(emoji_gear(), " Languages");
  return text;
}
