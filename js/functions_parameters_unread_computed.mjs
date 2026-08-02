import { functions_parameters_unread } from "./functions_parameters_unread.mjs";
import { property_get } from "./property_get.mjs";
import { data_identifiers_search_names } from "./data_identifiers_search_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_function_declaration_param_name_index } from "./js_function_declaration_param_name_index.mjs";
import { functions_call_argument_at_undroppable } from "./functions_call_argument_at_undroppable.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_parameters_unread_computed() {
  "for every parameter nothing reads, the call sites that go to the trouble of building the argument they hand it";
  "this is the triage arm rather than the gate. an argument the caller built on purpose and the callee never reads is a live wiring bug - the caller's intent silently never happens - while a plain name or a written-out value says nothing either way. so the built ones are the entries worth opening, and the same reading that decides this decides whether the repair may run at all";
  "one entry per parameter rather than per function, because a function can ask for two and only one of them be a bug";
  let offenders = await functions_parameters_unread();
  let findings = [];
  for (let finding of offenders) {
    let f_name = property_get(finding, "name");
    let unread = property_get(finding, "unread");
    let f_names = await data_identifiers_search_names(f_name);
    let parsed = await function_parse_declaration(f_name);
    let declaration = property_get(parsed, "declaration");
    for (let parameter_name of unread) {
      let index = js_function_declaration_param_name_index(
        declaration,
        parameter_name,
      );
      let built = await functions_call_argument_at_undroppable(
        f_names,
        f_name,
        index,
      );
      let any = list_empty_not_is(built);
      if (any) {
        let entry = {
          name: f_name,
          parameter_name,
          built,
        };
        list_add(findings, entry);
      }
    }
  }
  return findings;
}
