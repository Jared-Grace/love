import { functions_locals_unread } from "./functions_locals_unread.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function functions_locals_unread_names() {
  "Every name bound and never read in this repo, written as the function it sits in and then the name, one line each.";
  "The function alone would not be enough to measure against a record. A function already known to bind one name nothing reads could quietly start binding a second, and a record holding only the function would call that already known - so the pair is what is written down, and a new name in an old offender fails like any other new one.";
  "A space joins the two because neither half may contain one, so the pair can always be read back apart. That matters more than it looks: the record is compared as text, and a joiner that could appear inside either half would make two different pairs share one line.";
  let offenders = await functions_locals_unread();
  let names = [];
  for (let offender of offenders) {
    let f_name = property_get(offender, "name");
    let unread = property_get(offender, "unread");
    for (let local of unread) {
      let pair = text_combine_multiple([f_name, " ", local]);
      list_add(names, pair);
    }
  }
  return names;
}
