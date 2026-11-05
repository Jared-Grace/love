import { reply_choice } from "./reply_choice.mjs";
import { reply_word_u_v } from "./reply_word_u_v.mjs";
export function reply_word_s_eth(word) {
  "A doing word and its two endings: love, loves, loveth; know, knows, knoweth. Each comes out as a whole word, so each keeps its own allowance of typing mistakes.";
  let eth = word.endsWith("e") ? `${word}th` : `${word}eth`;
  let r2 = reply_word_u_v(word);
  let r3 = reply_word_u_v(`${word}s`);
  let r4 = reply_word_u_v(eth);
  let r = reply_choice([r2, r3, r4]);
  return r;
}
