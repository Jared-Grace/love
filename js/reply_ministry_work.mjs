import { prayer_blessing } from "./prayer_blessing.mjs";
import { reply_word_in } from "./reply_word_in.mjs";
import { reply_countries } from "./reply_countries.mjs";
import { reply_sequence_output } from "./reply_sequence_output.mjs";
export function reply_ministry_work() {
  "Somebody saying they do ministry work in a country. It gets the blessing on their ministry.";
  "★ THESE ARE THE WORDS A REAL MESSAGE USED AND NO OTHERS, WITH ONLY THE COUNTRY OPEN. Other ways of saying this are added when somebody really says them.";
  let blessing = prayer_blessing("your ministry");
  let n = reply_word_in();
  let countries = reply_countries();
  let work = reply_sequence_output(
    ["i", "do", "ministry", "work", n, countries],
    blessing,
  );
  return work;
}
