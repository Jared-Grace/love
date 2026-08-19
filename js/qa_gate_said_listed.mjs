import { qa_gate_said_record_or_null } from "./qa_gate_said_record_or_null.mjs";
import { qa_gate_said_listed_unique } from "./qa_gate_said_listed_unique.mjs";
import { list_is } from "./list_is.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { not } from "./not.mjs";
export function qa_gate_said_listed(said) {
  "$plain said";
  "The offenders a gate wrote down when it failed, taken out of the record it threw rather than read out of its words. Read-only, pure.";
  "Its sibling reads the same complaint for function names, and between them they answer a question neither can answer alone: WHO is at fault here. That one works on a sentence and this one on a record, so a gate is read by whichever fits what it said and by both where it said both.";
  "The reason it is needed is that most offenders are not functions. An app, a page, a file the history is carrying, a translation, a lesson, an example - every one of those is a thing a gate is entitled to complain about, and a reader that only knows function names reads all of them as naming nobody. A gate that names nobody cannot be shown to be about somewhere else, so it holds EVERY app out of a deployment. Twelve gates were doing exactly that in one recorded run, and not one of them was silent.";
  "The tokens are taken exactly rather than matched against the words, because several of them are ordinary English. Two translations here are called hat and fin. Looking for those in a sentence would accuse every app carrying them of whatever the sentence happened to mention, which is the fault that once made every gate name something every app ships.";
  "An offender written as a record rather than as a bare word is read for every word it holds, because no two gates agree on what to call the property it is written under.";
  "Saying nothing parseable is an ordinary answer and never an error. A gate is free to complain in English, and where it does, this hands back nothing and the sentence reader is the one with the answer.";
  "Which stretch of what was said holds the record is asked one name along, because a gate is free to print as it goes and several do. Reading the whole as one record was right until the first such gate threw one: its two printed lines sit in front of the record, the parse fails on them, and the gate comes back naming nobody.";
  let parsed = qa_gate_said_record_or_null(said);
  let unparsed = null_is(parsed);
  if (unparsed) {
    let r = [];
    return r;
  }
  let list = property_get_or_null(parsed, "list");
  let listed = list_is(list);
  if (not(listed)) {
    let r3 = [];
    return r3;
  }
  let unique = qa_gate_said_listed_unique(list);
  return unique;
}
