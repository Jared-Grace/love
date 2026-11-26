import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_history_empty_text() {
  "What an empty list of remembered readings says.";
  "It says what will be here rather than only that nothing is. Somebody who opens this and finds a blank screen cannot tell whether they have nothing kept or whether the keeping is broken, and the answer matters most to the reader who has just lost a tab.";
  let texts = {
    eng: "Nothing yet. Whatever you are reading is remembered here, so you can come back to it if a tab closes.",
    urd: "ابھی کچھ نہیں۔ آپ جو بھی پڑھ رہے ہوں وہ یہاں یاد رکھا جاتا ہے، تاکہ کوئی ٹیب بند ہو جائے تو آپ واپس آ سکیں۔",
    tgl: "Wala pa. Anumang binabasa mo ay naaalala rito, para mabalikan mo ito kung magsara ang isang tab.",
    spa: "Nada todavía. Lo que estés leyendo se recuerda aquí, para que puedas volver a ello si se cierra una pestaña.",
    por: "Nada ainda. O que você estiver lendo fica guardado aqui, para que você possa voltar se uma aba fechar.",
    ind: "Belum ada. Apa pun yang kamu baca diingat di sini, jadi kamu bisa kembali ke sana jika sebuah tab tertutup.",
    fra: "Rien pour l'instant. Ce que vous lisez est gardé ici, pour que vous puissiez y revenir si un onglet se ferme.",
    translated_from: {
      urd: "Nothing yet. Whatever you are reading is remembered here, so you can come back to it if a tab closes.",
      tgl: "Nothing yet. Whatever you are reading is remembered here, so you can come back to it if a tab closes.",
      spa: "Nothing yet. Whatever you are reading is remembered here, so you can come back to it if a tab closes.",
      por: "Nothing yet. Whatever you are reading is remembered here, so you can come back to it if a tab closes.",
      ind: "Nothing yet. Whatever you are reading is remembered here, so you can come back to it if a tab closes.",
      fra: "Nothing yet. Whatever you are reading is remembered here, so you can come back to it if a tab closes.",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
