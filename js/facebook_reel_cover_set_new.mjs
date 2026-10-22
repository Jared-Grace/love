import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { facebook_reel_newest_url } from "./facebook_reel_newest_url.mjs";
import { facebook_reel_cover_set } from "./facebook_reel_cover_set.mjs";
import { sleep } from "./sleep.mjs";
export async function facebook_reel_cover_set_new(before_url, picture_path) {
  "$plain before_url";
  "$plain picture_path";
  "Waits for a reel newer than before_url to show on the reels tab, then sets that reel's cover to the picture at picture_path, and answers the reel's address with the cover's steps. It asks once a minute for up to half an hour, because a reel can take a while to show after posting, and throws if none does.";
  "★ IT ONLY EVER TOUCHES A REEL THAT WAS NOT THERE BEFORE THE POST. Songs of one passage open on the same painting and the same words, so the newest reel cannot be told from its sibling by looking; being new is the only sure mark.";
  let tries = 0;
  while (less_than(tries, 30)) {
    let newest = await facebook_reel_newest_url();
    if (not_equal(newest, null) && not_equal(newest, before_url)) {
      let r = await facebook_reel_cover_set(newest, picture_path);
      return r;
    }
    await sleep(60000);
    tries = tries + 1;
  }
  throw new Error("no reel newer than " + before_url + " after half an hour");
}
