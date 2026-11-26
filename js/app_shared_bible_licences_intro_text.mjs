import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_licences_intro_text() {
  "What the credits say about themselves before naming anybody, in the language the reader of this app reads.";
  let texts = {
    eng: "Every Bible here was given away by the people who made it. Some asked to be named in return. Here they are, with the terms each one was given on",
    urd: "یہاں کی ہر بائبل اُسے بنانے والوں نے مفت دی۔ کچھ نے بدلے میں اپنا نام لکھے جانے کی درخواست کی۔ یہ وہ لوگ ہیں، اور ساتھ وہ شرائط جن پر ہر ایک دی گئی",
    tgl: "Bawat Biblia rito ay ipinamigay ng mga gumawa nito. May ilang humiling na banggitin ang kanilang pangalan bilang kapalit. Narito sila, kasama ang mga tuntunin kung saan ibinigay ang bawat isa",
    spa: "Cada Biblia aquí fue regalada por las personas que la hicieron. Algunas pidieron ser nombradas a cambio. Aquí están, con los términos con que se dio cada una",
    por: "Cada Bíblia aqui foi doada pelas pessoas que a fizeram. Algumas pediram para ser citadas em troca. Aqui estão, com os termos em que cada uma foi dada",
    ind: "Setiap Alkitab di sini diberikan dengan cuma-cuma oleh orang-orang yang membuatnya. Beberapa meminta agar nama mereka disebut sebagai gantinya. Inilah mereka, dengan ketentuan yang menyertai masing-masing",
    fra: "Chaque Bible ici a été donnée gratuitement par ceux qui l'ont faite. Certains ont demandé à être nommés en retour. Les voici, avec les conditions de chacune",
    translated_from: {
      urd: "Every Bible here was given away by the people who made it. Some asked to be named in return. Here they are, with the terms each one was given on",
      tgl: "Every Bible here was given away by the people who made it. Some asked to be named in return. Here they are, with the terms each one was given on",
      spa: "Every Bible here was given away by the people who made it. Some asked to be named in return. Here they are, with the terms each one was given on",
      por: "Every Bible here was given away by the people who made it. Some asked to be named in return. Here they are, with the terms each one was given on",
      ind: "Every Bible here was given away by the people who made it. Some asked to be named in return. Here they are, with the terms each one was given on",
      fra: "Every Bible here was given away by the people who made it. Some asked to be named in return. Here they are, with the terms each one was given on",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
