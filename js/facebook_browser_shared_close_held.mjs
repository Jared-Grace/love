import { equal } from "./equal.mjs";
import { facebook_browser_shared_connect_or_null } from "./facebook_browser_shared_connect_or_null.mjs";
export async function facebook_browser_shared_close_held() {
  "Ends the facebook browser left open in the signed-in profile, for every run, and answers whether one was open. The caller holds the profile's lock - so no run is using the browser while it ends.";
  "★ ANYTHING THAT OPENS THE PROFILE ITS OWN WAY CALLS THIS FIRST - a window for a person, a sign-in - because chrome allows one browser per profile.";
  let browser = await facebook_browser_shared_connect_or_null();
  if (equal(browser, null)) {
    return false;
  }
  await browser.close();
  return true;
}
