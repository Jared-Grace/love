import { reply_great_day_thanked } from "./reply_great_day_thanked.mjs";
import { reply_pieces_counted } from "./reply_pieces_counted.mjs";
import { reply_cheapest_per_position_fewest_pieces } from "./reply_cheapest_per_position_fewest_pieces.mjs";
import { reply_friend_list_full } from "./reply_friend_list_full.mjs";
import { reply_god_bless_you_thanked } from "./reply_god_bless_you_thanked.mjs";
import { reply_amen_said } from "./reply_amen_said.mjs";
import { reply_tiktok_link } from "./reply_tiktok_link.mjs";
import { reply_meeting_blessed } from "./reply_meeting_blessed.mjs";
import { app_shared_message_reply_iam_titled_name } from "./app_shared_message_reply_iam_titled_name.mjs";
import { reply_pray_for_me } from "./reply_pray_for_me.mjs";
import { reply_we_should } from "./reply_we_should.mjs";
import { reply_age_said } from "./reply_age_said.mjs";
import { reply_bible_verses } from "./reply_bible_verses.mjs";
import { reply_bible_references_closed } from "./reply_bible_references_closed.mjs";
import { reply_join_glory } from "./reply_join_glory.mjs";
import { reply_contact_address } from "./reply_contact_address.mjs";
import { app_shared_message_reply_asks } from "./app_shared_message_reply_asks.mjs";
import { reply_on_match_outputs_codes_multiple } from "./reply_on_match_outputs_codes_multiple.mjs";
import { reply_prayer_will_done } from "./reply_prayer_will_done.mjs";
import { reply_on_match_prayer } from "./reply_on_match_prayer.mjs";
import { reply_prayers_closed } from "./reply_prayers_closed.mjs";
import { reply_outputs_mapped } from "./reply_outputs_mapped.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_shared_message_reply_greeting } from "./app_shared_message_reply_greeting.mjs";
import { app_shared_message_reply_how_r_u } from "./app_shared_message_reply_how_r_u.mjs";
import { app_shared_message_reply_phrases_single } from "./app_shared_message_reply_phrases_single.mjs";
import { app_shared_message_reply_praise_god } from "./app_shared_message_reply_praise_god.mjs";
import { app_shared_message_reply_minister } from "./app_shared_message_reply_minister.mjs";
import { app_shared_message_reply_from_country } from "./app_shared_message_reply_from_country.mjs";
import { reply_phrase_according_to_gods_will } from "./reply_phrase_according_to_gods_will.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_sequence_optional } from "./reply_sequence_optional.mjs";
import { reply_word_us } from "./reply_word_us.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_phrase_you } from "./reply_phrase_you.mjs";
import { reply_choices_glory } from "./reply_choices_glory.mjs";
import { reply_choice_output } from "./reply_choice_output.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_once_or_more } from "./reply_once_or_more.mjs";
import { reply_last } from "./reply_last.mjs";
export function app_shared_message_reply_choices() {
  let greeting = app_shared_message_reply_greeting();
  let hru = app_shared_message_reply_how_r_u();
  let phrases_single = app_shared_message_reply_phrases_single();
  let praise_god = app_shared_message_reply_praise_god();
  let minister = app_shared_message_reply_minister();
  let from_city_country = app_shared_message_reply_from_country();
  let asks = app_shared_message_reply_asks();
  let according_to_gods_will = reply_phrase_according_to_gods_will();
  let o_according_to_gods_will = reply_optional(according_to_gods_will);
  let o_come_and = reply_sequence_optional(["come", "and"]);
  let us = reply_word_us();
  let s_visit = reply_sequence([
    o_come_and,
    "fellowship",
    "with",
    us,
    o_according_to_gods_will,
  ]);
  let visit_coded = reply_on_match_outputs_codes_multiple(
    s_visit,
    [],
    ["todo()"],
  );
  let will_done = reply_prayer_will_done();
  let visit_step = reply_on_match_prayer(visit_coded, will_done);
  let you = reply_phrase_you();
  let thank_you = reply_sequence(["thank", you]);
  let item = reply_choices_glory();
  let thanks = reply_choice_output(["thanks", thank_you], item);
  let fn = reply_contact_address();
  let join = reply_join_glory();
  let verses = reply_bible_verses();
  let pray_for_me = reply_pray_for_me();
  let we_should = reply_we_should();
  let age = reply_age_said();
  let amen = reply_amen_said();
  let name_alone = app_shared_message_reply_iam_titled_name();
  let blessed_back = reply_god_bless_you_thanked();
  let meeting = reply_meeting_blessed();
  let tiktok = reply_tiktok_link();
  let great_day = reply_great_day_thanked();
  let friend_list = reply_friend_list_full();
  let choices_main = reply_choice([
    hru,
    greeting,
    phrases_single,
    praise_god,
    minister,
    from_city_country,
    asks,
    visit_step,
    thanks,
    fn,
    join,
    verses,
    pray_for_me,
    we_should,
    age,
    amen,
    name_alone,
    blessed_back,
    meeting,
    tiktok,
    great_day,
    friend_list,
  ]);
  let counted = reply_pieces_counted(choices_main);
  let choices_cheapest = reply_cheapest_per_position_fewest_pieces(counted);
  let room = reply_once_or_more(choices_cheapest);
  let last = reply_last();
  let read_whole = reply_sequence([room, last]);
  let with_repeats = reply_cheapest_per_position_fewest_pieces(read_whole);
  let said_once = reply_outputs_mapped(with_repeats, list_unique);
  let prayed = reply_prayers_closed(said_once);
  let r = reply_bible_references_closed(prayed);
  return r;
}
