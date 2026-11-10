import { fn_name } from "./fn_name.mjs";
import { facebook_page_lock_take } from "./facebook_page_lock_take.mjs";
import { facebook_browser_shared_close_held } from "./facebook_browser_shared_close_held.mjs";
import { youtube_studio_chrome_path } from "./youtube_studio_chrome_path.mjs";
import { facebook_page_user_data_path } from "./facebook_page_user_data_path.mjs";
export async function facebook_page_sign_in() {
  "Opens facebook in the browser profile the page poster uses, and waits until the person has signed in and closed the window.";
  ("★ THE PERSON SIGNS IN, NEVER THE PROGRAM. The same reason as ",
    fn_name("youtube_studio_sign_in"),
    ": a password typed by a program is a password stored where a program can read it.");
  ("★ THE SIGN-IN WINDOW IS PLAIN CHROME WITH NOTHING DRIVING IT, and keeps its passwords in the profile itself, so the driven browser that posts later can read the same sign-in.");
  ("★ IT WAITS ITS TURN AND ENDS THE BROWSER KEPT OPEN IN THE PROFILE FIRST: chrome allows one browser per profile, so a sign-in window beside it would be refused. The turn is held until the window closes.");
  let lock = await facebook_page_lock_take();
  try {
    await facebook_browser_shared_close_held();
  } catch (e) {
    lock.kill();
    throw e;
  }
  let child_process = await import("node:child_process");
  let r3 = youtube_studio_chrome_path();
  let child = child_process.spawn(
    r3,
    [
      "--user-data-dir=" + facebook_page_user_data_path(),
      "--password-store=basic",
      "--no-first-run",
      "https://www.facebook.com/CHRISTrosetolife/",
    ],
    {
      stdio: "ignore",
    },
  );
  let code = await new Promise(function lambda(resolve) {
    let r = child.on("exit", resolve);
    return r;
  });
  lock.kill();
  let r2 = {
    closed: true,
    code,
  };
  return r2;
}
