import { fn_name } from "./fn_name.mjs";
import { reply_betting_ad_unanswered } from "./reply_betting_ad_unanswered.mjs";
import { reply_non_english_skipped } from "./reply_non_english_skipped.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_once_or_more } from "./reply_once_or_more.mjs";
import { reply_last } from "./reply_last.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_messages_inner } from "./reply_messages_inner.mjs";
export async function reply_non_english_skipped_betting_try(message) {
  ("One message read by the betting advert rule with foreign stretches allowed around it, and nothing else: the reading, its cost, and where it got to. A check on ",
    fn_name("reply_non_english_skipped"),
    " before it joins the real rules.");
  let advert = reply_betting_ad_unanswered();
  let fn = reply_non_english_skipped();
  let pieces = reply_choice([advert, fn]);
  let room = reply_once_or_more(pieces);
  let last = reply_last();
  let whole = reply_sequence([room, last]);
  let result = await reply_messages_inner(message, whole);
  let summary = {
    matches: result.matches,
    cost: result.cost,
    outputs: result.outputs,
  };
  return summary;
}
