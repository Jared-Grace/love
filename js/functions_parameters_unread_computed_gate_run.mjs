import { list_map_property } from "./list_map_property.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { functions_parameters_unread_computed } from "./functions_parameters_unread_computed.mjs";
import { fn_name } from "./fn_name.mjs";
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
  "What it says is thrown as a record rather than printed and then summed up in a sentence, because whoever reads a failure next reads it for names and cannot tell a name being accused from a name being mentioned. The functions at fault are the record; the repair command and the words the caller built the argument out of are advice, and they sit under the hint the reader drops before it looks.";
  let findings = await functions_parameters_unread_computed();
  let names = list_map_property(findings, "name");
  let f_name = fn_name("function_parameter_unread_remove");
  let advice = text_combine_multiple([
    "each of these is handed an argument its caller went to the trouble of building and never reads it - read the parameter, which is usually the fix, or take it off with ",
    f_name,
  ]);
  let hint = {
    advice,
    findings,
  };
  list_empty_is_assert_json(names, {
    hint,
  });
  let r = {
    built_and_dropped: 0,
  };
  return r;
}
