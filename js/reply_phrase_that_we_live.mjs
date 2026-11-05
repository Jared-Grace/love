import { reply_optional } from "./reply_optional.mjs";
import { reply_phrase_that_we } from "./reply_phrase_that_we.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_word_u_v } from "./reply_word_u_v.mjs";
import { reply_words } from "./reply_words.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_phrase_that_we_live() {
  "So that we might live through him, in the words of 1 John 4:9.";
  let so = reply_optional("so");
  let that_we = reply_phrase_that_we();
  let might = reply_choice(["might", "may"]);
  let r2 = reply_word_u_v("live");
  let r3 = reply_words("have life");
  let live = reply_choice([r2, r3]);
  let through = reply_choice(["through", "by"]);
  let r = reply_sequence([so, that_we, might, live, through, "him"]);
  return r;
}
