import { qa_gates_names } from "./qa_gates_names.mjs";
import { qa_gate_said_plain_is } from "./qa_gate_said_plain_is.mjs";
import { list_add } from "./list_add.mjs";
export async function qa_gates_said_plain() {
  "Which gates, when they fail, name something that is not at fault. Read-only.";
  "A gate that fails is read back afterwards for every function name in what it said, and those names decide which app is held out of a deployment. A sentence names more than the offenders: it names the command that repairs them, and it names whatever the offender did the wrong thing to. Nothing in a sentence tells those apart, so all of them are blamed - and one of them is usually a small atom every app ships, which holds every app at once.";
  "The way out already exists and is one field wide: a complaint thrown as a record keeps the offenders in the record and puts everything else under a hint, and the hint is dropped before the names are read.";
  "The roster is read off the file the whole-repo gate lists them in rather than written down again here, so a gate joins this the moment it joins that.";
  let names = await qa_gates_names();
  let plain = [];
  for (let name of names) {
    let plain_is = await qa_gate_said_plain_is(name);
    if (plain_is) {
      list_add(plain, name);
    }
  }
  return plain;
}
