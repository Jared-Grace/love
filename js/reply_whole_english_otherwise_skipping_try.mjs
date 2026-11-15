import { fn_name } from "./fn_name.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { app_shared_message_reply_greeting } from "./app_shared_message_reply_greeting.mjs";
import { reply_betting_ad_unanswered } from "./reply_betting_ad_unanswered.mjs";
import { reply_whole_english_otherwise_skipping } from "./reply_whole_english_otherwise_skipping.mjs";
import { reply_messages_inner } from "./reply_messages_inner.mjs";
export async function reply_whole_english_otherwise_skipping_try(message) {
  ("One message read by the greeting rule and the betting advert rule through ",
    fn_name("reply_whole_english_otherwise_skipping"),
    ": whether it was read, at what cost, and what it answers. A check on the two readings before they join the real rules.");
  let greetings = app_shared_message_reply_greeting();
  let advert = reply_betting_ad_unanswered();
  let pieces = reply_choice([greetings, advert]);
  let whole = reply_whole_english_otherwise_skipping(pieces);
  let result = await reply_messages_inner(message, whole);
  let summary = {
    matches: result.matches,
    cost: result.cost,
    outputs: result.outputs,
  };
  return summary;
}
