import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function gloss_offenders_said_names(offenders, said_name_try) {
  "Every fault a sweep over a gloss store came back with, named once each however many chapters met it, and in order.";
  "A sweep hands back its offenders one chapter deep, each chapter holding the words it found fault with and each word holding the several things said about it. Getting from that to a list somebody can repair from is the same three walks every time, so the walking lives here and only the naming is handed in.";
  "★ NAMING NOTHING IS HOW A THING SAID IS PASSED OVER, WHICH IS WHY THE NAMING RATHER THAN A SEPARATE SIFTING IS THE ONE THING HANDED IN. One sweep names every piece it was given; another looks at three ways a quoted piece can disagree and names only the one that was got from nowhere. Were the sifting a second argument, the caller that sifts nothing would have to hand in a test that is always true, and the caller that sifts would say what it is looking at twice - once to refuse the others and once to name the one it kept. Answering with nothing says both at once.";
  "★ SAID ONCE EACH IS THE POINT OF THE GATHERING, NOT A TIDINESS APPLIED TO IT. One word met in a dozen chapters is one sentence for somebody to author, not a dozen; the name is made of the word and what was wrongly said of it, so the same fault in another chapter arrives already spelled the same and falls together. Ordering it afterwards is what lets two readings of the same store be set beside each other at all.";
  arguments_assert(arguments, 2);
  let names = [];
  function chapter_read(chapter) {
    let found = property_get(chapter, "found");
    function finding_read(finding) {
      let word = property_get(finding, "word");
      function said_read(said) {
        let named = said_name_try(word, said);
        let nothing = equal(named, null);
        if (nothing) {
          return;
        }
        list_add(names, named);
      }
      let claims = property_get(finding, "said");
      each(claims, said_read);
    }
    each(found, finding_read);
  }
  each(offenders, chapter_read);
  let unique = list_unique(names);
  let sorted = list_sort_text(unique);
  return sorted;
}
