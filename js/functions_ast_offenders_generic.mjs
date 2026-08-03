import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { functions_code_offenders_generic } from "./functions_code_offenders_generic.mjs";
export async function functions_ast_offenders_generic(reader, found_key) {
  arguments_assert(arguments, 2);
  ("Every function in the repo whose code, once read in, the given reader finds");
  ("something in, each named beside what was found there under the name asked for.");
  ("The same sweep as the one next door, for a reader that wants the code already");
  ("read in rather than written out. Nearly every reading here is of that kind, and");
  ("each one that used this sweep had first been given a three-line wrapper of its");
  ("own whose whole content was read this in, then ask - so the wrapper was being");
  ("copied once per question alongside the sweep it was written for. Reading it in");
  ("here writes that step once for all of them.");
  ("A file the reader cannot read in is passed over and counted as skipped, because");
  ("the reading in happens inside the same attempt the sweep already guards. That is");
  ("the piece worth not copying: a torn file is not an answer to any of these");
  ("questions and must not become one, and a reader that fell over on its first file");
  ("would otherwise report a repo with nothing wrong in it.");
  function code_reader(code) {
    let ast = js_parse(code);
    let found = reader(ast);
    return found;
  }
  let offenders = await functions_code_offenders_generic(
    code_reader,
    found_key,
  );
  return offenders;
}
