import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_color_gray_dark() {
  "a dark neutral gray, one step up from a near-black ground - the hairline between rows, the outline of a button, a dot that is resting rather than lit";
  "It is the darkest of the four grays and the only one meant to be seen on a dark page rather than a light one. The other three step down from white for a page that starts white; this one steps up from black for a page that starts black, which is why a page cannot pick its lines out of the same list the light pages use.";
  arguments_assert(arguments, 0);
  let c = "#3a3a3a";
  return c;
}
