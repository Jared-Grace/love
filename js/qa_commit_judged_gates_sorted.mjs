import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { qa_gates_named_listed } from "./qa_gates_named_listed.mjs";
import { qa_app_gates_sorted } from "./qa_app_gates_sorted.mjs";
export function qa_commit_judged_gates_sorted(judged, reach) {
  "What one judged commit says, sorted into the gates that hold the given reach out of a deployment and the gates that cannot touch it: the record of a judging goes in, the two lists come out.";
  "It exists because the unpacking is the whole of what the two callers had in common, and it is not a small run - four fields read off the record, the offenders each gate wrote down read off beside them, and only then the sorting the shipping path actually turns on. Written twice, a fifth field added to a judging is added in one place and forgotten in the other, and the two answers drift apart without anything going red.";
  "The sorting itself stays where it is and is not moved in here. It is pure and takes what an app carries as an argument, so it can be asked a question without a commit being judged first, and that is the property worth keeping - this is only the reading that has to happen before it can be asked.";
  arguments_assert(arguments, 2);
  let green = property_get(judged, "green");
  let failed = property_get(judged, "failed");
  let named = property_get(judged, "named");
  ("what each gate said is kept beside what was read out of it, so the offenders it wrote down are read here too - most of them are apps, pages, files and translations rather than functions, and read for functions alone they name nobody");
  let said = property_get_or_null(judged, "said");
  let listed = qa_gates_named_listed(named, said);
  let sorted = qa_app_gates_sorted(green, failed, listed, reach);
  let blocking = property_get(sorted, "blocking");
  let elsewhere = property_get(sorted, "elsewhere");
  let r = {
    blocking,
    elsewhere,
  };
  return r;
}
