import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_function_declaration_property_params_names } from "./js_function_declaration_property_params_names.mjs";
export async function function_params_names(f_name) {
  arguments_assert(arguments, 1);
  ("The names a function calls the things it takes, in the order it takes them.");
  ("The companion of the one that answers how many. Three addresses want the names");
  ("themselves rather than the count: two of them so that an argument can be said");
  ("by the name the called function knows it by instead of by where it sits, and");
  ("one so that a call written from those names can be pointed back at what each");
  ("one meant.");
  ("The parsing and the reaching into the parsed thing were written out at each of");
  ("those addresses, which put the word declaration - the shape of what the parse");
  ("hands back, and nothing to do with what any of them are for - in three places");
  ("that would all have to be found again if it ever changed.");
  let d = await function_parse_declaration(f_name);
  let names = js_function_declaration_property_params_names(d, "declaration");
  return names;
}
