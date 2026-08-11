import { list_unique_set } from "./list_unique_set.mjs";
import { list_set_difference } from "./list_set_difference.mjs";
import { greater_than } from "./greater_than.mjs";
import { functions_names } from "./functions_names.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_free_names_scoped } from "./js_free_names_scoped.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_unbound_names() {
  "every love function that reads a name nothing binds and no repo function answers to - a guaranteed error the moment that line runs, and the exact half the missing-import gate cannot see. A free name that does name a real function is a missing import and belongs to that gate; a free name that names nothing at all belongs here, so the two together account for every free name in the repo.";
  "The detector is the scope-aware one rather than the name-based one, because a name bound somewhere else in the file is exactly the case this is looking for.";
  "The fifteen thousand names the repo answers to are gathered into a set once, outside the loop, rather than asked as a list eight thousand times. A difference over two lists builds its own set of the second one every time it is called, which is the right thing for one call and the wrong thing for eight thousand: measured 2026-08-11, building it afresh each time cost nine seconds and building it once costs a millisecond.";
  let answers_to = await functions_names();
  let answered_to = list_unique_set(answers_to);
  let love = await repo_functions_names("love");
  let offenders = [];
  for (let name of love) {
    let parsed = await function_parse_declaration(name);
    let ast = property_get(parsed, "ast");
    let free = js_free_names_scoped(ast);
    let unbound = list_set_difference(free, answered_to);
    let any = greater_than(unbound.length, 0);
    if (any) {
      list_add(offenders, {
        name,
        unbound,
      });
    }
  }
  return offenders;
}
