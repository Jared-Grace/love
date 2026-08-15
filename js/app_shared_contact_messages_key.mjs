import { text_frozen } from "./text_frozen.mjs";
export function app_shared_contact_messages_key() {
  "the word the contact panel's thread is filed under on this device.";
  "One place spells it, so the reader and the writer cannot come to disagree about where the thread is. Frozen, because once somebody has written a message it is sitting in their browser under this exact word, and a different word would look to them like their conversation had been thrown away.";
  let key = text_frozen("messages");
  return key;
}
