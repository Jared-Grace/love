import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gate_said_record_or_null } from "./qa_gate_said_record_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_is } from "./list_is.mjs";
import { object_is } from "./object_is.mjs";
import { text_is_if_or_null } from "./text_is_if_or_null.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
export function qa_gate_said_accused_or_null(said) {
  "$plain said";
  "Who a gate said is at fault, in the one case where it wrote that down itself: every offender in the record it threw names an app. Nothing where it did not say, and then the ordinary readers are the ones with the answer. Read-only, pure.";
  "An offender record is read for every word it holds, because no two gates agree on what to call the property their offender sits under. That is right until a gate writes down BOTH who is at fault and what the fault was found in, and then reading every word turns one accusation into six. The gate that does this names an app reaching code that only runs outside a browser, and beside it the function reached; the app is who can repair it and the function is what it reached. Reading the function as an accusation blocks every other app whose bundle merely carries that function, for a fault it has no part in and cannot fix.";
  "It is the same rule already applied to the far half of an arrow and to a printed chain, met a third time in a record instead of a sentence: what a fault was found THROUGH is evidence, and only who it was found IN is accused.";
  "Every offender has to name an app or this abstains, rather than accusing the ones that do and reading the rest the ordinary way. A record half of this shape is a record of some other kind that happens to mention an app, and guessing which half to trust is exactly the reading this exists to stop. Measured over 856 judged commits, one gate has ever written the property at all.";
  arguments_assert(arguments, 1);
  let parsed = qa_gate_said_record_or_null(said);
  let unparsed = null_is(parsed);
  if (unparsed) {
    return null;
  }
  let list = property_get_or_null(parsed, "list");
  let listed = list_is(list);
  if (not(listed)) {
    return null;
  }
  let apps = [];
  for (let entry of list) {
    let carried = object_is(entry);
    if (not(carried)) {
      return null;
    }
    let held = property_get_or_null(entry, "app");
    let word = text_is_if_or_null(held);
    if (null_is(word)) {
      return null;
    }
    let blank = text_empty_is(word);
    if (blank) {
      return null;
    }
    list_add_unique(apps, word);
  }
  let none = list_empty_is(apps);
  if (none) {
    return null;
  }
  return apps;
}
