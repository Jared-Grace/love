import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_licence_cc_by_sa } from "./ebible_licence_cc_by_sa.mjs";
export function door43_versions() {
  arguments_assert(arguments, 0);
  ("Every bible this app carries from the Door43 catalogue rather than from eBible, each with the release it was read at and the credit its licence asks for.");
  ("Written by hand and pinned to a release, because a translation is chosen by reading it: what was read, judged and licensed is one particular release, and a shelf that has moved on since is a different text nobody here has looked at.");
  ("The credit is copied from the release's own manifest and licence file rather than fetched, so it says what the very copy on disk says. The manifest cannot change under a pinned release, so a copy of it cannot go stale.");
  ("Each entry names its language twice - in the three-letter code eBible would use, and in the plain English name the languages list shows a reader. That is not decoration. Every list here that asks which languages are already covered joins a folder to a language through an eBible copyright page, and a bible from this catalogue has no such page, so those joins fall back on these two words rather than dropping the entry and reporting a covered language as missing.");
  ("Each entry also names who publishes it, because git.door43.org is one site holding many publishers' shelves rather than one catalogue. The two English ones are published by unfoldingWord themselves; the copy of them sitting on the catalogue shelf has no releases at all, so a pinned tag asked of the wrong shelf fetches nothing rather than an older text.");
  ("HOW MANY BOOKS EACH ONE HOLDS IS WRITTEN DOWN, because these are not all whole bibles. The two English ones are published a book at a time as each finishes its checking, and stood at fifty-six of the sixty-six at version ninety - Numbers, Chronicles, Isaiah, Jeremiah, Ezekiel, Daniel, Amos and Zechariah are not in them. Somewhere that asks for the complete English translations must be able to tell these apart from one, and the number says so without anybody having to count the release notes again.");
  let am = {
    bible_folder: "am_ulb",
    tag: "v7.2",
    org: "Door43-Catalog",
    door43_folder: "am_ulb",
    books_count: 66,
    name: "Unlocked Literal Bible",
    description: "Amharic Unlocked Literal Bible",
    language_code: "amh",
    language_name: "Amharic",
    credit: [
      "Unlocked Literal Bible in Amharic, version 7.2",
      "Door43 World Missions Community",
      "Original work available at https://door43.org/.",
    ],
    licence: ebible_licence_cc_by_sa(),
    url: "https://git.door43.org/Door43-Catalog/am_ulb",
  };
  ("The two English ones are here for one reason: they are a wording nobody else on the shelf offers. The literal one follows the Hebrew and Greek word order closely enough to show what the sentence is actually built out of, and the simplified one says the same verse in the plainest English it can, so a line of a song has something to be compared against at both ends rather than twenty translations that all sound alike.");
  ("The trademark is kept in the name exactly as their licence asks. It may only be dropped from a work that has been changed, and nothing here changes the text.");
  let ult = {
    bible_folder: "en_ult",
    tag: "v90",
    org: "unfoldingWord",
    door43_folder: "en_ult",
    books_count: 56,
    name: "unfoldingWord® Literal Text",
    description: "English unfoldingWord Literal Text",
    language_code: "eng",
    language_name: "English",
    credit: [
      "unfoldingWord® Literal Text, version 90",
      "unfoldingWord",
      "Original work available at https://www.unfoldingword.org/ult.",
    ],
    licence: ebible_licence_cc_by_sa(),
    url: "https://git.door43.org/unfoldingWord/en_ult",
  };
  let ust = {
    bible_folder: "en_ust",
    tag: "v90",
    org: "unfoldingWord",
    door43_folder: "en_ust",
    books_count: 56,
    name: "unfoldingWord® Simplified Text",
    description: "English unfoldingWord Simplified Text",
    language_code: "eng",
    language_name: "English",
    credit: [
      "unfoldingWord® Simplified Text, version 90",
      "unfoldingWord",
      "Original work available at https://www.unfoldingword.org/ust.",
    ],
    licence: ebible_licence_cc_by_sa(),
    url: "https://git.door43.org/unfoldingWord/en_ust",
  };
  let versions = [am, ult, ust];
  return versions;
}
