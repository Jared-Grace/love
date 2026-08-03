import { text_frozen } from "./text_frozen.mjs";
export function js_identifiers_renamed_without_naming_check_cases() {
  "Pieces of code paired with the readers each one walks every word with while writing over a word and never asking which of those words merely names something";
  "Four of the five ask nothing wrong, and they have to be here. The question is made of three parts and a piece of code is only at fault when all three hold, so a reading that answered on any one part alone would call three of these an offence. What is left is the shape that has actually landed three times";
  "Each piece of code is frozen text. The words inside are the names of real readers in this repo, and the pass that turns a mentioned name into a reference would rewrite them into something the case no longer tests";
  let t = text_frozen("js_visit_identifiers_nodes");
  let cases = [
    {
      name: "walks every word and writes over one, having asked nothing",
      code: text_frozen(
        "export function f(ast, name_from, name_to) {\n  let r = property_set_if_equals_curried_right_3('name', name_from, name_to);\n  js_visit_identifiers_nodes(ast, r);\n}\n",
      ),
      walked: [t],
    },
    {
      name: "walks every word and writes over one, having asked which words only name something",
      code: text_frozen(
        "export function f(ast, personal) {\n  let keys = js_identifiers_naming_nodes(ast);\n  function blanked(identifier) {\n    property_set(identifier, 'name', keys);\n  }\n  js_visit_identifiers_nodes(ast, blanked);\n}\n",
      ),
      walked: [],
    },
    {
      name: "walks every word but writes over nothing, so it is a reading and not a rename",
      code: text_frozen(
        "export function f(ast) {\n  let names = [];\n  function each_one(identifier) {\n    list_add(names, identifier);\n  }\n  js_visit_identifiers(ast, each_one);\n  return names;\n}\n",
      ),
      walked: [],
    },
    {
      name: "writes over a word but was handed the words to write over, so it never walked them itself",
      code: text_frozen(
        "export function f(nodes, name_to) {\n  function each_one(node) {\n    property_set(node, 'name', name_to);\n  }\n  each(nodes, each_one);\n}\n",
      ),
      walked: [],
    },
    {
      name: "walks every word and writes over one, having only written short entries out in full",
      code: text_frozen(
        "export function f(ast, name_from, name_to) {\n  js_shorthand_properties_expand(ast, name_from);\n  let r = property_set_if_equals_curried_right_3('name', name_from, name_to);\n  js_visit_identifiers(ast, r);\n}\n",
      ),
      walked: [],
    },
  ];
  return cases;
}
