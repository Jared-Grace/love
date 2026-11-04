import { reply_word_to } from "./reply_word_to.mjs";
import { reply_word_god } from "./reply_word_god.mjs";
import { reply_choices_glory } from "./reply_choices_glory.mjs";
import { reply_sequence_output } from "./reply_sequence_output.mjs";
import { reply_prayer_will_done } from "./reply_prayer_will_done.mjs";
import { reply_on_match_prayer } from "./reply_on_match_prayer.mjs";
export function reply_join_glory() {
  "Somebody saying they want others to join them so that together they can bring glory to God. It gets Glory to God back, and the will of God is prayed for in the prayer that closes the reply.";
  "★ THESE ARE THE WORDS A REAL MESSAGE USED AND NO OTHERS. Other ways of saying this are added when somebody really says them, not guessed at here.";
  let to = reply_word_to();
  let god = reply_word_god();
  let words = [
    "i",
    "want",
    "others",
    to,
    "join",
    "me",
    "so",
    "that",
    "together",
    "we",
    "can",
    "bring",
    "glory",
    to,
    god,
  ];
  let glory = reply_choices_glory();
  let said = reply_sequence_output(words, glory);
  let will_done = reply_prayer_will_done();
  let noted = reply_on_match_prayer(said, will_done);
  return noted;
}
