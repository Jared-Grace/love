import { app_shared_descriptions } from "./app_shared_descriptions.mjs";
import { null_is } from "./null_is.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { text_empty } from "./text_empty.mjs";
export function app_shared_description(app_name) {
  "$plain app_name";
  "One sentence saying what an app is, for the person who has only been handed a link and has not opened it yet.";
  "An app without one gets nothing rather than something vague, so a card is never built out of a guess.";
  let descriptions = app_shared_descriptions();
  let found = property_or_null(descriptions, app_name);
  if (null_is(found)) {
    let none = text_empty();
    return none;
  }
  return found;
}
