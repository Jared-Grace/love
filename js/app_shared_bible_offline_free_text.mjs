import { app_shared_text_reader_language_around } from "./app_shared_text_reader_language_around.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_bible_offline_free_text(name) {
  "What the button that gives back the space one saved language is using says, in the language the reader of this app reads.";
  arguments_assert(arguments, 1);
  let parts = {
    eng: {
      before: "Free the space ",
      after: " uses",
    },
    urd: {
      before: "",
      after: " کی جگہ خالی کریں",
    },
    tgl: {
      before: "Bakantehin ang espasyong ginagamit ng ",
      after: "",
    },
    spa: {
      before: "Liberar el espacio que usa ",
      after: "",
    },
    translated_from: {
      urd: {
        before: "Free the space ",
        after: " uses",
      },
      tgl: {
        before: "Free the space ",
        after: " uses",
      },
      spa: {
        before: "Free the space ",
        after: " uses",
      },
    },
  };
  let text = app_shared_text_reader_language_around(parts, name);
  return text;
}
