import { app_replace } from "./app_replace.mjs";
export function apps_frozen() {
  "these apps should not be changed in prod or deleted";
  let r = [app_replace];
  return r;
}
