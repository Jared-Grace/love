import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_passage_next_text_get() {
  "What the button on to the passage after this one says, in the language the reader of this app reads. A passage is the group of verses one explanation covers, and these screens show a whole one at a time, so going on goes on by a passage.";
  let texts = {
    eng: "Next passage",
    urd: "اگلا حصہ",
    tgl: "Susunod na bahagi",
    spa: "Pasaje siguiente",
    por: "Próxima passagem",
    ind: "Perikop berikutnya",
    translated_from: {
      urd: "Next passage",
      tgl: "Next passage",
      spa: "Next passage",
      por: "Next passage",
      ind: "Next passage",
    },
  };
  let v = app_shared_text_reader_language(texts);
  return v;
}
