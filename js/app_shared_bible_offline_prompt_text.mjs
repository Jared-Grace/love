import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_offline_prompt_text() {
  "What the screen for keeping bibles on a device asks, in the language the reader of this app reads.";
  let texts = {
    eng: "Which languages do you want to keep on this device?",
    urd: "آپ اس آلے پر کون سی زبانیں رکھنا چاہتے ہیں؟",
    tgl: "Aling mga wika ang gusto mong itago sa device na ito?",
    spa: "¿Qué idiomas quieres guardar en este dispositivo?",
    translated_from: {
      urd: "Which languages do you want to keep on this device?",
      tgl: "Which languages do you want to keep on this device?",
      spa: "Which languages do you want to keep on this device?",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
