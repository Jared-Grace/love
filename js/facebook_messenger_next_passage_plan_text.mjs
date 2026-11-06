import { not_equal } from "./not_equal.mjs";
import { facebook_messenger_messages } from "./facebook_messenger_messages.mjs";
import { facebook_messenger_next_link } from "./facebook_messenger_next_link.mjs";
import { messenger_replies_amen_only_is } from "./messenger_replies_amen_only_is.mjs";
import { next_passage_copied } from "./next_passage_copied.mjs";
export async function facebook_messenger_next_passage_plan_text(text) {
  "$plain text";
  "Given the words a messenger conversation shows, whether the next passage should be sent, and if so its words. Send only when your last message is answered by Amen or praying hands alone and a next-passage link was sent; the words are what that link's page copies.";
  let messages = facebook_messenger_messages(text);
  let next_url = facebook_messenger_next_link(messages);
  let amen = messenger_replies_amen_only_is(messages);
  let r = {
    next_url,
    amen,
    send: false,
  };
  if (not_equal(next_url, null) && amen) {
    r.text = await next_passage_copied(next_url);
    r.send = true;
  }
  return r;
}
