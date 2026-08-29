import { arguments_assert } from "./arguments_assert.mjs";
import { functions_code_offenders_walked_generic } from "./functions_code_offenders_walked_generic.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_code_offenders_generic(reader, found_key) {
  arguments_assert(arguments, 2);
  ("Every function in the repo whose written-out source the given reader finds something in, each named beside what was found there under the name asked for.");
  ("Receives the reading rather than doing one, because the sweep around it is the part that is the same every time and the hard part to get right: read each file, let a torn one be skipped instead of counted, say out loud how many were skipped, and hand back only the functions with something to answer for.");
  ("Two sweeps had this written out twice, and copying it is how a third would be written. That matters more than the twenty-odd lines, because the piece most worth not copying is the skip: a file that will not parse is not an answer to any of these questions and must not become one, and a reader that threw on its very first name once had all eighteen hundred files quietly skipped - which reads as a repo with nothing wrong in it, the most reassuring shape a total failure can wear.");
  ("The name the finding is filed under is asked for rather than fixed, because each sweep's own callers already read it by a word of their own.");
  ("THE WALK ITSELF MOVED ONE NAME ALONG AND THIS KEPT ITS SHAPE. The sweep beside this one does the reading and hands back how many functions it reached alongside the offenders; this asks it and passes on only the offenders, so that the twenty-odd readings already standing here go on receiving exactly the list they always received. A caller that needs the count says so by naming the other one, and none of them has to be touched to leave things as they are.");
  let walked = await functions_code_offenders_walked_generic(reader, found_key);
  let offenders = property_get(walked, "offenders");
  return offenders;
}
