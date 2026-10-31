import { less_than } from "./less_than.mjs";
import { facebook_reel_newest_url } from "./facebook_reel_newest_url.mjs";
import { not_equal } from "./not_equal.mjs";
import { sleep } from "./sleep.mjs";
export async function facebook_reel_new_wait(before_url) {
  "$plain before_url";
  "Waits for a reel newer than before_url to show on the reels tab and answers its address. It asks once a minute for up to an hour and a half, because a reel can take a while to show after posting, and throws if none does.";
  "★ WHY AN HOUR AND A HALF: on 2026-10-23 the Psalm 148 reel had not shown after half an hour, yet was on the tab with its picture by 4:49 PM. Runs start at least two hours apart (a timer at 11, 3 and 7 plus a sleep of up to two hours), so the wait plus the post must stay under two hours, or two runs would open the one browser profile at once.";
  "★ ONLY A REEL THAT WAS NOT THERE BEFORE THE POST IS ANSWERED. Songs of one passage open on the same painting and the same words, so the newest reel cannot be told from its sibling by looking; being new is the only sure mark.";
  let tries = 0;
  while (less_than(tries, 90)) {
    let newest = await facebook_reel_newest_url();
    if (not_equal(newest, null) && not_equal(newest, before_url)) {
      return newest;
    }
    await sleep(60000);
    tries = tries + 1;
  }
  throw new Error(
    "no reel newer than " + before_url + " after an hour and a half",
  );
}
