import { prayer_blessing } from "./prayer_blessing.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_i_am_a_output } from "./reply_i_am_a_output.mjs";
import { app_shared_message_reply_iam_titled_name } from "./app_shared_message_reply_iam_titled_name.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_once_or_more } from "./reply_once_or_more.mjs";
import { reply_last } from "./reply_last.mjs";
export function reply_rules_draft_teacher() {
  let teaching = prayer_blessing("your ministry and teaching");
  let title = reply_sequence(["sunday", "school", "teacher"]);
  let teacher = reply_i_am_a_output(title, teaching);
  let name = app_shared_message_reply_iam_titled_name();
  let piece = reply_choice([teacher, name]);
  let room = reply_once_or_more(piece);
  let last = reply_last();
  let r = reply_sequence([room, last]);
  return r;
}
