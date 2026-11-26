import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_passage_previous_text_get() {
  "What the button back to the passage before this one says, in the language the reader of this app reads.";
  let texts = {
    eng: "Previous passage",
    urd: "پچھلا حصہ",
    tgl: "Nakaraang bahagi",
    spa: "Pasaje anterior",
    por: "Passagem anterior",
    ind: "Perikop sebelumnya",
    fra: "Passage précédent",
    translated_from: {
      urd: "Previous passage",
      tgl: "Previous passage",
      spa: "Previous passage",
      por: "Previous passage",
      ind: "Previous passage",
      fra: "Previous passage",
    },
  };
  let v = app_shared_text_reader_language(texts);
  return v;
}
