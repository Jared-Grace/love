import { prayer_blessing } from "./prayer_blessing.mjs";
import { reply_words } from "./reply_words.mjs";
import { reply_i_am_a_output } from "./reply_i_am_a_output.mjs";
import { reply_word_in } from "./reply_word_in.mjs";
import { reply_countries } from "./reply_countries.mjs";
import { reply_sequence_output } from "./reply_sequence_output.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_minister_choir_work() {
  "Somebody saying they lead a choir, or that they do ministry work in a country. Both get the blessing on their ministry.";
  "★ THESE ARE THE WORDS A REAL MESSAGE USED AND NO OTHERS, WITH ONLY THE COUNTRY OPEN. Other ways of saying this are added when somebody really says them.";
  let blessing = prayer_blessing("your ministry");
  let title = reply_words("choir leader");
  let choir = reply_i_am_a_output(title, blessing);
  let n = reply_word_in();
  let countries = reply_countries();
  let work = reply_sequence_output(
    ["i", "do", "ministry", "work", n, countries],
    blessing,
  );
  let r = reply_choice([choir, work]);
  return r;
}
