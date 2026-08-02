import { property_list_join_comma } from "./property_list_join_comma.mjs";
import { functions_parameters_unread_computed } from "./functions_parameters_unread_computed.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { fn_name } from "./fn_name.mjs";
import { greater_than } from "./greater_than.mjs";
export async function functions_parameters_unread_computed_gate_run() {
  "Gate: no call site may build an argument the function it calls never reads.";
  "This is the bug half of the unread-parameter rule, and it ratchets against";
  "ZERO rather than against a baseline. A parameter merely handed a plain name";
  "says nothing either way, which is why the baseline beside this one exists at";
  "all; but an argument the caller went to the trouble of BUILDING is evidence";
  "of intent, and the callee dropping it means that intent silently never";
  "happens. Two such pairs were found and fixed on 2026-08-02 - a Bible reader";
  "whose every word opened a plain Google define instead of the scripture-scoped";
  "one it built the search term for, and a verses list handed a language choice";
  "it ignored - and the set has been empty since, so there is nothing to";
  "grandfather.";
  let findings = await functions_parameters_unread_computed();
  for (let finding of findings) {
    let f_name = property_get(finding, "name");
    let parameter_name = property_get(finding, "parameter_name");
    let joined = property_list_join_comma(finding, "built");
    console.log(
      "BUILT AND DROPPED  " + f_name + "  " + parameter_name + "  <- " + joined,
    );
  }
  let size = list_size(findings);
  let any = greater_than(size, 0);
  if (any) {
    throw new Error(
      "parameters unread computed gate: " +
        size +
        " parameters are handed an argument the caller built and the body never reads, so the caller's intent silently never happens - read the parameter, which is usually the fix, or take it off with " +
        fn_name("function_parameter_unread_remove"),
    );
  }
  let r = {
    built_and_dropped: 0,
  };
  return r;
}
