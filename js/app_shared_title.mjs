import { equal } from "./equal.mjs";
export function app_shared_title(app_name) {
  "$plain app_name";
  "What an app calls itself where a person reads it - the browser tab, and the heading on a card built from a shared link.";
  "An app that has not been given one is called by its own short name, which is what every app was called before this existed.";
  if (equal(app_name, "replace")) {
    let r = "Replace - turn one row of symbols into another";
    return r;
  }
  return app_name;
}
