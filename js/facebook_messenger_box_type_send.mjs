import { sleep } from "./sleep.mjs";
import { puppeteer_type_lines } from "./puppeteer_type_lines.mjs";
export async function facebook_messenger_box_type_send(page, text, picture) {
  "Types text into the open conversation's message box and presses Enter, then keeps a picture at picture. Answers null when it sent, or what was in the way when it typed nothing.";
  "★ IT TYPES NOTHING UNLESS THE MESSAGE BOX IS ON TOP AND TAKES THE FOCUS, and answers what covers it instead: on 2026-11-07 a PIN prompt covered the chat and took the passage's digits as wrong PINs. It asks what is on top of the box, never whether a dialog exists: the notifications panel is a dialog that sits hidden in every page.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let box_selector = "[role=main] [role=textbox][contenteditable=true]";
  let box = await page.waitForSelector(box_selector);
  let covered =
    "(function(){var b=document.querySelector(" +
    JSON.stringify(box_selector) +
    ");var q=b.getBoundingClientRect();var e=document.elementFromPoint(q.left+q.width/2,q.top+q.height/2);if(e&&b.parentElement.contains(e))return null;var d=e&&e.closest('[role=dialog]');return ((d||e||document.body).innerText||'').trim().slice(0,200)||'covered'})()";
  let dialog = await page.evaluate(covered);
  if (dialog === null) {
    await box.click();
    await sleep(1000);
    let focused = await page.evaluate(
      "(function(){var b=document.querySelector(" +
        JSON.stringify(box_selector) +
        ");return !!b&&b.contains(document.activeElement)})()",
    );
    if (!focused) {
      dialog = "the message box did not take the typing";
    }
  }
  if (dialog !== null) {
    await page.screenshot({
      path: picture,
    });
    return dialog;
  }
  await page.keyboard.down("Control");
  await page.keyboard.press("a");
  await page.keyboard.up("Control");
  await page.keyboard.press("Backspace");
  await puppeteer_type_lines(page, text);
  await sleep(3000);
  await page.keyboard.press("Enter");
  await sleep(15000);
  await page.screenshot({
    path: picture,
  });
  return null;
}
