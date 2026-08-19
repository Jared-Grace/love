import { property_equals } from "./property_equals.mjs";
import { ebible_licence_unknown } from "./ebible_licence_unknown.mjs";
import { ebible_versions_copyrights } from "./ebible_versions_copyrights.mjs";
import { list_filter } from "./list_filter.mjs";
export async function ebible_versions_licences_unknown() {
  "Every translation downloaded onto this machine whose licence page names no terms a machine can read - the set worth a person's own eyes.";
  "These are not refusals. A page granting nothing and a page granting everything in prose look identical from here, and the only way to tell them apart is for somebody to read it. So this is a reading list rather than a verdict: each one may turn out to be a language this repo could offer and does not.";
  "Downloaded rather than shipped, because the shipped list has already been chosen from and holds none of these. What is being asked here is what else is on the disk that nobody has looked at.";
  let copyrights = await ebible_versions_copyrights();
  let unread = ebible_licence_unknown();
  function unknown_is(copyright_read) {
    let same = property_equals(copyright_read, "licence", unread);
    return same;
  }
  let found = list_filter(copyrights, unknown_is);
  return found;
}
