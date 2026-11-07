import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep } from "./sleep.mjs";
import { facebook_messenger_next_passage_plan_text_generic } from "./facebook_messenger_next_passage_plan_text_generic.mjs";
import { puppeteer_type_lines } from "./puppeteer_type_lines.mjs";
import { facebook_messenger_messages } from "./facebook_messenger_messages.mjs";
export async function facebook_messenger_next_passage_send_generic(
  thread_url,
  ready,
) {
  "Once a day: when ready says yes to the messages of the conversation at thread_url, sends the next passage - the words its next-passage link's page copies - and answers what it did. Otherwise it sends nothing, so a person answers it.";
  "★ IT TYPES NOTHING WHILE ANY DIALOG IS OPEN, and answers the dialog's words instead: on 2026-11-07 a PIN prompt covered the chat and took the passage's digits as wrong PINs.";
  ("It checks afterwards that your last message now begins with the passage's first line, and says sent: false when it does not. Its picture is ",
    fn_name("facebook_messenger_next_passage_send"),
    ".png in gitignore.");
  ("BROWSER-SERIALIZED - do NOT auto-canonicalize");
  let main =
    "(function(){var m=document.querySelector('[role=main]');return (m||document.body).innerText})()";
  let picture = folder_gitignore_join(
    text_combine_multiple([
      fn_name("facebook_messenger_next_passage_send"),
      ".png",
    ]),
  );
  let o = await facebook_page_open(thread_url);
  let page = o.page;
  try {
    await sleep(10000);
    let before = await page.evaluate(main);
    let r = await facebook_messenger_next_passage_plan_text_generic(
      before,
      ready,
    );
    if (!r.send) {
      return r;
    }
    let dialog = await page.evaluate(
      "(function(){var d=document.querySelector('[role=dialog]');return d?(d.innerText||'').trim().slice(0,200):null})()",
    );
    if (dialog !== null) {
      await page.screenshot({
        path: picture,
      });
      r.send = false;
      r.dialog = dialog;
      return r;
    }
    let box = await page.waitForSelector(
      "[role=main] [role=textbox][contenteditable=true]",
    );
    await box.click();
    await sleep(1000);
    await page.keyboard.down("Control");
    await page.keyboard.press("a");
    await page.keyboard.up("Control");
    await page.keyboard.press("Backspace");
    await puppeteer_type_lines(page, r.text);
    await sleep(3000);
    await page.keyboard.press("Enter");
    await sleep(15000);
    await page.screenshot({
      path: picture,
    });
    let after = await page.evaluate(main);
    let messages = facebook_messenger_messages(after);
    function lambda(m) {
      let r2 = m.from === "You";
      return r2;
    }
    let mine = messages.filter(lambda);
    let heading = r.text.split("\n")[0];
    r.sent = mine.length > 0 && mine[mine.length - 1].text.startsWith(heading);
    return r;
  } finally {
    await o.browser.close();
  }
}
