import { app_code_screen_hash_key } from "./app_code_screen_hash_key.mjs";
import { app_code_screen_name_known_is } from "./app_code_screen_name_known_is.mjs";
import { app_code_screen_name_suggestions } from "./app_code_screen_name_suggestions.mjs";
import { app_code_screen_name_label } from "./app_code_screen_name_label.mjs";
export function app_code_hash_field_screen() {
  "The screen field of a code app link, described in the shape the checking of links reads.";
  "A screen this app does not have was already survived rather than crashed on - the name is dropped and the reader lands on home. That stays as the last defence, because anything at all can write that name into storage. Asked here first, the reader is offered the screen they were nearly spelling instead of being moved somewhere they did not ask for and told nothing; and leaving the word out is one of the choices, so the old silent landing on home is still one press away.";
  let field = {
    key: app_code_screen_hash_key(),
    name: "screen",
    list_is: false,
    valid_is: app_code_screen_name_known_is,
    suggestions: app_code_screen_name_suggestions,
    label: app_code_screen_name_label,
  };
  return field;
}
