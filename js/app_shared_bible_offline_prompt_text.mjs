import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_offline_prompt_text() {
  "What the screen for keeping bibles on a device asks, in the language the reader of this app reads.";
  let texts = {
    eng: "Which languages do you want to keep on this device?",
    urd: "آپ اس آلے پر کون سی زبانیں رکھنا چاہتے ہیں؟",
    tgl: "Aling mga wika ang gusto mong itago sa device na ito?",
    spa: "¿Qué idiomas quieres guardar en este dispositivo?",
    por: "Quais idiomas você quer guardar neste dispositivo?",
    ind: "Bahasa mana yang ingin kamu simpan di perangkat ini?",
    fra: "Quelles langues voulez-vous garder sur cet appareil ?",
    translated_from: {
      urd: "Which languages do you want to keep on this device?",
      tgl: "Which languages do you want to keep on this device?",
      spa: "Which languages do you want to keep on this device?",
      por: "Which languages do you want to keep on this device?",
      ind: "Which languages do you want to keep on this device?",
      fra: "Which languages do you want to keep on this device?",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
