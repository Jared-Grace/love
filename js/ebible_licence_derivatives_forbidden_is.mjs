import { ebible_licences_derivatives_forbidden } from "./ebible_licences_derivatives_forbidden.mjs";
import { list_includes } from "./list_includes.mjs";
export function ebible_licence_derivatives_forbidden_is(licence) {
  "$plain licence";
  "Whether a set of terms freezes the translation's own words, so that nothing built here may put a character into one of its verses.";
  let licences = ebible_licences_derivatives_forbidden();
  let frozen = list_includes(licences, licence);
  return frozen;
}
