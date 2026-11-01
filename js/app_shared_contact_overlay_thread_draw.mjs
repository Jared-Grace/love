import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_contact_messages } from "./app_shared_contact_messages.mjs";
import { app_shared_message_reply_choices_fetch_or_empty } from "./app_shared_message_reply_choices_fetch_or_empty.mjs";
import { app_shared_message_thread_draw } from "./app_shared_message_thread_draw.mjs";
export async function app_shared_contact_overlay_thread_draw(thread) {
  arguments_assert(arguments, 1);
  ("Draws what this person has written from a contact panel, with what the reply rules say back under each message - the same thread the message app draws, from the panel's own copy.");
  ("It replaced a thread that showed every message and then one standing received answer at the end. So a question the rules can answer is now answered in the panel, the way it already was in the message app, and one the rules cannot answer still says it was received.");
  let messages = app_shared_contact_messages();
  let start = await app_shared_message_reply_choices_fetch_or_empty();
  await app_shared_message_thread_draw(thread, start, messages);
}
