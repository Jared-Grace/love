import { ebible_licences_commercial } from "./ebible_licences_commercial.mjs";
import { list_includes } from "./list_includes.mjs";
export function ebible_licence_commercial_is(licence) {
  "Whether a set of terms leaves this repo free to ship the text and free to earn from what is built on it.";
  let licences = ebible_licences_commercial();
  let allowed = list_includes(licences, licence);
  return allowed;
}
