import { catch_null } from "./catch_null.mjs";
import { json_from } from "./json_from.mjs";
import { object_is } from "./object_is.mjs";
import { list_is } from "./list_is.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { text_is_if_or_null } from "./text_is_if_or_null.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_split } from "./text_split.mjs";
import { not } from "./not.mjs";
export function qa_gate_said_listed(said) {
  "$plain said";
  "The offenders a gate wrote down when it failed, taken out of the record it threw rather than read out of its words. Read-only, pure.";
  "Its sibling reads the same complaint for function names, and between them they answer a question neither can answer alone: WHO is at fault here. That one works on a sentence and this one on a record, so a gate is read by whichever fits what it said and by both where it said both.";
  "The reason it is needed is that most offenders are not functions. An app, a page, a file the history is carrying, a translation, a lesson, an example - every one of those is a thing a gate is entitled to complain about, and a reader that only knows function names reads all of them as naming nobody. A gate that names nobody cannot be shown to be about somewhere else, so it holds EVERY app out of a deployment. Twelve gates were doing exactly that in one recorded run, and not one of them was silent.";
  "The tokens are taken exactly rather than matched against the words, because several of them are ordinary English. Two translations here are called hat and fin. Looking for those in a sentence would accuse every app carrying them of whatever the sentence happened to mention, which is the fault that once made every gate name something every app ships.";
  "An offender written as a record rather than as a bare word is read for every word it holds, because no two gates agree on what to call the property it is written under.";
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
      ("every word an offender is written down under, because there is no one property a gate calls it by - one says name, one says bible_folder, one says path, and asking for a single one of those reads eleven of twelve gates as having named nobody");
      ("a value with a space in it is prose rather than a word anything answers to, so it is left where it is. A hint sentence taken as a name would let a gate claim to have named somebody while naming nothing that could ever match, which is the one wrong answer here - it turns a gate that must block into a gate that is somebody else's business");
      for (let key of object_property_names(entry)) {
        let held = property_get_or_null(entry, key);
        let word = text_is_if_or_null(held);
        if (null_is(word)) {
          continue;
        }
        let empty = text_empty_is(word);
        if (empty) {
          continue;
        }
        let parts = text_split(word, " ");
        let one_word = list_size_1(parts);
        if (not(one_word)) {
          continue;
        }
        list_add(names, word);
      }
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
