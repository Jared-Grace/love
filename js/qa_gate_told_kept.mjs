import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_names } from "./object_property_names.mjs";
export function qa_gate_told_kept(kept) {
  "$plain kept";
  arguments_assert(arguments, 1);
  ("An answer read out of the record, shaped exactly as though the frozen copy had just been asked, so that everything downstream of the asking cannot tell the difference.");
  ("What each red gate said is kept in the record gate by gate, which is what the reading downstream wants - so the sections are handed over directly rather than being printed out and read back. Building the printed text again only to take it apart would put a second copy of that format in the repo, and the two would be free to drift into disagreeing about an answer that was already correct.");
  ("What would have been printed is one line saying the copy was never asked. Printing the old run's output instead would be handing somebody a wall of text about a run that is not happening, with nothing to say it was not this one.");
  let green = property_get(kept, "green");
  let failed = property_get(kept, "failed");
  let spoke = property_get(kept, "said");
  let sections = [];
  for (let name of object_property_names(spoke)) {
    let said = property_get(spoke, name);
    list_add(sections, {
      name,
      said,
    });
  }
  let r = {
    green,
    failed,
    printed:
      "=== the frozen copy was not asked: this commit is already judged in the shared record ===",
    sections,
  };
  return r;
}
