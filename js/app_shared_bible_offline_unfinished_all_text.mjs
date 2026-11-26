import { app_shared_text_reader_language_around } from "./app_shared_text_reader_language_around.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_bible_offline_unfinished_all_text(names) {
  "What the save-them-all button says when some of them did not get there, in the language the reader of this app reads, naming the ones that did not.";
  "The ones that did finish are not listed. What the reader needs is what is still missing, and a list of everything would bury it.";
  arguments_assert(arguments, 1);
  let parts = {
    eng: {
      before: "These did not finish: ",
      after: ". Would you like to check your connection and try them again?",
    },
    urd: {
      before: "یہ مکمل نہیں ہوئیں: ",
      after: "۔ کیا آپ اپنا کنکشن دیکھ کر انہیں دوبارہ آزمانا چاہیں گے؟",
    },
    tgl: {
      before: "Hindi natapos ang mga ito: ",
      after:
        ". Gusto mo bang suriin ang iyong koneksyon at subukan muli ang mga ito?",
    },
    spa: {
      before: "Estos no terminaron: ",
      after: ". ¿Quieres revisar tu conexión e intentarlo de nuevo?",
    },
    por: {
      before: "Estes não terminaram: ",
      after: ". Quer verificar sua conexão e tentar de novo?",
    },
    ind: {
      before: "Ini belum selesai: ",
      after: ". Maukah kamu memeriksa koneksimu dan mencobanya lagi?",
    },
    fra: {
      before: "Ceux-ci n'ont pas fini : ",
      after: ". Voulez-vous vérifier votre connexion et réessayer ?",
    },
    translated_from: {
      urd: {
        before: "These did not finish: ",
        after: ". Would you like to check your connection and try them again?",
      },
      tgl: {
        before: "These did not finish: ",
        after: ". Would you like to check your connection and try them again?",
      },
      spa: {
        before: "These did not finish: ",
        after: ". Would you like to check your connection and try them again?",
      },
      por: {
        before: "These did not finish: ",
        after: ". Would you like to check your connection and try them again?",
      },
      ind: {
        before: "These did not finish: ",
        after: ". Would you like to check your connection and try them again?",
      },
      fra: {
        before: "These did not finish: ",
        after: ". Would you like to check your connection and try them again?",
      },
    },
  };
  let text = app_shared_text_reader_language_around(parts, names);
  return text;
}
