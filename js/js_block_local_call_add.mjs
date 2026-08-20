import { js_declaration_declarators_get } from "./js_declaration_declarators_get.mjs";
import { list_single } from "./list_single.mjs";
import { js_declare_init_get } from "./js_declare_init_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_block_call_add } from "./js_block_call_add.mjs";
import { js_block_local_add_generic } from "./js_block_local_add_generic.mjs";
import { js_selects_block_body } from "./js_selects_block_body.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_last } from "./list_last.mjs";
import { list_remove_last } from "./list_remove_last.mjs";
export async function js_block_local_call_add(ast, selects, name, f_name) {
  "Binds a name to what a call hands back, at the end of a chosen block.";
  "It is the commonest line in this repo and it was the one the naming vocabulary could not write. The five relatives beside it each bind a starting value that is written out in place - a count, a word, an empty record, an empty list, a yes or no - and every one of those is a leaf. A body is mostly not leaves. It is a run of names bound to what the last call answered, and until now every one of those lines had to be typed.";
  "Both halves already existed and neither knew about the other. One verb writes a call into a block, with its arguments taken from the called function's own parameters, so nothing that arrives here is a line of code. Another binds a name to a piece of written value. So the call is written first, lifted straight back out of the block it was just put in, and handed to the binder as its value - which means the argument filling, the import adding and the await deciding are all done by the verb that already does them, rather than being done again here differently.";
  "Taking it back off the end is safe because it was put on the end a moment earlier and nothing else has run in between. Reading the call out of the tree rather than off what was handed over is what makes the filling count: what goes in is a bare name, and what comes back out is that name with its arguments already written, and waited on when the called function is one that has to be waited on.";
  "A call whose function hands something back arrives already bound to a name the writer chose for itself, out of what the called function calls its own answer. So what is lifted out is the value side of that binding, and the name asked for here replaces the guessed one. A function that hands nothing back has no value side, and the read of the binding fails rather than writing a name bound to nothing.";
  arguments_assert(arguments, 4);
  await js_block_call_add(ast, selects, f_name);
  let body = js_selects_block_body(selects);
  let statement = list_last(body);
  let declarators = js_declaration_declarators_get(statement);
  let declarator = list_single(declarators);
  let value = js_declare_init_get(declarator);
  let code = js_unparse(value);
  list_remove_last(body);
  js_block_local_add_generic(ast, selects, name, code);
}
