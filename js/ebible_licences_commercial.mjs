import { ebible_licence_cc_by_nd } from "./ebible_licence_cc_by_nd.mjs";
import { ebible_licence_gfdl } from "./ebible_licence_gfdl.mjs";
import { ebible_licence_cc_by } from "./ebible_licence_cc_by.mjs";
import { ebible_licence_cc_by_sa } from "./ebible_licence_cc_by_sa.mjs";
import { ebible_licence_public_domain } from "./ebible_licence_public_domain.mjs";
export function ebible_licences_commercial() {
  "The terms a translation may be offered on for this repo to ship it - free to everyone including whoever wants to sell what they build on it.";
  "This mission is to earn and give away what is earned, so terms forbidding earning forbid the mission. Non-commercial is refused for that reason and no other.";
  "No-derivatives is allowed. It was refused here for years for a reason that belonged to non-commercial: it forbids changing a word or a mark of punctuation, and this repo glosses Bible text. But it forbids nothing about earning, and the words it freezes are kept frozen by a check at the one door a gloss is written through rather than by refusing the translation to every reader.";
  "All rights reserved is refused because nothing was granted at all - it is the only refusal left, now that the GNU documentation licence is allowed.";
  "The GNU documentation licence was refused here for a while for asking obligations nobody was set up to keep. It asks nothing this repo objects to: money may be earned, credit is owed, and a changed text goes back out on the same terms. It asks for two things share alike does not - the licence travelling beside the text and a note of what was changed - and those are owed on the Bible text alone rather than on the app around it.";
  "Attribution is owed on three of the four named here and share alike on two of them. Those are real duties rather than concerns - they are kept by showing the credit rather than by leaving the text alone.";
  let v = ebible_licence_public_domain();
  let v2 = ebible_licence_cc_by();
  let v3 = ebible_licence_cc_by_sa();
  let v4 = ebible_licence_gfdl();
  let v5 = ebible_licence_cc_by_nd();
  let licences = [v, v2, v3, v4, v5];
  return licences;
}
