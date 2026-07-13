import { app_replace } from "../../love/js/app_replace.mjs";
import { app_g } from "../../love/js/app_g.mjs";
export function apps_frozen() {
  "these apps should not be changed in prod or deleted";
  let r = [app_g, app_replace];
  return r;
}
