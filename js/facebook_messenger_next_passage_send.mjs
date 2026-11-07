import { facebook_messenger_next_passage_send_generic } from "./facebook_messenger_next_passage_send_generic.mjs";
import { messenger_replies_amen_only_is } from "./messenger_replies_amen_only_is.mjs";
export async function facebook_messenger_next_passage_send(thread_url) {
  "$plain thread_url";
  "Once a day: when your last message in the conversation at thread_url has been answered by Amen or praying hands alone, sends the next passage - the words its next-passage link's page copies - and answers what it did. Any other reply, or none yet, sends nothing, so a person answers it.";
  "★ IT IS SAFE TO RUN AGAIN: once sent, your message is the last one and nothing has answered it, so a second run sends nothing.";
  let r = await facebook_messenger_next_passage_send_generic(
    thread_url,
    messenger_replies_amen_only_is,
  );
  return r;
}
