import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep } from "./sleep.mjs";
import { facebook_messenger_next_passage_plan_text_generic } from "./facebook_messenger_next_passage_plan_text_generic.mjs";
import { facebook_messenger_box_type_send } from "./facebook_messenger_box_type_send.mjs";
import { facebook_messenger_messages } from "./facebook_messenger_messages.mjs";
export async function facebook_messenger_next_passage_send_generic(
  thread_url,
  ready,
) {
  "Once a day: when ready says yes to the messages of the conversation at thread_url, sends the next passage - the words its next-passage link's page copies - and answers what it did. Otherwise it sends nothing, so a person answers it.";
  ("What covers the message box comes back as dialog, and nothing is typed - see ",
    fn_name("facebook_messenger_box_type_send"),
    ".");
  ("It checks afterwards that your last message now begins with the passage's first line, and says sent: false when it does not. Its picture is ",
    fn_name("facebook_messenger_next_passage_send"),
    ".png in gitignore.");
  ("BROWSER-SERIALIZED - do NOT auto-canonicalize");
  let main =
    "(function(){var m=document.querySelector('[role=main]');return (m||document.body).innerText})()";
  let name = text_combine_multiple([
    fn_name("facebook_messenger_next_passage_send"),
    ".png",
  ]);
  let picture = folder_gitignore_join(name);
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
    let dialog = await facebook_messenger_box_type_send(page, r.text, picture);
    if (dialog !== null) {
      r.send = false;
      r.dialog = dialog;
      return r;
    }
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
