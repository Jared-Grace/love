import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_offline_prompt_text() {
  "What the screen for keeping bibles on a device asks, in the language the reader of this app reads.";
  let texts = {
    en: "Which languages do you want to keep on this device?",
    ur: "آپ اس آلے پر کون سی زبانیں رکھنا چاہتے ہیں؟",
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
