import { reply_appeal_details } from "./reply_appeal_details.mjs";
import { reply_appeal_help_needed } from "./reply_appeal_help_needed.mjs";
import { reply_appeal_more } from "./reply_appeal_more.mjs";
import { reply_any_order_required } from "./reply_any_order_required.mjs";
import { reply_appeal_intro } from "./reply_appeal_intro.mjs";
import { reply_once_or_more_optional } from "./reply_once_or_more_optional.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { reply_phrase_i_am } from "./reply_phrase_i_am.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_word_us } from "./reply_word_us.mjs";
import { reply_phrase_you } from "./reply_phrase_you.mjs";
import { reply_word_to } from "./reply_word_to.mjs";
import { reply_word_in } from "./reply_word_in.mjs";
import { reply_phrase_according_to_gods_will } from "./reply_phrase_according_to_gods_will.mjs";
import { reply_prayer_bless_family } from "./reply_prayer_bless_family.mjs";
import { reply_on_match_prayer } from "./reply_on_match_prayer.mjs";
import { reply_prayer_feed_children } from "./reply_prayer_feed_children.mjs";
import { reply_prayer_provide_ministry } from "./reply_prayer_provide_ministry.mjs";
import { reply_response_nothing_to_give } from "./reply_response_nothing_to_give.mjs";
import { reply_on_match_output } from "./reply_on_match_output.mjs";
import { reply_prayer_will_done } from "./reply_prayer_will_done.mjs";
import { reply_prayer_lead_provider } from "./reply_prayer_lead_provider.mjs";
import { reply_prayer_help_you } from "./reply_prayer_help_you.mjs";
export function app_shared_message_reply_asks() {
  arguments_assert(arguments, 0);
  ("One thing somebody asks for: they are from a poor family, their children are hungry or need food, or they ask for support in ministry. Asking for help may come before it, after it, or both.");
  ("★ ASKING FOR HELP NEVER STANDS ALONE. Please help on its own says nothing about what is needed, so it only counts beside one of the three things it could be about.");
  ("Saying several of these is handled by the rules around this one, which repeat. Each match only notes its prayer line, with the two lines every giving prayer holds: God's will, and being led to somebody who can give. The lines become one prayer that closes the reply, once the whole message is read.");
  let iam = reply_phrase_i_am();
  let poor_family = reply_sequence([iam, "from", "a", "poor", "family"]);
  let are_hungry = reply_sequence(["are", "hungry"]);
  let need_food = reply_sequence(["need", "food"]);
  let lacking = reply_choice([are_hungry, need_food]);
  let children = reply_sequence(["my", "children", lacking]);
  let o_ing = reply_optional("ing");
  let requesting = reply_sequence(["request", o_ing]);
  let item = reply_word_us();
  let o_us = reply_optional(item);
  let you = reply_phrase_you();
  let to = reply_word_to();
  let v = reply_word_in();
  let according_to_gods_will = reply_phrase_according_to_gods_will();
  let ministry = reply_sequence([
    iam,
    requesting,
    you,
    to,
    "support",
    o_us,
    v,
    "ministry",
    according_to_gods_will,
  ]);
  let output = reply_prayer_bless_family();
  let fn = reply_on_match_prayer(poor_family, output);
  let output2 = reply_prayer_feed_children();
  let fn2 = reply_on_match_prayer(children, output2);
  let output3 = reply_prayer_provide_ministry();
  let fn3 = reply_on_match_prayer(ministry, output3);
  let details = reply_appeal_details();
  let items_said = reply_choice([fn, fn2, fn3, details]);
  let give_line = reply_response_nothing_to_give();
  let items_told = reply_on_match_output(items_said, give_line);
  let will_done = reply_prayer_will_done();
  let will_noted = reply_on_match_prayer(items_told, will_done);
  let lead_provider = reply_prayer_lead_provider();
  let items = reply_on_match_prayer(will_noted, lead_provider);
  let me_or_us = reply_choice(["me", "us"]);
  let o_me_or_us = reply_optional(me_or_us);
  let please_help = reply_sequence(["please", "help", o_me_or_us]);
  let help_needed = reply_appeal_help_needed();
  let help = reply_choice([please_help, help_needed]);
  let output4 = reply_prayer_help_you();
  let help_said = reply_on_match_prayer(help, output4);
  let more = reply_appeal_more();
  let told = reply_choice([help_said, more]);
  let told_and_items = reply_any_order_required(items, told);
  let intro = reply_appeal_intro();
  let o_intros = reply_once_or_more_optional(intro);
  let asks = reply_sequence([o_intros, told_and_items]);
  return asks;
}
