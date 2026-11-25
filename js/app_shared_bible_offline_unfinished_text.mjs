import { app_shared_text_reader_language_around } from "./app_shared_text_reader_language_around.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_bible_offline_unfinished_text(name) {
  "What one language's row says when its download did not get there, in the language the reader of this app reads.";
  "It asks rather than blames. Nothing the reader did stopped it, and the one thing that would help - looking at the connection - is offered as a question so that saying no to it costs nothing.";
  arguments_assert(arguments, 1);
  let parts = {
    eng: {
      before:
        "That download did not finish. Would you like to check your connection and try ",
      after: " again?",
    },
    urd: {
      before: "وہ ڈاؤن لوڈ مکمل نہیں ہوا۔ کیا آپ اپنا کنکشن دیکھ کر ",
      after: " دوبارہ آزمانا چاہیں گے؟",
    },
    tgl: {
      before:
        "Hindi natapos ang pag-download na iyon. Gusto mo bang suriin ang iyong koneksyon at subukan muli ang ",
      after: "?",
    },
    spa: {
      before:
        "Esa descarga no terminó. ¿Quieres revisar tu conexión e intentar ",
      after: " de nuevo?",
    },
    por: {
      before:
        "Esse download não terminou. Quer verificar sua conexão e tentar ",
      after: " de novo?",
    },
    ind: {
      before:
        "Unduhan itu belum selesai. Maukah kamu memeriksa koneksimu dan mencoba ",
      after: " lagi?",
    },
    translated_from: {
      urd: {
        before:
          "That download did not finish. Would you like to check your connection and try ",
        after: " again?",
      },
      tgl: {
        before:
          "That download did not finish. Would you like to check your connection and try ",
        after: " again?",
      },
      spa: {
        before:
          "That download did not finish. Would you like to check your connection and try ",
        after: " again?",
      },
      por: {
        before:
          "That download did not finish. Would you like to check your connection and try ",
        after: " again?",
      },
      ind: {
        before:
          "That download did not finish. Would you like to check your connection and try ",
        after: " again?",
      },
    },
  };
  let text = app_shared_text_reader_language_around(parts, name);
  return text;
}
