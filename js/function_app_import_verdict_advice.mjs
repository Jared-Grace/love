export function function_app_import_verdict_advice(verdict) {
  arguments_assert(arguments, 1);
  ("What one of the five answers about an app-owned import is telling whoever reads it to do, said in a sentence.");
  ("The answers are single words so that they can be counted and sorted, and a single word is exactly the wrong thing to hand somebody who has just been stopped by a gate. So the word keeps its job and the sentence is kept beside it.");
  ("Two of the five say do nothing to the name, and saying so plainly is the whole point of writing them down. A name with no callers reads as a lie by the count alone, and acting on that reading without the rest of it made a record of four faults into one of nine.");
  let advice = {
    rename:
      "nothing in the app it names calls it, and it reaches into no part of that app either, so the prefix is a lie - rename it to a prefix belonging to no app, which needs nobody's permission",
    reaches:
      "nothing in the app calls it, but it does reach into that app, so the name is honest and must not move - what is wrong sits in the importer instead",
    read: "exactly one function in the app calls it, and that one may itself be on its way out, so this decides nothing - somebody has to read that one caller",
    own: "several functions in the app call it, so the name is honest and no rename can help - the importer needs its own, or a shared one both can reach",
    entry:
      "this is the app's own front door, so importing it takes the whole app along with it, measured at 410 KiB on a bundle - these are the heaviest lines here rather than the emptiest",
  };
  let r = property_get(advice, verdict);
  return r;
}
