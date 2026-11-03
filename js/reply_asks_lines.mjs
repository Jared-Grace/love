import { arguments_assert } from "./arguments_assert.mjs";
import { reply_prayer_bless_family } from "./reply_prayer_bless_family.mjs";
import { reply_prayer_feed_children } from "./reply_prayer_feed_children.mjs";
import { reply_prayer_provide_ministry } from "./reply_prayer_provide_ministry.mjs";
import { reply_prayer_help_you } from "./reply_prayer_help_you.mjs";
export function reply_asks_lines() {
  arguments_assert(arguments, 0);
  ("The four things a person can ask for and the prayer line each one gets. They are gathered into one prayer when a reply is finished, so this is the list of which lines belong to it.");
  let line = reply_prayer_bless_family();
  let line2 = reply_prayer_feed_children();
  let line3 = reply_prayer_provide_ministry();
  let line4 = reply_prayer_help_you();
  let lines = [line, line2, line3, line4];
  return lines;
}
