import { ebible_licence_cc_by } from "./ebible_licence_cc_by.mjs";
import { ebible_licence_cc_by_sa } from "./ebible_licence_cc_by_sa.mjs";
import { ebible_licence_public_domain } from "./ebible_licence_public_domain.mjs";
export function ebible_licences_commercial() {
  "The terms a translation may be offered on for this repo to ship it - free to everyone including whoever wants to sell what they build on it.";
  "This mission is to earn and give away what is earned, so terms forbidding earning forbid the mission. Non-commercial is refused for that reason and no other.";
  "No-derivatives is refused for a second reason that bites the code rather than the money: it forbids changing a word or a mark of punctuation, and this repo glosses and rewrites Bible text.";
  "All rights reserved is refused because nothing was granted at all. The GNU documentation licence is refused because it asks for obligations nobody here is set up to keep.";
  "Attribution is owed on two of the three named here and share alike on one of them. Those are real duties rather than concerns - they are kept by showing the credit rather than by leaving the text alone.";
  let v = ebible_licence_public_domain();
  let v2 = ebible_licence_cc_by();
  let v3 = ebible_licence_cc_by_sa();
  let licences = [v, v2, v3];
  return licences;
}
