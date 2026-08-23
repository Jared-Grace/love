import { arguments_assert } from "./arguments_assert.mjs";
import { door43_versions_english_choices } from "./door43_versions_english_choices.mjs";
import { ebible_versions_english_choices_licences } from "./ebible_versions_english_choices_licences.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
export async function bible_versions_english_choices_usable() {
  arguments_assert(arguments, 0);
  ("Every English translation this repo may lawfully ship and earn from, from both of the shelves it fetches from, each against what it calls itself and the terms it is offered on.");
  ("THE ONE ANSWER TO WHICH ENGLISH TRANSLATIONS MAY BE PUT IN FRONT OF A READER. It was being worked out in two places from one of the two shelves, and adding the second shelf to one of them left the other quietly refusing what the first had just started offering - a wording could be chosen from a comparison and then rejected as unshippable by the gate that checks what the page quotes. Both readings are this reading now, so a shelf added here is added to both at once.");
  ("Whether the terms allow it is asked here rather than left to each caller, because a caller that forgets is not wrong in any visible way: it simply offers more than it may, and every wording it offers looks exactly like one that was allowed.");
  ("The eBible ones come first and keep the order that list is in, so a comparison reading top to bottom is not reshuffled by a shelf being added.");
  let licences = await ebible_versions_english_choices_licences();
  let door = door43_versions_english_choices();
  let both = list_concat(licences, door);
  let usable = list_filter_property(both, "commercial", true);
  return usable;
}
