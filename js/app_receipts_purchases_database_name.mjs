import { text_frozen } from "./text_frozen.mjs";
export function app_receipts_purchases_database_name() {
  "the name of the browser database holding every purchase added on this phone, sent or not, so the list is there with no internet.";
  "its own database rather than a second store beside the photos waiting to be sent, because a database gets its stores only when it is first made - one made already cannot gain another without a version step.";
  "the word must not move once a phone is holding purchases under it: that phone looks under this and under nothing else.";
  let v = text_frozen("receipts_purchases");
  return v;
}
