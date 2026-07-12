import { reply_on_match_output } from "./reply_on_match_output.mjs";
import { prayer_blessing } from "./prayer_blessing.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_sequence_optional } from "./reply_sequence_optional.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_titles_ministry } from "./reply_titles_ministry.mjs";
import { reply_phrase_i_am } from "./reply_phrase_i_am.mjs";
export function app_message_reply_minister() {
  let iam = reply_phrase_i_am();
  let titles = reply_titles_ministry();
  let o_n = reply_optional("n");
  let o_a_an = reply_sequence_optional(["a", o_n]);
  let title = reply_sequence([iam, o_a_an, titles]);
  let item = prayer_blessing("your ministry");
  let minister = reply_on_match_output(title, item);
  return minister;
}
