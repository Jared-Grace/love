import { ternary } from "../../../love/public/src/ternary.mjs";
import { messenger_reply_messages_message } from "../../../love/public/src/messenger_reply_messages_message.mjs";
import { messenger_reply_messages_name } from "../../../love/public/src/messenger_reply_messages_name.mjs";
import { messenger_reply_messages_me } from "../../../love/public/src/messenger_reply_messages_me.mjs";
import { messenger_reply_wait } from "../../../love/public/src/messenger_reply_wait.mjs";
import { messenger_reply_messages_urls_add } from "../../../love/public/src/messenger_reply_messages_urls_add.mjs";
import { text_empty_is } from "../../../love/public/src/text_empty_is.mjs";
import { text_trim } from "../../../love/public/src/text_trim.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
export async function messenger_reply_messages(page, url) {
  await page.goto(url);
  await messenger_reply_messages_urls_add(url);
  await messenger_reply_wait(page);
  let conversation = await page.$(
    '[aria-label^="Messages in conversation with"]',
  );
  async function lambda6(la) {
    const children = await conversation.$$('[data-virtualized="false"]');
    for (const c of children) {
      const children2 = await c.$$('[role="none"]');
      for (const c2 of children2) {
        function lambda2(node) {
          let v3 = node.parentElement?.tagName;
          return v3;
        }
        const parentTag = await c2.evaluate(lambda2);
        if (parentTag === "H5") {
          continue;
        }
        let message = await c2.evaluate(lambda);
        message = text_trim(message);
        let e = text_empty_is(message);
        if (e) {
          continue;
        }
        function lambda4(imgs) {
          function lambda3(img) {
            let v4 = getComputedStyle(img).borderRadius === "50%";
            return v4;
          }
          function lambda5(img) {
            let v6 = img.src;
            return v6;
          }
          let v5 = imgs.filter(lambda3).map(lambda5);
          return v5;
        }
        const imgs = await c.$$eval("img", lambda4);
        function lambda(node) {
          let v2 = node.textContent;
          return v2;
        }
        let name = null;
        let condition = list_empty_is(imgs);
        let on_true = messenger_reply_messages_me();
        name = ternary(condition, on_true, "them");
        la({
          [messenger_reply_messages_name()]: name,
          [messenger_reply_messages_message()]: message,
        });
      }
    }
  }
  let messages = await list_adder_async(lambda6);
  return messages;
}
