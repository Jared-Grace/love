import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_licence_cc_by_sa } from "./ebible_licence_cc_by_sa.mjs";
export function door43_versions() {
  arguments_assert(arguments, 0);
  ("Every bible this app carries from the Door43 catalogue rather than from eBible, each with the release it was read at and the credit its licence asks for.");
  ("Written by hand and pinned to a release, because a translation is chosen by reading it: what was read, judged and licensed is one particular release, and a shelf that has moved on since is a different text nobody here has looked at.");
  ("The credit is copied from the release's own manifest and licence file rather than fetched, so it says what the very copy on disk says. The manifest cannot change under a pinned release, so a copy of it cannot go stale.");
  let am = {
    bible_folder: "am_ulb",
    tag: "v7.2",
    door43_folder: "am_ulb",
    name: "Unlocked Literal Bible",
    description: "Amharic Unlocked Literal Bible",
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
