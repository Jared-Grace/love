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
  let versions = [am];
  return versions;
}
