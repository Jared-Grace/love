import { error } from "./error.mjs";
import { error_json_replacer } from "./error_json_replacer.mjs";
import { json_format_to_replaced } from "./json_format_to_replaced.mjs";
export function error_json(o) {
  ("raise a failure described by an object, keeping the words of anything thrown that was put in it");
  ("an error hands back an empty pair of brackets when it is written down, because the words it carries sit on properties that are deliberately not walked. So a caller who caught something and passed it along here raised a report with a hole exactly where the reason was - and it reads like a caller who had nothing to say, at the one moment somebody is reading to find out why. Two such callers were found and repaired by hand before this was moved here; putting it here is what stops there being a third.");
  ("the plain reading of an object into json is left alone. What is written down for somebody to read and what is written down to be stored are different questions, and only the first one wants an error turned into a sentence.");
  let message = json_format_to_replaced(o, error_json_replacer);
  error(message);
}
