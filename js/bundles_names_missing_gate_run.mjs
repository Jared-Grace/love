import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { bundles_names_missing } from "./bundles_names_missing.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function bundles_names_missing_gate_run() {
  "QA gate: no built file under the dev folder reads a name of this repo's own that it never defines.";
  "A build is the one thing here nobody writes and nothing else checks. Every gate beside this one reads the sources, and a source can be perfectly correct while the bundle standing on it is missing a whole module - so this failure used to reach a reader before it reached anybody else. Measured 2026-08-17, a bundle calling a language list it did not carry killed a page on boot, and every source gate was green.";
  "The repair is almost always to build that app again rather than to change anything, because the sources it was built from are the ones passing every other gate.";
  let offenders = await bundles_names_missing();
  list_empty_is_assert_json(offenders, {
    hint: text_combine_multiple([
      "a built file under public/dev calls a function of this repo's own that it does not carry - build that app again with ",
      fn_name("webpack_build_dev"),
      " and the names should come back; if they do not, the function it is asking for has gone and its caller still names it",
    ]),
  });
}
