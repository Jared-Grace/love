import { reply_sequence_optional } from "./reply_sequence_optional.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_ministry_work } from "./reply_ministry_work.mjs";
import { reply_titles_preaching } from "./reply_titles_preaching.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { prayer_blessing } from "./prayer_blessing.mjs";
import { reply_i_am_a_output } from "./reply_i_am_a_output.mjs";
export function app_shared_message_reply_minister() {
  let titles = reply_titles_preaching();
  let item = prayer_blessing("your ministry");
  let minister = reply_i_am_a_output(titles, item);
  let teaching = prayer_blessing("your ministry and teaching");
  let o_sunday_school = reply_sequence_optional(["sunday", "school"]);
  let title = reply_sequence([o_sunday_school, "teacher"]);
  let teacher = reply_i_am_a_output(title, teaching);
  let work = reply_ministry_work();
  let ministers = reply_choice([minister, teacher, work]);
  return ministers;
}
