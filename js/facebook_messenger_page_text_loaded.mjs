import { facebook_messenger_messages } from "./facebook_messenger_messages.mjs";
import { sleep } from "./sleep.mjs";
export async function facebook_messenger_page_text_loaded(page, picture) {
  "The words the messenger conversation open on page shows, once at least one message has shown - or null, with a picture saved at picture, when none shows within about a minute.";
  "★ AN EMPTY PAGE IS NOT AN ANSWERED CHAT: on 2026-11-20 both 10 AM daily-verse runs read no link and no replies, and sent nothing silently. It never scrolls - scrolled up, newer replies can leave the page and read as silence.";
  let main =
    "(function(){var m=document.querySelector('[role=main]');return (m||document.body).innerText})()";
  for (let attempt = 0; attempt < 12; attempt++) {
    let text = await page.evaluate(main);
    if (facebook_messenger_messages(text).length > 0) {
      return text;
    }
    await sleep(5000);
  }
  await page.screenshot({
    path: picture,
  });
  return null;
}
