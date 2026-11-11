import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep_human_pace } from "./sleep_human_pace.mjs";
import { facebook_messenger_row_open } from "./facebook_messenger_row_open.mjs";
export async function facebook_messenger_box_probe(id) {
  "$plain id";
  "Opens messenger conversation number id and types nothing: answers every typing box on the page - its role, whether it is editable, its label, whether it sits inside the main pane - plus the start of any dialog showing, and keeps a picture of the screen in the private folder. For finding out why a sender found no message box.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let o = await facebook_page_open("https://www.facebook.com/messages/");
  let page = o.page;
  try {
    await sleep_human_pace();
    let clicked = await facebook_messenger_row_open(page, id);
    await sleep_human_pace();
    await sleep_human_pace();
    let boxes = await page.evaluate(
      "(function(){var m=document.querySelector('[role=main]');return Array.from(document.querySelectorAll('[contenteditable],[role=textbox],textarea')).map(function(e){var q=e.getBoundingClientRect();return {tag:e.tagName,role:e.getAttribute('role'),editable:e.getAttribute('contenteditable'),label:e.getAttribute('aria-label'),placeholder:e.getAttribute('aria-placeholder')||e.getAttribute('placeholder'),in_main:!!m&&m.contains(e),shown:q.width>0&&q.height>0}})})()",
    );
    let dialogs = await page.evaluate(
      "(function(){return Array.from(document.querySelectorAll('[role=dialog],[role=alertdialog]')).filter(function(d){var q=d.getBoundingClientRect();return q.width>0&&q.height>0}).map(function(d){return (d.getAttribute('aria-label')||'')+' | '+(d.innerText||'').trim().slice(0,200)})})()",
    );
    let picture = text_combine_multiple([
      "/home/j/private/",
      fn_name("facebook_messenger_box_probe"),
      ".png",
    ]);
    await page.screenshot({
      path: picture,
    });
    let r = {
      id,
      clicked,
      boxes,
      dialogs,
      picture,
    };
    return r;
  } finally {
    await o.browser.close();
  }
}
