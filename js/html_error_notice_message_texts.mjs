import { arguments_assert } from "./arguments_assert.mjs";
export function html_error_notice_message_texts() {
  arguments_assert(arguments, 0);
  ("what the could-not-start notice says, written out in every language an app here speaks to its reader in.");
  ("it says that it did not load and nothing about why. the person reading it did not ask for the app to break and cannot act on a stack of file names; the one who can is told separately, beside it, where this reader will never see it.");
  ("written out in every language rather than picked here, because this is page text baked in while the page is being built - so the language is decided by whoever is building it and handed in, not asked for at the moment of showing. a language this saying has not been written into yet gets the english, which is the same fallback every other saying here makes.");
  let r = {
    en: "Sorry — this didn't finish loading.",
    ur: "معذرت — یہ پوری طرح کھل نہیں سکا۔",
    translated_from: {
      ur: "Sorry — this didn't finish loading.",
    },
  };
  return r;
}
