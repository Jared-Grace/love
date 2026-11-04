import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { facebook_post_url_find } from "./facebook_post_url_find.mjs";
import { sleep } from "./sleep.mjs";
export async function facebook_post_url_wait(heading) {
  "$plain heading";
  "Waits for a post whose words begin with heading to show on the profile and answers its address. It asks once a minute for up to half an hour, then throws.";
  let tries = 0;
  while (less_than(tries, 30)) {
    let url = await facebook_post_url_find(heading);
    if (not_equal(url, null)) {
      return url;
    }
    await sleep(60000);
    tries = tries + 1;
  }
  throw new Error("no post beginning '" + heading + "' after half an hour");
}
