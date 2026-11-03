import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_contact_reply_choices } from "./app_shared_contact_reply_choices.mjs";
import { reply_attempt } from "./reply_attempt.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { app_shared_contact_send } from "./app_shared_contact_send.mjs";
export async function app_shared_contact_send_unanswered(message) {
  arguments_assert(arguments, 1);
  ("Sends one message to the developer's inbox unless the reply rules already answer it - the message app's rule, for the contact panel.");
  ("★ WHETHER A MESSAGE REACHES A PERSON IS DECIDED BY WHETHER THE RULES ANSWERED IT, AND THE RULES BREAKING COUNTS AS NOT ANSWERING. A rule that throws, or rules that could not be fetched, leave the message unanswered, so it goes to the inbox and is read by somebody rather than lost.");
  let start = await app_shared_contact_reply_choices();
  let attempt = await reply_attempt(message, start);
  let answered = property_get(attempt, "answered");
  if (not(answered)) {
    await app_shared_contact_send(message);
  }
}
