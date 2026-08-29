import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { functions_code_offenders_walked_generic } from "./functions_code_offenders_walked_generic.mjs";
export async function functions_ast_offenders_walked_generic(
  reader,
  found_key,
) {
  arguments_assert(arguments, 2);
  ("Every function in the repo whose code, once read in, the given reader finds something in, each named beside what was found there under the name asked for - handed back together with how many functions were walked to find them and which of those could not be read.");
  ("The same sweep as the one next door, for a reader that wants the code already read in rather than written out. Nearly every reading here is of that kind.");
  ("IT EXISTS SO THAT A GATE CAN SAY HOW MUCH IT REACHED. Finding nothing is the answer these readings give on a good day and it is also the answer one gives when it has been pointed at a name that has moved or a folder that is no longer there, and the two are the same word. A count of what was walked is the only thing that has ever told them apart, because it falls to nothing on the day the reading breaks while the verdict stays green - and a count that is printed rather than handed back reaches a person watching a terminal and reaches no gate at all.");
  ("The plainer sweep beside this one keeps its old shape and asks this one, so every reading already standing on it goes on receiving a plain list of offenders and none of them had to be touched.");
  function code_reader(code) {
    let ast = js_parse(code);
    let found = reader(ast);
    return found;
  }
  let walked = await functions_code_offenders_walked_generic(
    code_reader,
    found_key,
  );
  return walked;
}
