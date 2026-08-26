import { arguments_assert } from "./arguments_assert.mjs";
import { apps_published_names } from "./apps_published_names.mjs";
import { apps_names } from "./apps_names.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export async function apps_published_dev_missing() {
  arguments_assert(arguments, 0);
  ("Every app standing at a public address that has no working build here, said as bare");
  ("names.");
  ("A page that has been sent out is a page a stranger can type in and reach, and one with");
  ("nothing behind it here is a page nobody can open, fix, or look at before sending it");
  ("again. So each name in this answer is an address the public can reach and this repo");
  ("cannot rebuild - which is the one direction of the pair that actually costs somebody");
  ("something.");
  ("The other direction is deliberately not a fault. An app being worked on and not yet");
  ("sent is the ordinary way an app begins, and most of what is built here will sit like");
  ("that for a while.");
  ("The names are made unique first, because an app can be reached through more than one");
  ("repo and the same name arriving twice would read as two apps to see to when it is one.");
  let published = await apps_published_names();
  let existing = await apps_names();
  let names = list_unique(published);
  let missing = list_without_multiple(names, existing);
  let sorted = list_sort_text(missing);
  return sorted;
}
