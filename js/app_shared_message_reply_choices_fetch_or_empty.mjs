import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
export async function app_shared_message_reply_choices_fetch_or_empty() {
  arguments_assert(arguments, 0);
  ("The reply rules the message app answers with, fetched at the moment they are wanted rather than carried in the page, or no rules at all when the fetch fails.");
  ("★ FETCHED, BECAUSE THE CONTACT PANEL IS ITSELF FETCHED ON A PRESS AND THE RULES WEIGH MORE THAN IT DOES. Measured 2026-11-01: the rules reach about two hundred functions and a hundred and thirty KiB of source - the lists of names and countries they recognise - against a panel piece of eight KiB. Carried in the panel they would land on twenty pages' presses at once, and the step gate refuses a piece growing that much in one step.");
  ("★ NO RULES IS THE SAFE ANSWER TO A FAILED FETCH. With nothing to match, every message reads as not answered, which sends it to the inbox and shows the standing received answer under it - exactly what the panel did before it had rules. So a dropped connection costs the person an instant reply and never costs them their message.");
  ("The address is written out in full for the same reason the panel's own opener writes it out: a bundler cannot follow a built address, so a joined one fails in a browser while working on a machine.");
  async function choices_load() {
    let module = await import("./app_shared_message_reply_choices.mjs");
    let fn = property_get(module, fn_name("app_shared_message_reply_choices"));
    let choices = fn();
    return choices;
  }
  let start = await catch_null_async(choices_load);
  let failed = null_is(start);
  if (failed) {
    let none = [];
    return none;
  }
  return start;
}
