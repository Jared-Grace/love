import { emoji_information } from "./emoji_information.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_about_text() {
  let left = emoji_information();
  let text = text_combine(left, " About");
  return text;
}
