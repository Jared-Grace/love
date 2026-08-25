import { arguments_assert } from "./arguments_assert.mjs";
import { text_suffix_without_try } from "./text_suffix_without_try.mjs";
import { js_parse } from "./js_parse.mjs";
import { catch_null } from "./catch_null.mjs";
import { null_is } from "./null_is.mjs";
import { js_list_types_nodes } from "./js_list_types_nodes.mjs";
import { js_nodes_token_entry_is } from "./js_nodes_token_entry_is.mjs";
import { js_nodes_token_handed_is } from "./js_nodes_token_handed_is.mjs";
export function js_source_bare_token_kind(source, bare) {
  "$plain source";
  "$plain bare";
  "What one changed line holding a single word turns out to have been, asked of the whole file that line came from rather than of the line: a value, program, or still neither.";
  "THE FILE IS THE ONLY THING THAT CAN ANSWER IT. An entry of a list, a part of a record written under its own name and an argument of a call broken over several lines are written identically, so the reading that classes lines had to hand this shape back undecided. The word is looked for in the parsed file instead, and where it stands in exactly one of those two settings the doubt is over.";
  "IT STILL ANSWERS NEITHER THREE WAYS, and every one of them is honest. A file that will not parse cannot be asked. A word standing nowhere in it was carried off by the very change being read. A word standing in both settings at once is genuinely both, and picking one would be guessing with more work behind it.";
  "A WORD IS ALL THAT IS MATCHED, not a place in the file. A difference hands over the text of a line and the file it came from, never the two lined up, so a word used twice in one file answers for both of its uses - which is why standing in both settings is answered as neither rather than as the first one found.";
  arguments_assert(arguments, 2);
  let token = text_suffix_without_try(bare, ",");
  function parse_lambda() {
    let parsed = js_parse(source);
    return parsed;
  }
  let ast = catch_null(parse_lambda);
  let unreadable = null_is(ast);
  if (unreadable) {
    let r = "name alone";
    return r;
  }
  let types = [
    "ArrayExpression",
    "ObjectExpression",
    "CallExpression",
    "NewExpression",
    "FunctionDeclaration",
    "FunctionExpression",
    "ArrowFunctionExpression",
  ];
  let nodes = js_list_types_nodes(ast, types);
  let entry_is = js_nodes_token_entry_is(nodes, token);
  let handed_is = js_nodes_token_handed_is(nodes, token);
  let both_is = entry_is && handed_is;
  if (both_is) {
    let r2 = "name alone";
    return r2;
  }
  if (entry_is) {
    let r3 = "data";
    return r3;
  }
  if (handed_is) {
    let r4 = "code";
    return r4;
  }
  let r5 = "name alone";
  return r5;
}
