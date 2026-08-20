import { app_shared_language_code_reader } from "./app_shared_language_code_reader.mjs";
import { language_code_rtl_is } from "./language_code_rtl_is.mjs";
export function app_shared_rtl_is() {
  "Whether this app is speaking to its reader in a language that runs from the right of the line to the left.";
  "Worked out from the one language the app was told it speaks, never remembered separately. Two things kept apart can disagree, and a screen whose words are Urdu while its rows still believe they are English is a page nobody chose and nobody can see the cause of.";
  let language_code = app_shared_language_code_reader();
  let rtl = language_code_rtl_is(language_code);
  return rtl;
}
