import { reply_phrase_love_shown } from "./reply_phrase_love_shown.mjs";
import { reply_phrase_god_sent_his_son } from "./reply_phrase_god_sent_his_son.mjs";
import { reply_phrase_that_we_live } from "./reply_phrase_that_we_live.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_bible_verse_whole } from "./reply_bible_verse_whole.mjs";
export function reply_bible_1jn_4_9() {
  "1 John 4:9 said whole, in three whole phrases, each as an English Bible nobody owns words it.";
  let love = reply_phrase_love_shown();
  let sent = reply_phrase_god_sent_his_son();
  let live = reply_phrase_that_we_live();
  let read = reply_sequence([love, sent, live]);
  let r = reply_bible_verse_whole("1JN04", "9", read);
  return r;
}
