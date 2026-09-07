import { arguments_assert } from "./arguments_assert.mjs";
import { reply_cases_path } from "./reply_cases_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function reply_cases() {
  arguments_assert(arguments, 0);
  ("Every worked case for the reply rules: a message, whether the rules reach the end of it, and what they say back.");
  ("★ EVERY MESSAGE HERE IS A REWRITTEN ONE. They are drawn from what people really sent, because a rule set is only interesting on the messages nobody had in front of them when they wrote it - but names, places, streets and phone numbers are changed, since this repo is public and the messages are not. Each case carries the short word standing for the message it was drawn from, so the two can still be laid side by side on the machine that holds both.");
  ("★ A REWRITE THAT CHANGES THE REPLY IS NOT A FAULT IN THE REWRITE - IT IS THE FINDING. When swapping a name out stops a rule matching, the rule was keyed on that person rather than on the shape of what they wrote, and it will answer them and nobody else. The corpus records what the rewritten message really gets, so that shows up as a case answering nothing rather than as a case quietly kept honest by keeping the name.");
  let path = reply_cases_path();
  let cases = await file_read_json(path);
  return cases;
}
