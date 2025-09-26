import { object_property_set } from "./object_property_set.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
import { string_empty_is } from "./string_empty_is.mjs";
import { string_trim } from "./string_trim.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function messenger_reply_messages(page, url) {
  await page.goto(url);
  let fb_path = folder_user_docs_path("fb.json");
  let data = await file_read_json(fb_path);
  let message_urls = object_property_initialize(data, "message_urls", {});
  object_property_set(object, property_name, value);
  await file_overwrite_json(fb_path, data);
  const s = 'p[dir="auto"]';
  let p = await page.waitForSelector(s, {
    timeout: 10000,
  });
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
        message = string_trim(message);
        let e = string_empty_is(message);
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
        if (list_empty_is(imgs)) {
          name = "me";
        } else {
          name = "them";
        }
        la({
          name,
          message,
        });
      }
    }
  }
  let messages = await list_adder_async(lambda6);
  return messages;
}
