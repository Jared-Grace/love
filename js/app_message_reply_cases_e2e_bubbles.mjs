import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { json_to } from "./json_to.mjs";
import { range } from "./range.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
export async function app_message_reply_cases_e2e_bubbles(page, count) {
  "the lines in each reply bubble the message app has drawn, in the order the messages were written - waiting first until there are as many reply bubbles as messages and none of them still says it is loading.";
  "A reply the rules gave is drawn as one line per output; the received note is drawn as the bubble's own text, so a bubble with no lines inside it is read as one line of its own.";
  "Only text is handed to the browser, never a function, so nothing here is changed by the canonicalizer.";
  arguments_assert(arguments, 2);
  let selector = 'div[style*="width: 80%"][style*="margin-right: auto"]';
  let json = json_to(selector);
  let condition = text_combine_multiple([
    "document.querySelectorAll(",
    json,
    ").length === ",
    count,
    ' && !document.body.innerText.includes("(Loading...)")',
  ]);
  await page.waitForFunction(condition, null, {
    timeout: 180000,
  });
  let bubbles = page.locator(selector);
  let n = await bubbles.count();
  let result = [];
  for (let i of range(n)) {
    let bubble = bubbles.nth(i);
    let lines = await bubble.locator(":scope > div").allTextContents();
    if (list_empty_is(lines)) {
      let text = await bubble.textContent();
      lines = [text];
    }
    list_add(result, lines);
  }
  return result;
}
