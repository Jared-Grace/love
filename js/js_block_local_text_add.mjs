import { arguments_assert } from "./arguments_assert.mjs";
import { js_block_local_add_generic } from "./js_block_local_add_generic.mjs";
export function js_block_local_text_add(ast, selects, name, word) {
  arguments_assert(arguments, 4);
  ("Binds a name to a starting piece of text, which is how a message being built");
  ("up over several steps begins - empty, or with the first word already in it.");
  ("One word and no comma, because the splitter that hands a joined list over");
  ("would read a comma as the end of this argument and the start of another.");
  let value_code = JSON.stringify(word);
  js_block_local_add_generic(ast, selects, name, value_code);
}
