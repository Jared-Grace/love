import { arguments_assert } from "./arguments_assert.mjs";
import { reply_phrase_i_am } from "./reply_phrase_i_am.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_prayer_bless_family } from "./reply_prayer_bless_family.mjs";
import { reply_prayer_help_you } from "./reply_prayer_help_you.mjs";
import { reply_prayer_feed_children } from "./reply_prayer_feed_children.mjs";
import { reply_choices_give } from "./reply_choices_give.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { prayer_lines_wrap } from "./prayer_lines_wrap.mjs";
import { reply_on_match_output_multiple } from "./reply_on_match_output_multiple.mjs";
import { reply_any_order } from "./reply_any_order.mjs";
export function app_shared_message_reply_poor_family() {
  arguments_assert(arguments, 0);
  ("Somebody who says all three of these, in any order: they are from a poor family, please help, and their children are hungry or need food. All three are required. The reply is a prayer with one line for each part, in the order they said them, and then the same reply the Give button sends in the reply app. A piece on its own, or anything said beside them that no rule reads, gets no reply and goes to a human.");
  let iam = reply_phrase_i_am();
  let poor_family = reply_sequence([iam, "from", "a", "poor", "family"]);
  let o_me = reply_optional("me");
  let help = reply_sequence(["please", "help", o_me]);
  let are_hungry = reply_sequence(["are", "hungry"]);
  let need_food = reply_sequence(["need", "food"]);
  let lacking = reply_choice([are_hungry, need_food]);
  let children = reply_sequence(["my", "children", lacking]);
  let pieces = [
    {
      said: poor_family,
      line: reply_prayer_bless_family(),
    },
    {
      said: help,
      line: reply_prayer_help_you(),
    },
    {
      said: children,
      line: reply_prayer_feed_children(),
    },
  ];
  let give = reply_choices_give();
  function rule_of(ordering) {
    let said = list_map_property(ordering, "said");
    let lines = list_map_property(ordering, "line");
    let sequence = reply_sequence(said);
    let prayer = prayer_lines_wrap(lines);
    let rule = reply_on_match_output_multiple(sequence, [prayer, give]);
    return rule;
  }
  let poor_family_rule = reply_any_order(pieces, rule_of);
  return poor_family_rule;
}
