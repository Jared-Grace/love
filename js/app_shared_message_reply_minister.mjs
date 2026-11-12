import { reply_i_am_a } from "./reply_i_am_a.mjs";
import { reply_on_match_blessings } from "./reply_on_match_blessings.mjs";
import { reply_sequence_optional } from "./reply_sequence_optional.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_ministry_work } from "./reply_ministry_work.mjs";
import { reply_titles_preaching } from "./reply_titles_preaching.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function app_shared_message_reply_minister() {
  let titles = reply_titles_preaching();
  let minister_said = reply_i_am_a(titles);
  let ministry = ["your ministry"];
  let minister = reply_on_match_blessings(minister_said, ministry);
  let teaching = ["your ministry", "your teaching"];
  let o_sunday_school = reply_sequence_optional(["sunday", "school"]);
  let title = reply_sequence([o_sunday_school, "teacher"]);
  let teacher_said = reply_i_am_a(title);
  let teacher = reply_on_match_blessings(teacher_said, teaching);
  let work = reply_ministry_work();
  let worship = ["your ministry", "your worship"];
  let choir_title = reply_sequence(["choir", "leader"]);
  let choir_said = reply_i_am_a(choir_title);
  let choir = reply_on_match_blessings(choir_said, worship);
  let ministers = reply_choice([minister, teacher, choir, work]);
  return ministers;
}
