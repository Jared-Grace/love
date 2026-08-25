import { json_format_to } from "./json_format_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
import { list_is } from "./list_is.mjs";
import { text_is } from "./text_is.mjs";
export function clipboard_value_text(value) {
  "$plain value";
  "Whatever a function answered with, written out as the text a person would want on their clipboard: text as it stands, a list as its items each on their own line, and anything else as formatted JSON.";
  "A LIST BECOMES LINES RATHER THAN A JSON ARRAY, and that is the whole reason this exists rather than one call to the JSON writer. A list of verses pasted as JSON arrives wrapped in brackets and quotes, with every apostrophe escaped, and has to be cleaned by hand before it is readable - which is work done at the far end, every time, to undo a choice made here.";
  "The items are written by asking this same question of each one, so a list of texts becomes plain lines and a list of records becomes one record per line. Neither case had to be named: they both fall out of the one rule.";
  "Formatted JSON rather than the compact kind for everything else, because the reader is a person looking at what they pasted. Compact JSON saves characters nobody is paying for and costs the reading this is for.";
  let plain = text_is(value);
  if (plain) {
    return value;
  }
  let many = list_is(value);
  if (many) {
    let texted = list_map(value, clipboard_value_text);
    let joined = list_join_newline(texted);
    return joined;
  }
  let json = json_format_to(value);
  return json;
}
