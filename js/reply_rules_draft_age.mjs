import { reply_sequence } from "./reply_sequence.mjs";
import { reply_sequence_optional } from "./reply_sequence_optional.mjs";
import { reply_word_us } from "./reply_word_us.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_phrase_according_to_gods_will } from "./reply_phrase_according_to_gods_will.mjs";
import { reply_on_match_outputs_codes_multiple } from "./reply_on_match_outputs_codes_multiple.mjs";
import { reply_on_match_prayer } from "./reply_on_match_prayer.mjs";
import { reply_prayer_will_done } from "./reply_prayer_will_done.mjs";
import { reply_phrase_you } from "./reply_phrase_you.mjs";
import { reply_choice_output } from "./reply_choice_output.mjs";
import { reply_choices_glory } from "./reply_choices_glory.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { app_shared_message_reply_how_r_u } from "./app_shared_message_reply_how_r_u.mjs";
import { app_shared_message_reply_greeting } from "./app_shared_message_reply_greeting.mjs";
import { app_shared_message_reply_phrases_single } from "./app_shared_message_reply_phrases_single.mjs";
import { app_shared_message_reply_praise_god } from "./app_shared_message_reply_praise_god.mjs";
import { app_shared_message_reply_minister } from "./app_shared_message_reply_minister.mjs";
import { app_shared_message_reply_from_country } from "./app_shared_message_reply_from_country.mjs";
import { app_shared_message_reply_asks } from "./app_shared_message_reply_asks.mjs";
import { reply_contact_address } from "./reply_contact_address.mjs";
import { reply_join_glory } from "./reply_join_glory.mjs";
import { reply_bible_verses } from "./reply_bible_verses.mjs";
import { reply_age_said } from "./reply_age_said.mjs";
import { reply_once_or_more } from "./reply_once_or_more.mjs";
import { reply_cheapest_per_position } from "./reply_cheapest_per_position.mjs";
import { reply_last } from "./reply_last.mjs";
import { reply_outputs_mapped } from "./reply_outputs_mapped.mjs";
import { list_unique } from "./list_unique.mjs";
import { reply_prayers_closed } from "./reply_prayers_closed.mjs";
import { reply_bible_references_closed } from "./reply_bible_references_closed.mjs";
export function reply_rules_draft_age() {
  let fn = reply_sequence_optional(["come", "and"]);
  let r = reply_word_us();
  let item = reply_phrase_according_to_gods_will();
  let fn2 = reply_optional(item);
  let s_visit = reply_sequence([fn, "fellowship", "with", r, fn2]);
  let visit_coded = reply_on_match_outputs_codes_multiple(
    s_visit,
    [],
    ["todo()"],
  );
  let line = reply_prayer_will_done();
  let visit_step = reply_on_match_prayer(visit_coded, line);
  let you = reply_phrase_you();
  let thank_you = reply_sequence(["thank", you]);
  let item2 = reply_choices_glory();
  let thanks = reply_choice_output(["thanks", thank_you], item2);
  let hru = app_shared_message_reply_how_r_u();
  let greetings = app_shared_message_reply_greeting();
  let phrases_single = app_shared_message_reply_phrases_single();
  let fn10 = app_shared_message_reply_praise_god();
  let ministers = app_shared_message_reply_minister();
  let from_country = app_shared_message_reply_from_country();
  let asks = app_shared_message_reply_asks();
  let contact = reply_contact_address();
  let noted = reply_join_glory();
  let verses = reply_bible_verses();
  let said = reply_age_said();
  let choices_main = reply_choice([
    hru,
    greetings,
    phrases_single,
    fn10,
    ministers,
    from_country,
    asks,
    visit_step,
    thanks,
    contact,
    noted,
    verses,
    said,
  ]);
  let item3 = reply_cheapest_per_position(choices_main);
  let room = reply_once_or_more(item3);
  let last = reply_last();
  let with_repeats = reply_sequence([room, last]);
  let said_once = reply_outputs_mapped(with_repeats, list_unique);
  let prayed = reply_prayers_closed(said_once);
  let closed = reply_bible_references_closed(prayed);
  return closed;
}
