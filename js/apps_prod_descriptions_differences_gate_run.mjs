import { arguments_assert } from "./arguments_assert.mjs";
import { apps_prod_descriptions_differences_cases } from "./apps_prod_descriptions_differences_cases.mjs";
import { property_get } from "./property_get.mjs";
import { apps_prod_descriptions_differences } from "./apps_prod_descriptions_differences.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { json_equal } from "./json_equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export function apps_prod_descriptions_differences_gate_run() {
  "Gate: the comparison between the sentence a shipped page shows and the sentence this repo now writes for it answers every written-down case the way the case says. Throws so the dispatcher seam exits nonzero.";
  "IT STANDS OVER A COMPARISON THAT CANNOT BE MADE TO DISAGREE BY ITSELF. Fed in earnest, it reads the folder of pages that were last sent out, and that folder changes only when somebody sends the site. So the four complaints are made here or they are never seen being made at all, and a check nobody has watched complain is a check that can only ever agree.";
  "WHAT IT DOES NOT DO IS READ THAT FOLDER. A gate that went red because a page was out of date would go red the moment a sentence was corrected, stay red until the site was sent, and refuse the very sending that cures it - the gates are asked before anything is built or copied, and that folder is the only one kept in the repo, so a correction has no other road in. The state of the world is a report; only the reasoning about it is gated.";
  "The clean cases are checked as hard as the dirty ones, because the cheap way through a corpus of faults is to complain about everything. Full agreement, a page and a sentence that are both deliberately silent, and an empty folder all have to come back with nothing to say.";
  "The count of what was walked is compared as well as the four lists. A comparison that made the right complaints while walking nothing would be agreeing with itself about an empty folder, and the count is the only thing that tells those two apart.";
  "The five parts of the answer are compared one at a time rather than as one piece, because comparing whole written-out shapes counts the order their keys were written in, and nothing here means to say anything about that.";
  arguments_assert(arguments, 0);
  let cases = apps_prod_descriptions_differences_cases();
  let wrong = [];
  for (let one of cases) {
    let shipped = property_get(one, "shipped");
    let described = property_get(one, "described");
    let why = property_get(one, "why");
    let answered = apps_prod_descriptions_differences(shipped, described);
    let walked_wanted = property_get(one, "walked");
    let walked_answered = property_get(answered, "walked");
    let counted = equal(walked_answered, walked_wanted);
    let parted = [];
    for (let cause of ["stale", "unsaid", "silent", "unoffered"]) {
      let wanted = property_get(one, cause);
      let got = property_get(answered, cause);
      let b = json_equal(got, wanted);
      if (not(b)) {
        list_add(parted, {
          cause,
          wanted,
          got,
        });
      }
    }
    let named = list_empty_is(parted);
    let agreed = counted && named;
    if (not(agreed)) {
      list_add(wrong, {
        why,
        shipped,
        described,
        walked_wanted,
        walked_answered,
        parted,
      });
    }
  }
  let hint = text_combine_multiple([
    "the comparison between a shipped sentence and the sentence now written no longer answers what ",
    fn_name("apps_prod_descriptions_differences_cases"),
    " says it must - each case carries its own reason, so read the reason before changing either side, because the case may be the older claim",
  ]);
  list_empty_is_assert_json(wrong, {
    hint,
    wrong,
  });
  let r = {
    cases: list_size(cases),
    wrong: 0,
  };
  return r;
}
