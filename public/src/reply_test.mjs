import { reply_messages } from "../../../love/public/src/reply_messages.mjs";
import { app_message_reply_choices } from "../../../love/public/src/app_message_reply_choices.mjs";
export async function reply_test() {
  let messages = ["howareyou"];
  let start = app_message_reply_choices();
  let result = await reply_messages(messages, start);
}
