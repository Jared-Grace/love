import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep } from "./sleep.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export async function facebook_messenger_thread_read(url) {
  "$plain url";
  "Opens one messenger conversation at url in the signed-in page profile, saves a picture of it, and answers the words the page shows. It reads; it never sends.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let o = await facebook_page_open(url);
  let page = o.page;
  try {
    await sleep(10000);
    let picture = folder_gitignore_join(
      text_combine_multiple([
        fn_name("facebook_messenger_thread_read"),
        ".png",
      ]),
    );
    await page.screenshot({
      path: picture,
    });
    let text = await page.evaluate(
      "(function(){var m=document.querySelector('[role=main]');return (m||document.body).innerText})()",
    );
    let r = {
      picture,
      text,
    };
    return r;
  } finally {
    await o.browser.close();
  }
}
