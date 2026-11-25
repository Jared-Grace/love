import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_language_prompt_one_text() {
  "What a list of languages asks the reader when only one can be chosen, in the language the reader of this app reads.";
  let texts = {
    eng: "Which language do you want the Bible verses to be translated into?",
    urd: "آپ بائبل کی آیات کا ترجمہ کس زبان میں چاہتے ہیں؟",
    tgl: "Sa anong wika mo gustong maisalin ang mga talata ng Biblia?",
    spa: "¿A qué idioma quieres que se traduzcan los versículos de la Biblia?",
    por: "Para qual idioma você quer que os versículos da Bíblia sejam traduzidos?",
    ind: "Ke bahasa apa kamu ingin ayat-ayat Alkitab diterjemahkan?",
    translated_from: {
      urd: "Which language do you want the Bible verses to be translated into?",
      tgl: "Which language do you want the Bible verses to be translated into?",
      spa: "Which language do you want the Bible verses to be translated into?",
      por: "Which language do you want the Bible verses to be translated into?",
      ind: "Which language do you want the Bible verses to be translated into?",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
