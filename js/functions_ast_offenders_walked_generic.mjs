import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
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
  ("★ THE READING IN IS CAUGHT HERE AND THE READER IS DELIBERATELY NOT. A file the parser refuses is an ordinary fact about a working folder several people are writing in at once, and the sweep beside this one takes nothing back as meaning exactly that, so it is passed over quietly. A reader that throws is this repository's own code being wrong about a shape it was handed, and it travels, because a sweep that swallows one reports a repo with nothing wrong in it while having looked at nothing.");
  async function code_reader(code) {
    async function parses() {
      let ast_inner = js_parse(code);
      return ast_inner;
    }
    let read = await catch_message_async(parses);
    let read_is = property_get(read, "ok");
    if (not(read_is)) {
      let torn = null;
      return torn;
    }
    let ast = property_get(read, "value");
    let found = reader(ast);
    return found;
  }
  let walked = await functions_code_offenders_walked_generic(
    code_reader,
    found_key,
  );
  return walked;
}
