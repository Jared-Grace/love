import { fn_name } from "./fn_name.mjs";
export function gloss_store_words_read_cases() {
  "One Cebuano word and what each gloss store's chosen reader should make of it.";
  "★ THE WORD IS THE WHOLE TEST, BECAUSE THE TWO READERS AGREE ABOUT EVERY WORD WITHOUT A DASH IN IT. Handed Dios or ang, both readers answer the same thing, so a case built from an ordinary word would pass whichever reader the chooser returned and would prove only that something was returned. panan-aw is a word the Cebuano bible writes and the two readers answer differently about, so the expected reading below is the reader's name spelled out in what it does.";
  "The rows are listed in the order their store names sort, and the gate sorts what it measured the same way, so moving a store up or down the roster is not a failure. A store on the roster with no row here is, and that is the point: the roster's own prose records a store that joined and was silently left out of every sweep, and a store whose reading nobody has chosen should stop the build rather than quietly inherit somebody else's language.";
  let cases = {
    word: "panan-aw",
    reads: [
      {
        store: fn_name("app_ceb_bible_gloss_generate"),
        read: ["panan-aw"],
      },
      {
        store: fn_name("app_en_learn_bible_gloss_urdu_generate"),
        read: ["panan", "aw"],
      },
      {
        store: fn_name("app_original_bible_gloss_generate"),
        read: ["panan", "aw"],
      },
    ],
  };
  return cases;
}
