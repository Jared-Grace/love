import { emoji_globe_americas } from "./emoji_globe_americas.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_bible_languages_text() {
  "inside settings the gear already belongs to settings itself, so the languages entry wears a globe instead";
  let left = emoji_globe_americas();
  let text = text_combine(left, " Languages");
  return text;
}
