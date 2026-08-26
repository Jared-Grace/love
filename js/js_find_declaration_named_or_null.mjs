import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { property_get } from "./property_get.mjs";
import { js_statements_declared_names_direct } from "./js_statements_declared_names_direct.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_first_try } from "./list_first_try.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
export function js_find_declaration_named_or_null(ast, name) {
  arguments_assert(arguments, 2);
  ("The line that makes a value, addressed by the name it makes, or nothing at all where no line here makes it.");
  ("ITS NEIGHBOUR THROWS ON A NAME IT CANNOT FIND, and that is the right answer for a transform being told where to work - a selector that quietly matched nothing would let a rewrite land somewhere else. It is the wrong answer for a reading. A reading asks about a name it has no promise about, and the commonest such name is a PARAMETER, which no line here makes because it arrived from outside.");
  ("It cost a whole sweep to learn that. A reading built on the throwing one was asked about fifty-nine files, every one of them a command that takes the name of a function to rewrite; each threw on the first parameter it followed, each was counted as skipped, and the answer that came back was that the repo was clean.");
  ("Where a name is made more than once - a rebinding in a nested scope - the first line making it is the one handed back, rather than a refusal. That is the same choice the reading makes about order everywhere else: the tree is read top down, and the first answer is the one that was true when the question was asked.");
  let vs = js_list_type(ast, "VariableDeclaration");
  function named_is(v) {
    let node = property_get(v, "node");
    let statements = [node];
    let names = js_statements_declared_names_direct(statements);
    let includes = list_includes(names, name);
    return includes;
  }
  let found = list_filter(vs, named_is);
  let first = list_first_try(found);
  let there = null_not_is(first);
  if (not(there)) {
    return null;
  }
  let node = property_get(first, "node");
  return node;
}
