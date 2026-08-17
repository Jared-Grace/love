import { messenger_reply_messages_lambda6 } from "./messenger_reply_messages_lambda6.mjs";
import { messenger_reply_wait } from "./messenger_reply_wait.mjs";
import { messenger_reply_messages_urls_add } from "./messenger_reply_messages_urls_add.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
export async function messenger_reply_messages(page, url) {
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  await page.goto(url);
  await messenger_reply_messages_urls_add(url);
  await messenger_reply_wait(page);
  let conversation = await page.$(
    '[aria-label^="Messages in conversation with"]',
  );
  async function lambda6(la) {
    let r = await messenger_reply_messages_lambda6(la, conversation);
    return r;
  }
  let messages = await list_adder_async(lambda6);
  return messages;
}
