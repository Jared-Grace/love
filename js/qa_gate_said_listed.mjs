import { fn_name } from "./fn_name.mjs";
import { qa_gate_said_record_or_null } from "./qa_gate_said_record_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_is } from "./list_is.mjs";
import { qa_gate_said_listed_unique } from "./qa_gate_said_listed_unique.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { not } from "./not.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function qa_gate_said_listed(said) {
  "$plain said";
  "The offenders a gate wrote down when it failed, taken out of the record it threw rather than read out of its words. Read-only, pure.";
  "Its sibling reads the same complaint for function names, and between them they answer a question neither can answer alone: WHO is at fault here. That one works on a sentence and this one on a record, so a gate is read by whichever fits what it said and by both where it said both.";
  "The reason it is needed is that most offenders are not functions. An app, a page, a file the history is carrying, a translation, a lesson, an example - every one of those is a thing a gate is entitled to complain about, and a reader that only knows function names reads all of them as naming nobody. A gate that names nobody cannot be shown to be about somewhere else, so it holds EVERY app out of a deployment. Twelve gates were doing exactly that in one recorded run, and not one of them was silent.";
  "The tokens are taken exactly rather than matched against the words, because several of them are ordinary English. Two translations here are called hat and fin. Looking for those in a sentence would accuse every app carrying them of whatever the sentence happened to mention, which is the fault that once made every gate name something every app ships.";
  "An offender written as a record rather than as a bare word is read for every word it holds, because no two gates agree on what to call the property it is written under.";
  "Saying nothing parseable is an ordinary answer and never an error. A gate is free to complain in English, and where it does, this hands back nothing and the sentence reader is the one with the answer.";
  "Which stretch of what was said holds the record is asked one name along, because a gate is free to print as it goes and several do. Reading the whole as one record was right until the first such gate threw one: its two printed lines sit in front of the record, the parse fails on them, and the gate comes back naming nobody.";
  ("★ NOR DO THEY AGREE ON WHAT TO CALL THE LIST ITSELF, and asking only for one called list is the same fault one level up. Measured 2026-09-05: ",
    fn_name("bible_glyph_chapters_rosetta_lines_gate_run"),
    " throws its offenders under bandless and pictureless, so a reader asking for list alone read it as naming nobody, and one chapter with no bands written for it held every app in the repo out of a deployment. Where there is no list, every property holding one is read instead - which is derived from the record rather than declared here, so the next gate to name its list something of its own is already answered.");
  ("The gathering only ever happens where a list is absent, so a gate writing the ordinary shape is read exactly as it was before and the properties standing beside its list - the hint, the json it carries its advice in - are never gathered from. A hint is prose and reading it as a name would let a gate claim to have named somebody while naming nothing that can match.");
  let parsed = qa_gate_said_record_or_null(said);
  let unparsed = null_is(parsed);
  if (unparsed) {
    let r = [];
    return r;
  }
  let list = property_get_or_null(parsed, "list");
  let listed = list_is(list);
  if (listed) {
    let unique = qa_gate_said_listed_unique(list);
    return unique;
  }
  let gathered = [];
  for (let key of object_property_names(parsed)) {
    let held = property_get_or_null(parsed, key);
    let holds = list_is(held);
    if (not(holds)) {
      continue;
    }
    list_add_multiple(gathered, held);
  }
  let unique2 = qa_gate_said_listed_unique(gathered);
  return unique2;
}
