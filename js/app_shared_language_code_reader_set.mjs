import { global_function_set } from "./global_function_set.mjs";
import { app_shared_language_code_reader } from "./app_shared_language_code_reader.mjs";
export function app_shared_language_code_reader_set(language_code) {
  "Say once, as an app starts, which language it will be speaking to its reader in.";
  "Kept under the name of the function that asks for it, so the two sides cannot fall out of step over where it lives. An app that never calls this is understood to speak English, which is what all of them did before there was anything to say.";
  "Said at the start rather than looked up when wanted. Everything downstream of it - which way a row of buttons runs, which words are written on them - is then decided against something that holds still for as long as the screen is being drawn.";
  global_function_set(app_shared_language_code_reader, language_code);
}
