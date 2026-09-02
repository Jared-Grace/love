import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function word_count_verb(count_total, verb_one, verb_many) {
  "$plain verb_one";
  "$plain verb_many";
  "The form of a verb that agrees with a count - the one form when the count is one, the many form otherwise.";
  "IT IS THE MIRROR OF PLURALIZING THE NOUN, and the two are needed together far more often than either is needed alone. A sentence counting things says the count, the thing, and what the thing did; get the noun right and leave the verb, and it reads one line have moved, which is worse than leaving both wrong because it looks like care was taken.";
  "BOTH FORMS ARE SPELLED BY THE CALLER RATHER THAN WORKED OUT, because English verbs do not agree by a rule that a count could follow. Has and have, was and were, is and are share no ending between them, and a table of them here would be a second vocabulary kept by hand and drifting from the sentences that use it.";
  arguments_assert(arguments, 3);
  let single = equal(count_total, 1);
  if (single) {
    return verb_one;
  }
  return verb_many;
}
