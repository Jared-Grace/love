import { ebible_licence_all_rights_reserved } from "./ebible_licence_all_rights_reserved.mjs";
import { ebible_licence_cc_by_nc_nd } from "./ebible_licence_cc_by_nc_nd.mjs";
import { ebible_licence_cc_by_nd } from "./ebible_licence_cc_by_nd.mjs";
import { ebible_licence_unknown } from "./ebible_licence_unknown.mjs";
export function ebible_licences_derivatives_forbidden() {
  "The terms under which a translation's own words and punctuation may not be altered - so nothing this repo builds may put a character into one of its verses.";
  "A separate question from whether the text may be shipped at all, and asked separately because the two answers come apart. Attribution No-Derivatives forbids changing a word and permits everything else including earning, so it is shippable and frozen at the same time; Non-Commercial permits changing a word and is refused anyway. Folding them together was what left No-Derivatives refused for years for a reason that belonged to Non-Commercial.";
  "What is forbidden is a character, not a presentation. eBible's own wording grants sharing the text in any format and names one prohibition - a work that changes the actual words or punctuation of the Scriptures. So colour, circling, layout, and a note held beside a verse are all given; an inserted star or bracket and an inline gloss are not.";
  "Terms nobody could read are counted as forbidding rather than as permitting. A page that names no licence has granted nothing anybody can point at, and a verse altered under a permission that turns out not to exist cannot be taken back out of the copies already made.";
  let v = ebible_licence_cc_by_nd();
  let v2 = ebible_licence_cc_by_nc_nd();
  let v3 = ebible_licence_all_rights_reserved();
  let v4 = ebible_licence_unknown();
  let licences = [v, v2, v3, v4];
  return licences;
}
