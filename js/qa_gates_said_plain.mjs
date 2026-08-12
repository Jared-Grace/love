import { qa_gates_names } from "./qa_gates_names.mjs";
import { function_reachable_names } from "./function_reachable_names.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
import { fn_name } from "./fn_name.mjs";
export async function qa_gates_said_plain() {
  "Which gates can only complain in a plain sentence, with no way to separate who is at fault from what is merely mentioned. Read-only.";
  "A gate that fails is read back afterwards for every function name in what it said, and those names decide which app is held out of a deployment. A sentence names more than the offenders: it names the command that repairs them, and it names whatever the offender did the wrong thing to. Nothing in a sentence tells those apart, so all of them are blamed - and one of them is usually a small atom every app ships, which holds every app at once.";
  "The way out already exists and is one function wide: a complaint thrown as a record puts the offenders in the record and everything else under a hint, and the hint is dropped before the names are read. So the question here is exactly whether a gate can reach that thrower at all.";
  "Necessary rather than sufficient, and worth saying plainly: a gate that throws a record on one path and a sentence on another passes this. It catches the shape that has stopped three deployments, and it cannot promise to catch every instance of it.";
  let names = await qa_gates_names();
  let readable = fn_name("assert_json");
  let plain = [];
  for (let name of names) {
    let reachable = await function_reachable_names(name);
    let plain_is = list_includes_not(reachable, readable);
    if (plain_is) {
      list_add(plain, name);
    }
  }
  return plain;
}
