import { reply_titles_ministry } from "./reply_titles_ministry.mjs";
import { prayer_blessing } from "./prayer_blessing.mjs";
import { reply_i_am_a_output } from "./reply_i_am_a_output.mjs";
export function app_shared_message_reply_minister() {
  let titles = reply_titles_ministry();
  let item = prayer_blessing("your ministry");
  let minister = reply_i_am_a_output(titles, item);
  return minister;
}
