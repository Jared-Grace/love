import { greater_than } from "./greater_than.mjs";
import { functions_names } from "./functions_names.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_free_names_scoped } from "./js_free_names_scoped.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_unbound_names() {
  "every love function that reads a name nothing binds and no repo function answers to - a guaranteed error the moment that line runs, and the exact half the missing-import gate cannot see. A free name that does name a real function is a missing import and belongs to that gate; a free name that names nothing at all belongs here, so the two together account for every free name in the repo.";
  "The detector is the scope-aware one rather than the name-based one, because a name bound somewhere else in the file is exactly the case this is looking for.";
  let answers_to = await functions_names();
  let love = await repo_functions_names("love");
  let offenders = [];
  for (let name of love) {
    let parsed = await function_parse_declaration(name);
    let ast = property_get(parsed, "ast");
    let free = js_free_names_scoped(ast);
    let unbound = list_difference(free, answers_to);
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
