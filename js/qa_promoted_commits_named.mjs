import { arguments_assert } from "./arguments_assert.mjs";
import { qa_promoted } from "./qa_promoted.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
export async function qa_promoted_commits_named() {
  "Gathers the commit every waiting app says its built pieces came out of, one for each app that names one.";
  "An app waiting to be sent accounts for itself by naming the commit it was built from, and that name is the whole of what anybody else needs from the note. Several apps usually name the same commit, and the list is left as it is rather than being thinned, because what it is for is asking whether a given commit is in it - a question a repeat cannot change the answer to.";
  "IT SKIPS RATHER THAN REFUSES, and both skips are about a note in a shape that is allowed. An app may be written into the note before anything has been built for it, and a note may stand with no commit under it at all; neither is a fault, and a reading that threw on either would take down the whole of whatever asked. What comes back is what was actually named, so an empty answer means no app is waiting rather than that the reading failed.";
  arguments_assert(arguments, 0);
  let promoted = await qa_promoted();
  let standing = [];
  for (let app_name of object_property_names(promoted)) {
    let note = property_get_or_null(promoted, app_name);
    let unwritten = null_is(note);
    if (unwritten) {
      continue;
    }
    let named = property_get_or_null(note, "commit");
    let unnamed = null_is(named);
    if (unnamed) {
      continue;
    }
    list_add(standing, named);
  }
  return standing;
}
