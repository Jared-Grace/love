import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { app_shared_button_back_arrow } from "./app_shared_button_back_arrow.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_button_back_text() {
  "What the plain way out of a screen says, in the language the reader of this app reads, behind the arrow that already faces the way back for them.";
  let texts = {
    eng: " Back",
    urd: " واپس",
    tgl: " Bumalik",
    spa: " Atrás",
    por: " Voltar",
    ind: " Kembali",
    translated_from: {
      urd: " Back",
      tgl: " Back",
      spa: " Back",
      por: " Back",
      ind: " Back",
    },
  };
  let label = app_shared_text_reader_language(texts);
  let facing = app_shared_button_back_arrow();
  let bt = text_combine(facing, label);
  return bt;
}
