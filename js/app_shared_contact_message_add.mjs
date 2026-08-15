import { storage_local_set } from "./storage_local_set.mjs";
import { list_add } from "./list_add.mjs";
import { app_shared_contact_messages } from "./app_shared_contact_messages.mjs";
import { app_shared_contact_messages_key } from "./app_shared_contact_messages_key.mjs";
export function app_shared_contact_message_add(message) {
  "keep one more message the person has written to the developer, so the panel can show it back to them next time they open it.";
  "The inbox already has the message; this is their copy. Without it the panel could only ever thank somebody and forget, which reads as though what they wrote went nowhere.";
  let messages = app_shared_contact_messages();
  list_add(messages, message);
  let key = app_shared_contact_messages_key();
  storage_local_set(app_shared_contact_messages, key, messages);
  return messages;
}
