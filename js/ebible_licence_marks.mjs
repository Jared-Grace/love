import { ebible_licence_cc_by } from "./ebible_licence_cc_by.mjs";
import { ebible_licence_cc_by_sa } from "./ebible_licence_cc_by_sa.mjs";
import { ebible_licence_public_domain } from "./ebible_licence_public_domain.mjs";
export function ebible_licence_marks() {
  "Every set of terms a downloaded translation states, each beside the piece of writing that identifies it, read against the licence page eBible ships inside the translation's own zip.";
  "The mark is a piece of the licence link rather than a phrase of English, because the link is written by the machine that built the page while the phrase is written by whoever translated the book - so the link says the same thing in every language and the phrase does not.";
  "Strictest first, and the first mark found wins. Several pages carry two: the copyright holder's own terms near the top and a friendlier summary from the site that hosts them near the bottom. Reading downwards and stopping at the first would take whichever the page happened to print first; reading strictest first takes the one that actually binds.";
  "One text is refused by this ordering that a careful reader would allow - a page saying all rights are reserved worldwide and then granting share alike underneath. Losing a text we could have used is the safe direction to be wrong in and including one we could not is not, so the ordering stays.";
  "The GNU documentation licence sits under all rights reserved rather than over it, because it is one of the terms this repo may ship on and the refusing marks all come first. The one page carrying it carries nothing else, so where it sits changes no verdict today; it sits where it does so that a page carrying both would be refused rather than allowed.";
  let marks = [
    {
      licence: "cc_by_nc_nd",
      mark: "creativecommons.org/licenses/by-nc-nd/",
    },
    {
      licence: "cc_by_nc",
      mark: "creativecommons.org/licenses/by-nc/",
    },
    {
      licence: "cc_by_nd",
      mark: "creativecommons.org/licenses/by-nd/",
    },
    {
      licence: "all_rights_reserved",
      mark: "all rights reserved",
    },
    {
      licence: ebible_licence_gfdl(),
      mark: "gnu.org/licenses/fdl",
    },
    {
      licence: ebible_licence_cc_by_sa(),
      mark: "creativecommons.org/licenses/by-sa/",
    },
    {
      licence: ebible_licence_cc_by(),
      mark: "creativecommons.org/licenses/by/",
    },
    {
      licence: ebible_licence_public_domain(),
      mark: "creativecommons.org/publicdomain/",
    },
    {
      licence: ebible_licence_public_domain(),
      mark: "wiki/public_domain",
    },
  ];
  return marks;
}
