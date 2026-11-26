import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_offline_starting_text() {
  "What one language's row says in the moment between the press and the first thing arriving, in the language the reader of this app reads.";
  let texts = {
    eng: "Starting the download",
    urd: "ڈاؤن لوڈ شروع ہو رہا ہے",
    tgl: "Sinisimulan ang pag-download",
    spa: "Iniciando la descarga",
    por: "Iniciando o download",
    ind: "Memulai unduhan",
    fra: "Démarrage du téléchargement",
    translated_from: {
      urd: "Starting the download",
      tgl: "Starting the download",
      spa: "Starting the download",
      por: "Starting the download",
      ind: "Starting the download",
      fra: "Starting the download",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
