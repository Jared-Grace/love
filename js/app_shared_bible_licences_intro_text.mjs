import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_licences_intro_text() {
  "What the credits say about themselves before naming anybody, in the language the reader of this app reads.";
  let texts = {
    en: "Every Bible here was given away by the people who made it. Some asked to be named in return. Here they are, with the terms each one was given on",
    ur: "یہاں کی ہر بائبل اُسے بنانے والوں نے مفت دی۔ کچھ نے بدلے میں اپنا نام لکھے جانے کی درخواست کی۔ یہ وہ لوگ ہیں، اور ساتھ وہ شرائط جن پر ہر ایک دی گئی",
    tgl: "Bawat Biblia rito ay ipinamigay ng mga gumawa nito. May ilang humiling na banggitin ang kanilang pangalan bilang kapalit. Narito sila, kasama ang mga tuntunin kung saan ibinigay ang bawat isa",
    translated_from: {
      ur: "Every Bible here was given away by the people who made it. Some asked to be named in return. Here they are, with the terms each one was given on",
      tgl: "Every Bible here was given away by the people who made it. Some asked to be named in return. Here they are, with the terms each one was given on",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
