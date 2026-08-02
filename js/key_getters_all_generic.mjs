import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast } from "./function_ast.mjs";
import { list_add } from "./list_add.mjs";
export async function key_getters_all_generic(names, read) {
  "Given the files worth opening and a reading that says which functions one file calls to name a field of an address, every such call across all of them, as {f_name, getter} - the file doing the calling and the function it calls.";
  "This is the repaired shape rather than the broken one, so the answer is the whole set and not a list of things wrong. Whether each one is safe is a further question with a further answer, and it is asked where the answer lives.";
  "The whole set is what comes back so that a walk which has stopped reaching anything can be told from a repo in order. These readings pass by finding nothing, and finding nothing is also what a walk that broke does.";
  "The pair is the answer rather than the name alone, so anything asking further can say where to look.";
  "Which files to open and which reading to use are both received, because the part after the hash and the part after the question mark differ in exactly those two things and in nothing else. Written out once per part, the opening of every tree had to be got right twice and a repair to either copy left the other holding the fault.";
  arguments_assert(arguments, 2);
  let pairs = [];
  for (let candidate of names) {
    let tree = await function_ast(candidate);
    let getters = read(tree);
    for (let getter of getters) {
      let pair = {
        f_name: candidate,
        getter,
      };
      list_add(pairs, pair);
    }
  }
  return pairs;
}
