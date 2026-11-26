import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_languages_prompt_text() {
  "What the list of languages asks the reader, in the language the reader of this app reads.";
  let texts = {
    eng: "What language or languages you want the Bible verses to be translated into?",
    urd: "آپ بائبل کی آیات کا ترجمہ کن زبان یا زبانوں میں چاہتے ہیں؟",
    tgl: "Sa anong wika o mga wika mo gustong maisalin ang mga talata ng Biblia?",
    spa: "¿A qué idioma o idiomas quieres que se traduzcan los versículos de la Biblia?",
    por: "Para qual idioma ou idiomas você quer que os versículos da Bíblia sejam traduzidos?",
    ind: "Ke bahasa apa saja kamu ingin ayat-ayat Alkitab diterjemahkan?",
    fra: "Dans quelle langue ou quelles langues voulez-vous que les versets de la Bible soient traduits ?",
    translated_from: {
      urd: "What language or languages you want the Bible verses to be translated into?",
      tgl: "What language or languages you want the Bible verses to be translated into?",
      spa: "What language or languages you want the Bible verses to be translated into?",
      por: "What language or languages you want the Bible verses to be translated into?",
      ind: "What language or languages you want the Bible verses to be translated into?",
      fra: "What language or languages you want the Bible verses to be translated into?",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
