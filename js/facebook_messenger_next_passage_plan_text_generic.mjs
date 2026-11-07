import { facebook_messenger_messages } from "./facebook_messenger_messages.mjs";
import { facebook_messenger_next_link } from "./facebook_messenger_next_link.mjs";
import { not_equal } from "./not_equal.mjs";
import { next_passage_copied } from "./next_passage_copied.mjs";
export async function facebook_messenger_next_passage_plan_text_generic(
  text,
  ready,
) {
  "Given the words a messenger conversation shows, whether the next passage should be sent, and if so its words. Send only when ready says yes to the conversation's messages and a next-passage link was sent; the words are what that link's page copies.";
  let messages = facebook_messenger_messages(text);
  let next_url = facebook_messenger_next_link(messages);
  let replies_ready = ready(messages);
  let r = {
    next_url,
    ready: replies_ready,
    send: false,
  };
  if (not_equal(next_url, null) && replies_ready) {
    r.text = await next_passage_copied(next_url);
    r.send = true;
  }
  return r;
}
