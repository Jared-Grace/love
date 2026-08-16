import { functions_statements_after_return } from "./functions_statements_after_return.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_function_statements_before_leaving } from "./js_function_statements_before_leaving.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_statements_after_return_split() {
  "Every function carrying unreachable work, told apart into the two opposite things that shape means.";
  "A return with work written under it is either a leftover or a suspension, and the removal that is right for one destroys the other. That is why the removal was left out of the pass that runs everywhere: whether a given body is one or the other was called a judgement, and a judgement cannot be automated. It can be measured. A suspension has nothing above the return - somebody switched the whole body off at the top and left the work below it to be switched back on. A leftover has the body above it, and what is written below is what the body used to do.";
  "So the judgement was never really about the function; it was about what stands above the line that leaves. Measured, it draws itself, and a name let through says what let it through rather than that somebody once decided.";
  "The work above each leftover travels out beside its name, because a leftover with a single line above it is the one case worth reading by hand before anything is taken out of it.";
  let found = await functions_statements_after_return();
  let offenders = property_get(found, "offenders");
  let suspended = [];
  let leftovers = {};
  for (let name of offenders) {
    let parsed = await function_parse_declaration(name);
    let declaration = property_get(parsed, "declaration");
    let before = js_function_statements_before_leaving(declaration);
    let none = list_empty_is(before);
    if (none) {
      list_add(suspended, name);
      continue;
    }
    leftovers[name] = list_size(before);
  }
  let walked = property_get(found, "walked");
  let r = {
    walked,
    suspended,
    leftovers,
  };
  return r;
}
