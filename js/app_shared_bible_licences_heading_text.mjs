import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_licences_heading_text() {
  "What stands at the top of the credits, in the language the reader of this app reads.";
  let texts = {
    eng: "The Bibles in this app, and who gave them",
    urd: "اس ایپ کی بائبلیں، اور کن لوگوں نے دیں",
    tgl: "Ang mga Biblia sa app na ito, at kung sino ang nagbigay ng mga ito",
    spa: "Las Biblias de esta aplicación y quién las dio",
    translated_from: {
      urd: "The Bibles in this app, and who gave them",
      tgl: "The Bibles in this app, and who gave them",
      spa: "The Bibles in this app, and who gave them",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
