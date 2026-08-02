import { json_from } from "./json_from.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
export function p_command_of_line(line) {
  "Given one JSONL transcript line, return the normalized `p ` shorthand command";
  "the user typed - the text after the leading p, whitespace-collapsed so";
  "re-pastes of the same command compare equal - or empty text when the line is";
  "not a string-content user message that begins with p.";
  try {
    let event = json_from(line);
    if (not_equal(event.type, "user")) {
      let r = "";
      return r;
    }
    let content = event.message.content;
    let match = content.match(/^p\s+([\s\S]+)/);
    if (equal(match, null)) {
      let r2 = "";
      return r2;
    }
    let body = match[1];
    let trimmed = body.trim();
    let collapsed = trimmed.replace(/\s+/g, " ");
    return collapsed;
  } catch (e) {
    let r3 = "";
    return r3;
  }
}
