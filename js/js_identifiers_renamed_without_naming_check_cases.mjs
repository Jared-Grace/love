import { fn_name } from "./fn_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_identifiers_renamed_without_naming_check_cases() {
  "Pieces of code paired with the readers each one walks every word with while writing over a word and never asking which of those words merely names something";
  "Four of the five ask nothing wrong, and they have to be here. The question is made of three parts and a piece of code is only at fault when all three hold, so a reading that answered on any one part alone would call three of these an offence. What is left is the shape that has actually landed three times";
  "Every reader named inside a piece of code is written as the marker that follows a rename, and only the punctuation around it is frozen. Written the other way round the whole piece of code was frozen, which read as careful and was not: the check beside it names the same readers as markers, so a rename moved the check and left the code here spelling the old word. The case then passed while testing a reader nobody looks for any more, and a case that cannot fail is worse than no case at all";
  let name_walk = fn_name("js_visit_identifiers_nodes");
  let name_walk_plain = fn_name("js_visit_identifiers");
  let name_write = fn_name("property_set");
  let name_write_curried = fn_name("property_set_if_equals_curried_right_3");
  let name_ask_naming = fn_name("js_identifiers_naming_nodes");
  let name_ask_expand = fn_name("js_shorthand_properties_expand");
  let name_add = fn_name("list_add");
  let name_each = fn_name("each");
  let head_rename = text_frozen(
    "export function f(ast, name_from, name_to) {\n  let r = ",
  );
  let between_rename = text_frozen("('name', name_from, name_to);\n  ");
  let tail_rename = text_frozen("(ast, r);\n}\n");
  let code_unasked = text_combine_multiple([
    head_rename,
    name_write_curried,
    between_rename,
    name_walk,
    tail_rename,
  ]);
  let t = text_frozen("export function f(ast, personal) {\n  let keys = ");
  let t2 = text_frozen("(ast);\n  function blanked(identifier) {\n    ");
  let t3 = text_frozen("(identifier, 'name', keys);\n  }\n  ");
  let t4 = text_frozen("(ast, blanked);\n}\n");
  let code_asked = text_combine_multiple([
    t,
    name_ask_naming,
    t2,
    name_write,
    t3,
    name_walk,
    t4,
  ]);
  let t5 = text_frozen(
    "export function f(ast) {\n  let collected = [];\n  function each_one(identifier) {\n    ",
  );
  let t6 = text_frozen("(collected, identifier);\n  }\n  ");
  let t7 = text_frozen("(ast, each_one);\n  return collected;\n}\n");
  let code_reading = text_combine_multiple([
    t5,
    name_add,
    t6,
    name_walk_plain,
    t7,
  ]);
  let t8 = text_frozen(
    "export function f(nodes, name_to) {\n  function each_one(node) {\n    ",
  );
  let t9 = text_frozen("(node, 'name', name_to);\n  }\n  ");
  let t10 = text_frozen("(nodes, each_one);\n}\n");
  let code_handed = text_combine_multiple([t8, name_write, t9, name_each, t10]);
  let t11 = text_frozen("export function f(ast, name_from, name_to) {\n  ");
  let t12 = text_frozen("(ast, name_from);\n  let r = ");
  let code_expanded = text_combine_multiple([
    t11,
    name_ask_expand,
    t12,
    name_write_curried,
    between_rename,
    name_walk_plain,
    tail_rename,
  ]);
  let cases = [
    {
      name: "walks every word and writes over one, having asked nothing",
      code: code_unasked,
      walked: [name_walk],
    },
    {
      name: "walks every word and writes over one, having asked which words only name something",
      code: code_asked,
      walked: [],
    },
    {
      name: "walks every word but writes over nothing, so it is a reading and not a rename",
      code: code_reading,
      walked: [],
    },
    {
      name: "writes over a word but was handed the words to write over, so it never walked them itself",
      code: code_handed,
      walked: [],
    },
    {
      name: "walks every word and writes over one, having only written short entries out in full",
      code: code_expanded,
      walked: [],
    },
  ];
  return cases;
}
