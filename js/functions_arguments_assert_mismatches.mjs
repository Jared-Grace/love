import { arguments_assert } from "./arguments_assert.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_params_get } from "./js_function_declaration_params_get.mjs";
import { js_flo_arguments_asserted_size_try } from "./js_flo_arguments_asserted_size_try.mjs";
import { null_is } from "./null_is.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_arguments_assert_mismatches() {
  arguments_assert(arguments, 0);
  ("Every function whose own argument check disagrees with its own parameter list, and how many were held up against themselves to find them.");
  ("A function states the number of things it takes twice over - as its parameters, and as the check at the top of its body - and the two are written at different moments. When they part company the function throws for every caller that was right, and the caller is told the fault is theirs. Nothing else here asks this question: the neighbour that compares calls against parameters is asking what callers do, and a function that disagrees with itself is wrong before anybody calls it at all.");
  ("This is a thing a machine does to a function rather than a thing a person mistypes. Measured before this was written, three thousand seven hundred and twenty three functions checked their own arguments and not one disagreed - so it sits at nothing and stays there. The way it comes to be broken is a transform that adds or drops a parameter and leaves the check behind, and one that was tried twice over after a throw already wrote a parameter in twice.");
  ("Functions making no check at all are passed over rather than blamed. The check is added when it is wanted rather than everywhere, so its absence is a choice somebody made and not a fault to report.");
  let names = await repo_functions_names("love");
  let offenders = [];
  let walked = 0;
  for (let f_name of names) {
    let parsed = await function_parse_declaration(f_name);
    let declaration = property_get(parsed, "declaration");
    let params = js_function_declaration_params_get(declaration);
    let ast = property_get(parsed, "ast");
    let asserted = js_flo_arguments_asserted_size_try(ast);
    let unchecked = null_is(asserted);
    if (unchecked) {
      continue;
    }
    walked = walked + 1;
    let declared = list_size(params);
    let agrees = equal(declared, asserted);
    if (agrees) {
      continue;
    }
    let offence = text_combine_multiple([
      f_name,
      " takes ",
      declared,
      " but checks for ",
      asserted,
    ]);
    list_add(offenders, offence);
  }
  let r = {
    walked,
    offenders,
  };
  return r;
}
