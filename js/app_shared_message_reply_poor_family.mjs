import { arguments_assert } from "./arguments_assert.mjs";
import { reply_phrase_i_am } from "./reply_phrase_i_am.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_any_order } from "./reply_any_order.mjs";
import { reply_choices_give } from "./reply_choices_give.mjs";
import { reply_on_match_output } from "./reply_on_match_output.mjs";
export function app_shared_message_reply_poor_family() {
  arguments_assert(arguments, 0);
  ("Somebody who says all three of these, in any order: they are from a poor family, please help, and their children are hungry or need food. All three are required. A piece on its own, or anything said beside them that no rule reads, gets no reply and goes to a human.");
  let iam = reply_phrase_i_am();
  let poor_family = reply_sequence([iam, "from", "a", "poor", "family"]);
  let o_me = reply_optional("me");
  let help = reply_sequence(["please", "help", o_me]);
  let are_hungry = reply_sequence(["are", "hungry"]);
  let need_food = reply_sequence(["need", "food"]);
  let lacking = reply_choice([are_hungry, need_food]);
  let children = reply_sequence(["my", "children", lacking]);
  let any_order = reply_any_order([poor_family, help, children]);
  let item = reply_choices_give();
  let poor_family_rule = reply_on_match_output(any_order, item);
  return poor_family_rule;
}
