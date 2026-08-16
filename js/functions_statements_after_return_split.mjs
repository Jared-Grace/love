import { js_function_statements_after_return } from "./js_function_statements_after_return.mjs";
import { list_any } from "./list_any.mjs";
import { js_statement_reader_is } from "./js_statement_reader_is.mjs";
import { functions_statements_after_return } from "./functions_statements_after_return.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_function_statements_before_leaving } from "./js_function_statements_before_leaving.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_statements_after_return_split() {
  "Every function carrying unreachable work, told apart into the three quite different things that one shape means.";
  "A return with work written under it is either a leftover or something somebody meant, and the removal that is right for the first destroys the second. That is why the removal was left out of the pass that runs everywhere: whether a given body is one or the other was called a judgement, and a judgement cannot be automated. It can be measured, by two marks that are read off the body rather than decided about it.";
  "The first mark is what stands above the line that leaves. Nothing above it means the whole body was switched off at the top and the work below was left in place to be switched back on - that is a suspension, and taking the work out would throw away the function rather than the leftover.";
  "The second mark is whether the unreachable lines say anything to a reader. A paragraph standing among them, or a mark left to point somewhere, is somebody explaining why the lines are parked - measured on 2026-08-17, one of them read that the checking below became too much to sort through, and another said outright that the line under it was only there to serve as a link. Nobody writes that about a leftover. Prose in the tail is the author still talking, so the tail is parked rather than forgotten.";
  "What is left over after both marks is a tail of pure work with a real body above it, and that is the only one safe to take out without reading it. The work above each such name travels out beside it anyway, because a leftover with a single line above it is the case worth reading by hand first.";
  let found = await functions_statements_after_return();
  let offenders = property_get(found, "offenders");
  let suspended = [];
  let parked = [];
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
    let after = js_function_statements_after_return(declaration);
    let spoken = list_any(after, js_statement_reader_is);
    if (spoken) {
      list_add(parked, name);
      continue;
    }
    leftovers[name] = list_size(before);
  }
  let walked = property_get(found, "walked");
  let r = {
    walked,
    suspended,
    parked,
    leftovers,
  };
  return r;
}
