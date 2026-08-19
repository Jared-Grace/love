import { catch_null } from "./catch_null.mjs";
import { json_from } from "./json_from.mjs";
import { object_is } from "./object_is.mjs";
import { list_is } from "./list_is.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { text_is_if_or_null } from "./text_is_if_or_null.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { not } from "./not.mjs";
export function qa_gate_said_listed(said) {
  "$plain said";
  "The offenders a gate wrote down when it failed, taken out of the record it threw rather than read out of its words. Read-only, pure.";
  "Its sibling reads the same complaint for function names, and between them they answer a question neither can answer alone: WHO is at fault here. That one works on a sentence and this one on a record, so a gate is read by whichever fits what it said and by both where it said both.";
  "The reason it is needed is that most offenders are not functions. An app, a page, a file the history is carrying, a translation, a lesson, an example - every one of those is a thing a gate is entitled to complain about, and a reader that only knows function names reads all of them as naming nobody. A gate that names nobody cannot be shown to be about somewhere else, so it holds EVERY app out of a deployment. Twelve gates were doing exactly that in one recorded run, and not one of them was silent.";
  "The tokens are taken exactly rather than matched against the words, because several of them are ordinary English. Two translations here are called hat and fin. Looking for those in a sentence would accuse every app carrying them of whatever the sentence happened to mention, which is the fault that once made every gate name something every app ships.";
  "An offender written as a record rather than as a word carries its name under name, which is what a gate measuring sizes says instead of a bare list.";
  "Saying nothing parseable is an ordinary answer and never an error. A gate is free to complain in English, and where it does, this hands back nothing and the sentence reader is the one with the answer.";
  "The whole of what was said is parsed, rather than a record being hunted for inside it. Its neighbour that goes hunting is built for pulling a record out of a larger piece of writing, and it finds the end of one by counting from the front - which stops early on the nested record every one of these gates throws, so all twelve of them read as having said nothing parseable at all.";
  function said_parsed() {
    let result = json_from(said);
    return result;
  }
  let parsed = catch_null(said_parsed);
  let unparsed = null_is(parsed);
  if (unparsed) {
    let r = [];
    return r;
  }
  let record = object_is(parsed);
  if (not(record)) {
    let r2 = [];
    return r2;
  }
  let list = property_get_or_null(parsed, "list");
  let listed = list_is(list);
  if (not(listed)) {
    let r3 = [];
    return r3;
  }
  let names = [];
  for (let entry of list) {
    let carried = object_is(entry);
    if (carried) {
      let held = property_get_or_null(entry, "name");
      let word = text_is_if_or_null(held);
      if (null_is(word)) {
        continue;
      }
      list_add(names, word);
      continue;
    }
    let plain = text_is_if_or_null(entry);
    if (null_is(plain)) {
      continue;
    }
    list_add(names, plain);
  }
  let unique = list_unique(names);
  return unique;
}
