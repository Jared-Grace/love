import { reply_on_match_output } from "../../../love/public/src/reply_on_match_output.mjs";
import { prayer_blessing } from "../../../love/public/src/prayer_blessing.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { reply_sequence_optional } from "../../../love/public/src/reply_sequence_optional.mjs";
import { reply_optional } from "../../../love/public/src/reply_optional.mjs";
import { reply_titles_ministry } from "../../../love/public/src/reply_titles_ministry.mjs";
import { reply_phrase_i_am } from "../../../love/public/src/reply_phrase_i_am.mjs";
export function app_message_reply_minister() {
  let iam2 = reply_phrase_i_am();
  let titles2 = reply_titles_ministry();
  let o_n = reply_optional("n");
  let o_a_an = reply_sequence_optional(["a", o_n]);
  let title = reply_sequence([iam2, o_a_an, titles2]);
  let item3 = prayer_blessing("your ministry");
  let minister = reply_on_match_output(title, item3);
  return minister;
}
