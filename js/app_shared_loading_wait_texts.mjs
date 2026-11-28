import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_loading_wait_texts() {
  arguments_assert(arguments, 0);
  ("The line under the spinner while an app is still coming up, written out in every language an app here speaks to its reader in.");
  ("Kept apart from the asking so it can be asked two ways: by the running app, which knows its reader, and by a page while it is being built, which knows only the language it is being built for.");
  let texts = {
    eng: "One moment, please",
    urd: "ایک لمحہ، براہِ کرم",
    tgl: "Sandali lang po",
    spa: "Un momento, por favor",
    por: "Um momento, por favor",
    ind: "Tunggu sebentar",
    fra: "Un instant, s'il vous plaît",
    translated_from: {
      urd: "One moment, please",
      tgl: "One moment, please",
      spa: "One moment, please",
      por: "One moment, please",
      ind: "One moment, please",
      fra: "One moment, please",
    },
  };
  return texts;
}
