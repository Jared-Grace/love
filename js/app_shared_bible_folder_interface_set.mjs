import { global_function_set } from "./global_function_set.mjs";
import { app_shared_bible_folder_interface } from "./app_shared_bible_folder_interface.mjs";
export function app_shared_bible_folder_interface_set(bible_folder) {
  "Say which bible the names of books on the screen are spelled out of, for an app whose buttons are not in English.";
  "Kept under the name of the function that asks for it, so the two sides cannot fall out of step over where it lives. An app that never calls this names its books in English, as every app did before.";
  global_function_set(app_shared_bible_folder_interface, bible_folder);
}
