import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_offline_starting_all_text() {
  "What stands in place of the save-them-all button between the press and the first thing arriving, in the language the reader of this app reads.";
  "It says downloads and not download. More than one is coming, and a reader watching one count move should know there are others behind it.";
  let texts = {
    eng: "Starting the downloads",
    urd: "ڈاؤن لوڈ شروع ہو رہے ہیں",
    tgl: "Sinisimulan ang mga pag-download",
    spa: "Iniciando las descargas",
    por: "Iniciando os downloads",
    ind: "Memulai unduhan",
    translated_from: {
      urd: "Starting the downloads",
      tgl: "Starting the downloads",
      spa: "Starting the downloads",
      por: "Starting the downloads",
      ind: "Starting the downloads",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
