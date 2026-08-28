import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_object_key_nodes } from "./js_object_key_nodes.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_ast_literal_named_only } from "./js_ast_literal_named_only.mjs";
export function js_code_literal_entry_key_only(code, literal) {
  arguments_assert(arguments, 2);
  ("Whether every place a file writes a given word, outside its own account of itself, is the word standing before the colon of a written-out record.");
  ("The narrower half of a drop that used to cover the naming of a field in all three of its shapes. Two of those shapes have room for a call - the word inside the brackets of a lookup, and the word handed second to a field call - and the command that routes field names repairs both. This is the third, and it has no room at all: a call written before a colon stops being a call and becomes a field named by the letters of the call, so what would be written there is not a wrong repair but an unparseable one.");
  ("So a file whose only mentions are of this one shape is not a site a report of repeated spellings should offer, for the same reason as a sentence that merely mentions the word: there is nowhere in it for a call to stand. Offering it asks forever for something nobody can do, and the command that answers such a report in one go would stop at that file rather than at the end of its list.");
  ("Deciding that one shape is the whole of what is this one's own. Walking the file, passing over its own prose and requiring that every site found agrees are the same work as for the wider question and are said once next door.");
  ("The record's own keys are gathered once, before the walk rather than during it, because a node is recognised by being one of them and gathering them afresh at every site would read the whole file again per mention.");
  let ast = js_parse(code);
  let keys = js_object_key_nodes(ast);
  function js_code_literal_entry_key_only_key_is(node, stack) {
    let key_is = list_includes(keys, node);
    return key_is;
  }
  let entry_key_only = js_ast_literal_named_only(
    ast,
    literal,
    js_code_literal_entry_key_only_key_is,
  );
  return entry_key_only;
}
