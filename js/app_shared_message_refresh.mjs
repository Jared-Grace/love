import { app_shared_message_thread_draw } from "./app_shared_message_thread_draw.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_message_messages_get } from "./app_shared_message_messages_get.mjs";
export async function app_shared_message_refresh(
  div_messages,
  context,
  messages_property,
  start,
) {
  arguments_assert(arguments, 4);
  ("Draws the thread over again: each message somebody sent, with what the reply rules say back to it underneath.");
  ("★ A MESSAGE THAT BREAKS THE RULES STILL GETS AN ANSWER. The reply is worked out through the unit that keeps the three outcomes apart, and two of those three - no rule matched, and the rules broke - are shown here as the same standing answer on purpose. The person waiting is owed a reply either way, and which of the two it was is a thing for the people writing rules to read on their own screen rather than something to make somebody in another country work out from a bubble that never stops loading. Before this, a message the rules threw on sat on Loading for as long as the app was open.");
  ("Every message is put up saying Loading before any of them is worked out, and each is filled in as its own answer arrives. So the thread has its full shape immediately and the slow ones do not hold up the quick ones.");
  html_clear(div_messages);
  let messages = app_shared_message_messages_get(context, messages_property);
  await app_shared_message_thread_draw(div_messages, start, messages);
}
