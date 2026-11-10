import { not_equal } from "./not_equal.mjs";
import { less_than } from "./less_than.mjs";
import { facebook_browser_shared_connect_or_null } from "./facebook_browser_shared_connect_or_null.mjs";
import { facebook_page_user_data_path } from "./facebook_page_user_data_path.mjs";
import { youtube_studio_chrome_path } from "./youtube_studio_chrome_path.mjs";
import { sleep } from "./sleep.mjs";
export async function facebook_browser_shared_attach() {
  "Attaches to the facebook browser left open in the signed-in profile, starting it with no window first when none is open, and answers it. The browser outlives this run: detach from it, never close it, unless it should end for everyone. The caller holds the profile's lock.";
  "★ ONE BROWSER FOR EVERY RUN, BECAUSE CHROME ALLOWS ONE PER PROFILE: a run that started its own while another was open would be refused, lock or no lock. So the lock decides whose turn it is, and every turn attaches to the same browser.";
  "★ STARTED APART FROM THIS PROCESS (detached), because a browser puppeteer launches is killed when the launching process exits - and the point is that it stays.";
  "★ THE SAME FLAGS PUPPETEER WOULD HAVE USED, from its own defaultArgs, less --enable-automation as before: --password-store=basic among them is what lets this browser read the sign-in the sign-in window saved.";
  let open = await facebook_browser_shared_connect_or_null();
  if (not_equal(open, null)) {
    return open;
  }
  let puppeteer = await import("puppeteer");
  let child_process = await import("node:child_process");
  function lambda(a) {
    let r = not_equal(a, "--enable-automation") && not_equal(a, "about:blank");
    return r;
  }
  let args = puppeteer
    .defaultArgs({
      headless: true,
      userDataDir: facebook_page_user_data_path(),
    })
    .filter(lambda);
  args.push("--remote-debugging-port=0");
  args.push("--window-size=1400,1000");
  let r2 = youtube_studio_chrome_path();
  let child = child_process.spawn(r2, args, {
    detached: true,
    stdio: "ignore",
  });
  child.unref();
  for (let step = 0; less_than(step, 120); step++) {
    await sleep(500);
    let browser = await facebook_browser_shared_connect_or_null();
    if (not_equal(browser, null)) {
      return browser;
    }
  }
  throw new Error(
    "the shared facebook browser did not start within a minute: it never said which port it listens on",
  );
}
