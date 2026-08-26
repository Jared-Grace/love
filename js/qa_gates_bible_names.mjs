import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gates } from "./qa_gates.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_add } from "./list_add.mjs";
export function qa_gates_bible_names() {
  "Every gate this repo judges that is about the Bible, named rather than run.";
  "IT DERIVES THE SET INSTEAD OF HOLDING A LIST OF NAMES. A Bible gate written tomorrow belongs to this set the day it is written, and a gate renamed away from the Bible leaves it on its own - whereas a hand-kept list goes quietly stale, and nothing anywhere would go red when it did.";
  "THE WORD IS MATCHED ANYWHERE IN THE NAME AND NOT ONLY AT THE FRONT, which is what keeps the ebible gates in: they are named for the source the text comes from rather than for the subject, and they are about the Bible all the same.";
  arguments_assert(arguments, 0);
  let gates = qa_gates();
  let names = [];
  for (let gate of gates) {
    let name = gate.name;
    let about = text_includes(name, "bible");
    if (about) {
      list_add(names, name);
    }
  }
  return names;
}
