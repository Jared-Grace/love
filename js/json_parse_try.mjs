import { json_from } from "./json_from.mjs";
export function json_parse_try(text) {
  "Parse text as JSON, or get null back when it is not JSON. For reading append-only logs, where the last line can be half-written at the moment you read it and one torn line should not lose the whole file.";
  try {
    let parsed = json_from(text);
    return parsed;
  } catch {
    return null;
  }
}
