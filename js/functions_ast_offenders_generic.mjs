import { arguments_assert } from "./arguments_assert.mjs";
import { functions_ast_offenders_walked_generic } from "./functions_ast_offenders_walked_generic.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_ast_offenders_generic(reader, found_key) {
  arguments_assert(arguments, 2);
  ("Every function in the repo whose code, once read in, the given reader finds something in, each named beside what was found there under the name asked for.");
  ("The same sweep as the one next door, for a reader that wants the code already read in rather than written out. Nearly every reading here is of that kind, and each one that used this sweep had first been given a three-line wrapper of its own whose whole content was read this in, then ask - so the wrapper was being copied once per question alongside the sweep it was written for. Reading it in here writes that step once for all of them.");
  ("A file the reader cannot read in is passed over and counted as skipped, because the reading in happens inside the same attempt the sweep already guards. That is the piece worth not copying: a torn file is not an answer to any of these questions and must not become one, and a reader that fell over on its first file would otherwise report a repo with nothing wrong in it.");
  ("THE WALK ITSELF MOVED ONE NAME ALONG AND THIS KEPT ITS SHAPE. The sweep beside this one reads the code in and hands back how many functions it reached alongside the offenders; this asks it and passes on only the offenders, so that every reading already standing here goes on receiving exactly the list it always received. A caller that needs the count says so by naming the other one.");
  let walked = await functions_ast_offenders_walked_generic(reader, found_key);
  let offenders = property_get(walked, "offenders");
  return offenders;
}
