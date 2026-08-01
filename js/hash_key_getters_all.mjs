import { list_add } from "./list_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { repo_functions_names_code_includes } from "./repo_functions_names_code_includes.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_hash_key_getters } from "./js_hash_key_getters.mjs";
export async function hash_key_getters_all() {
  "Every function called to get the name of a field of a page address, as {f_name, getter} - the file doing the calling and the function it calls. Read-only.";
  "This is the repaired shape rather than the broken one, so the answer is the whole set and not a list of things wrong. Whether each one is safe is a further question with a further answer, and it is asked where the answer lives.";
  "The whole set is what comes back so that a walk which has stopped reaching anything can be told from a repo in order. Both of these readings pass by finding nothing, and finding nothing is also what a walk that broke does.";
  "The pair is the answer rather than the name alone, so anything asking further can say where to look.";
  "Only the files that mention an address at all are opened, so the walk costs a handful of trees rather than the whole repo.";
  arguments_assert(arguments, 0);
  let repo_name = repo_love_name();
  let candidates = await repo_functions_names_code_includes(repo_name, "hash");
  let pairs = [];
  for (let candidate of candidates) {
    let tree = await function_ast(candidate);
    let getters = js_hash_key_getters(tree);
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
