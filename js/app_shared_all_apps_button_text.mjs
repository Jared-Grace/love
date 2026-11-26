import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_all_apps_button_text() {
  "what the way back out to the page listing every app says, in the language the reader of this app reads. The little picture in front of it is chosen where the button is made, because a picture is the same in every language and these words are not.";
  let texts = {
    eng: " All apps",
    urd: " تمام ایپس",
    tgl: " Lahat ng app",
    spa: " Todas las aplicaciones",
    por: " Todos os aplicativos",
    ind: " Semua aplikasi",
    fra: " Toutes les applications",
    translated_from: {
      urd: " All apps",
      tgl: " All apps",
      spa: " All apps",
      por: " All apps",
      ind: " All apps",
      fra: " All apps",
    },
  };
  let label = app_shared_text_reader_language(texts);
  return label;
}
