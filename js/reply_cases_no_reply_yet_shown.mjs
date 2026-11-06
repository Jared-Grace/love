import { arguments_assert } from "./arguments_assert.mjs";
import { app_message_private_records } from "./app_message_private_records.mjs";
import { property_get } from "./property_get.mjs";
import { reply_message_letters } from "./reply_message_letters.mjs";
import { list_map } from "./list_map.mjs";
import { reply_rules_remembered } from "./reply_rules_remembered.mjs";
import { reply_cases_no_reply_yet } from "./reply_cases_no_reply_yet.mjs";
import { equal } from "./equal.mjs";
import { reply_attempt_remembered } from "./reply_attempt_remembered.mjs";
import { list_filter_size } from "./list_filter_size.mjs";
import { list_add } from "./list_add.mjs";
export async function reply_cases_no_reply_yet_shown() {
  arguments_assert(arguments, 0);
  ("Each message waiting for a reply to be chosen, with how many real messages say those same words and whether a rule has started answering them, so that a real sender is what brings one to a person's attention.");
  ("★ ONLY THE LISTED WORDS AND A COUNT COME BACK, NEVER A RECORD. The listed words are public and made up; a record is private and says who sent it, and how many there are is all this needs from them.");
  let records = await app_message_private_records();
  function record_letters(record) {
    let message = property_get(record, "message");
    let letters = reply_message_letters(message);
    return letters;
  }
  let real = list_map(records, record_letters);
  let rules = await reply_rules_remembered();
  let shown = [];
  for (let message of reply_cases_no_reply_yet()) {
    let wanted = reply_message_letters(message);
    function same(letters) {
      let r = equal(letters, wanted);
      return r;
    }
    let attempt = await reply_attempt_remembered(message, rules);
    let one = {
      message,
      said: list_filter_size(real, same),
      answered: property_get(attempt, "answered"),
    };
    list_add(shown, one);
  }
  return shown;
}
