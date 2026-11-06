import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep } from "./sleep.mjs";
import { facebook_messenger_next_passage_plan_text } from "./facebook_messenger_next_passage_plan_text.mjs";
import { puppeteer_type_lines } from "./puppeteer_type_lines.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { facebook_messenger_messages } from "./facebook_messenger_messages.mjs";
export async function facebook_messenger_next_passage_send(thread_url) {
  "$plain thread_url";
  "Once a day: when your last message in the conversation at thread_url has been answered by Amen or praying hands alone, sends the next passage - the words its next-passage link's page copies - and answers what it did. Any other reply, or none yet, sends nothing, so a person answers it.";
  "★ IT IS SAFE TO RUN AGAIN: once sent, your message is the last one and nothing has answered it, so a second run sends nothing.";
  "It checks afterwards that your last message now begins with the passage's first line, and says sent: false when it does not.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let main =
    "(function(){var m=document.querySelector('[role=main]');return (m||document.body).innerText})()";
  let o = await facebook_page_open(thread_url);
  let page = o.page;
  try {
    await sleep(10000);
    let before = await page.evaluate(main);
    let r = await facebook_messenger_next_passage_plan_text(before);
    if (!r.send) {
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
    let name = text_combine_multiple([
      fn_name("facebook_messenger_next_passage_send"),
      ".png",
    ]);
    await page.screenshot({
      path: folder_gitignore_join(name),
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
