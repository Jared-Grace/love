import { storage_local_set } from "./storage_local_set.mjs";
export function app_shared_language_codes_save(l) {
  "remember the chosen languages so relaunching the app — including an installed app opened with no url hash — reopens in the same languages";
  storage_local_set(app_shared_language_codes_save, "l", l);
}
