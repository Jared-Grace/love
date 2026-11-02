import { reply_titles_preaching } from "./reply_titles_preaching.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { prayer_blessing } from "./prayer_blessing.mjs";
import { reply_i_am_a_output } from "./reply_i_am_a_output.mjs";
export function app_shared_message_reply_minister() {
  let titles = reply_titles_preaching();
  let item = prayer_blessing("your ministry");
  let minister = reply_i_am_a_output(titles, item);
  let teaching = prayer_blessing("your ministry and teaching");
  let teacher = reply_i_am_a_output("teacher", teaching);
  let ministers = reply_choice([minister, teacher]);
  return ministers;
}
