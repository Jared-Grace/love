import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { property_equals_try } from "./property_equals_try.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { list_first } from "./list_first.mjs";
export function js_variable_declarator_single(ast, f_name, name) {
  arguments_assert(arguments, 3);
  ("$plain f_name");
  ("the word the function is written under, carried only so that a refusal can say which function it was asked about.");
  ("$plain name");
  ("the word being looked for.");
  ("The one line in a function that writes a given word down as a local, and a refusal when there is not exactly one of them.");
  ("NONE MEANS THE WORD IS NOT A LOCAL HERE AT ALL - it is a parameter, or something the file imports, or a slip of the pen - and MORE THAN ONE MEANS THERE IS MORE THAN ONE PLACE UNDER THE ONE WORD, in side-by-side scopes that cannot see each other. Either way anything that rewrote every mention of the word would be rewriting mentions of two different things as though they were one.");
  let declarators = js_list_type_nodes(ast, "VariableDeclarator");
  function declared_is(declarator) {
    let id = property_get(declarator, "id");
    let is = property_equals_try(id, "name", name);
    return is;
  }
  let mine = list_filter(declarators, declared_is);
  let mine_size = list_size(mine);
  let alone_is = equal(mine_size, 1);
  true_is_assert_json(alone_is, {
    f_name,
    name,
    mine_size,
    hint: "a name to move into a record has to be written down as a local exactly once in the function - none of them and it is not a local here, more than one and there is more than one place under the one word",
  });
  let single = list_first(mine);
  return single;
}
