import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_word_ask_ai_text_get() {
  "What the quiet label in front of the buttons that ask an AI about a Bible word says, in the language the reader of this app reads.";
  let texts = {
    eng: "Ask an AI:",
    urd: "کسی AI سے پوچھیں:",
    tgl: "Magtanong sa isang AI:",
    spa: "Pregunta a una IA:",
    por: "Pergunte a uma IA:",
    translated_from: {
      urd: "Ask an AI:",
      tgl: "Ask an AI:",
      spa: "Ask an AI:",
      por: "Ask an AI:",
    },
  };
  let v = app_shared_text_reader_language(texts);
  return v;
}
