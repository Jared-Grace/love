import { emoji_arrow_down } from "./emoji_arrow_down.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_bible_offline_text() {
  "What the way into keeping the bible on the device is called, in the language the reader of this app reads.";
  "The arrow pointing down is not turned round for a reader who reads from the right. It faces down because what it means is down - onto the thing in your hand - and that is the same direction for everybody. Only a picture whose meaning reverses is turned, which is why this one asks nobody.";
  let texts = {
    en: " Download for offline",
    ur: " آف لائن کے لیے ڈاؤن لوڈ کریں",
  };
  let label = app_shared_text_reader_language(texts);
  let left = emoji_arrow_down();
  let text = text_combine(left, label);
  return text;
}
