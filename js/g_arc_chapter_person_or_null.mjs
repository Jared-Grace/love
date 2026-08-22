import { property_equals } from "./property_equals.mjs";
import { property_get } from "./property_get.mjs";
export function g_arc_chapter_person_or_null(arcs, index) {
  "One person's arc picked out of a chapter's arcs by their number, or nothing at all if the chapter holds no arc for them.";
  "IT ANSWERS NOTHING RATHER THAN REFUSING, because who wants an assert and what it should say differ at every caller. A reviser has no person to revise, a report has nothing to compare against, and the writer is doing the ordinary thing of writing somebody for the first time - one refusal worded here would be wrong for two of those three.";
  "THE NUMBER IS COMPARED AS A NUMBER and the caller turns text into one before asking. A command line hands over text, and text one never matches the number one already in the store - which does not fail, it simply finds nobody, and the caller reports the person is not written.";
  let found = null;
  for (let entry of arcs) {
    let same = property_equals(entry, "index", index);
    if (same) {
      found = property_get(entry, "arc");
    }
  }
  return found;
}
