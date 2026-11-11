import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { facebook_posted_history_read } from "./facebook_posted_history_read.mjs";
export async function facebook_bible_sermon_today_problem() {
  arguments_assert(arguments, 0);
  ("Answers what is wrong with today's facebook sermon post, read from the history of posts: no sermon written today, or one written without its link. Answers null when today's sermon is there with its link.");
  ("★ TODAY IS THIS MACHINE'S DAY, not the UTC day: the sermon runs at two in the afternoon here, and a history line's time is UTC, so each is turned into the local date before they are compared.");
  let history = await facebook_posted_history_read();
  function day(when) {
    let d = new Date(when).toLocaleDateString("en-CA");
    return d;
  }
  let now = date_now_milliseconds();
  let today = day(now);
  function lambda(line) {
    let r =
      equal(line.kind, "sermon") &&
      not(line.link_filled) &&
      equal(day(line.written_at), today);
    return r;
  }
  let todays = history.filter(lambda);
  if (equal(todays.length, 0)) {
    let r2 =
      "No sermon was posted to facebook today (" +
      today +
      "). See /home/j/a/user/facebook_post.log";
    return r2;
  }
  let last = todays[subtract(todays.length, 1)];
  if (equal(last.url, null)) {
    let r3 =
      "Today's sermon " +
      last.chapter_code +
      " " +
      last.verses_key +
      " was posted but its link was not found. See /home/j/a/user/facebook_post.log";
    return r3;
  }
  return null;
}
