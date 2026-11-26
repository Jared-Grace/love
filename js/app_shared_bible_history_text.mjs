import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { emoji_clock } from "./emoji_clock.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_bible_history_text() {
  "What the way into the remembered readings is called - said first as what the reader will find there, a way back to where they were, and then, in brackets, by the word history, the name a reader looking for this already knows it by. The human asked for that word at the end.";
  "Lower case in the brackets, because it follows a sentence-case label rather than starting one. Rejected: a capital H - it would read as a second title inside the first.";
  let texts = {
    eng: " Where you were reading (history)",
    urd: " آپ کہاں پڑھ رہے تھے (تاریخچہ)",
    tgl: " Kung saan ka nagbabasa (kasaysayan)",
    spa: " Dónde estabas leyendo (historial)",
    por: " Onde você estava lendo (histórico)",
    ind: " Tempat kamu membaca (riwayat)",
    fra: " Où vous lisiez (historique)",
    translated_from: {
      urd: " Where you were reading (history)",
      tgl: " Where you were reading (history)",
      spa: " Where you were reading (history)",
      por: " Where you were reading (history)",
      ind: " Where you were reading (history)",
      fra: " Where you were reading (history)",
    },
  };
  let label = app_shared_text_reader_language(texts);
  let left = emoji_clock();
  let text = text_combine(left, label);
  return text;
}
