import { app_shared_bible_offline_arrow_text } from "./app_shared_bible_offline_arrow_text.mjs";
import { app_shared_text_reader_language_around } from "./app_shared_text_reader_language_around.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_bible_offline_save_all_text(size) {
  "What the one button that keeps every chosen language on this device says, in the language the reader of this app reads, with how many that is.";
  "The count is said rather than left out, because somebody who chose six is being told this one press covers all six.";
  arguments_assert(arguments, 1);
  let parts = {
    eng: {
      before: " Save all ",
      after: " of them",
    },
    urd: {
      before: " سبھی ",
      after: " محفوظ کریں",
    },
    tgl: {
      before: " I-save ang lahat ng ",
      after: "",
    },
    spa: {
      before: " Guardar los ",
      after: "",
    },
    por: {
      before: " Guardar todos os ",
      after: "",
    },
    ind: {
      before: " Simpan semua (",
      after: ")",
    },
    fra: {
      before: " Tout enregistrer (",
      after: ")",
    },
    translated_from: {
      urd: {
        before: " Save all ",
        after: " of them",
      },
      tgl: {
        before: " Save all ",
        after: " of them",
      },
      spa: {
        before: " Save all ",
        after: " of them",
      },
      por: {
        before: " Save all ",
        after: " of them",
      },
      ind: {
        before: " Save all ",
        after: " of them",
      },
      fra: {
        before: " Save all ",
        after: " of them",
      },
    },
  };
  let words = app_shared_text_reader_language_around(parts, size);
  let text = app_shared_bible_offline_arrow_text(words);
  return text;
}
