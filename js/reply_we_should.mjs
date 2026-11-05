import { reply_word_love } from "./reply_word_love.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_on_match_bible_reference } from "./reply_on_match_bible_reference.mjs";
import { reply_word_to } from "./reply_word_to.mjs";
import { reply_prayer_will_done } from "./reply_prayer_will_done.mjs";
import { reply_on_match_prayer } from "./reply_on_match_prayer.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_once_or_more } from "./reply_once_or_more.mjs";
import { reply_optional } from "./reply_optional.mjs";
export function reply_we_should() {
  "We should do one thing, or several joined by and. Each thing has its own answer, so a new one is one more choice here and the sentence around it stays.";
  let love = reply_word_love();
  let said_love = reply_sequence([love, "each", "other"]);
  let loved = reply_on_match_bible_reference(said_love, "1JN04", "7", true);
  let to = reply_word_to();
  let connected = reply_sequence(["stay", "connected", to, "each", "other"]);
  let will_done = reply_prayer_will_done();
  let stayed = reply_on_match_prayer(connected, will_done);
  let thing = reply_choice([loved, stayed]);
  let and_thing = reply_sequence(["and", thing]);
  let more = reply_once_or_more(and_thing);
  let o_more = reply_optional(more);
  let o_and = reply_optional("and");
  let o_also = reply_optional("also");
  let should = reply_sequence([o_and, "we", "should", o_also, thing, o_more]);
  return should;
}
