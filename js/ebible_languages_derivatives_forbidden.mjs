import { ebible_languages_credits } from "./ebible_languages_credits.mjs";
import { ebible_licence_derivatives_forbidden_is } from "./ebible_licence_derivatives_forbidden_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_languages_derivatives_forbidden() {
  "Every translation this app already offers a reader whose own words may not be altered - the ones a gloss must stand beside rather than inside.";
  "Asked of the list as it actually stands rather than of the list somebody meant to ship, because the obligation belongs to the text and follows it wherever the text is offered.";
  "Unlike its sibling that finds the translations this repo may not ship at all, an entry here is not a fault. It is a translation to render carefully - the credit is owed, the text is welcome, and only altering a character of it is closed.";
  let credits = await ebible_languages_credits();
  function frozen_is(credit) {
    let licence = property_get(credit, "licence");
    let frozen = ebible_licence_derivatives_forbidden_is(licence);
    return frozen;
  }
  let found = list_filter(credits, frozen_is);
  return found;
}
