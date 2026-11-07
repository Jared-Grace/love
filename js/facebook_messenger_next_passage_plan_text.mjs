import { facebook_messenger_next_passage_plan_text_generic } from "./facebook_messenger_next_passage_plan_text_generic.mjs";
import { messenger_replies_amen_only_is } from "./messenger_replies_amen_only_is.mjs";
export async function facebook_messenger_next_passage_plan_text(text) {
  "$plain text";
  "Given the words a messenger conversation shows, whether the next passage should be sent, and if so its words. Send only when your last message is answered by Amen or praying hands alone and a next-passage link was sent; the words are what that link's page copies.";
  let r = await facebook_messenger_next_passage_plan_text_generic(
    text,
    messenger_replies_amen_only_is,
  );
  return r;
}
