import { text_frozen } from "./text_frozen.mjs";
export function js_name_taken_is_cases() {
  "Written-out modules, each with a name asked about and whether the file already has that name for something of its own.";
  "Asked before a rename hands a file a name it did not have, so a wrong no is the answer that does harm: the rename lands on a word the file was already using and the two meanings become one. A wrong yes only refuses a rename that would have been fine.";
  "There is a case per kind of binding rather than one for the obvious kind, because this reads every kind through one shared reading, and the two kinds that reading was missing - a caught name and the name a function expression carries for itself - are exactly the ones nothing here would have noticed the loss of.";
  let cases = [
    {
      name: "a declared name is taken",
      code: text_frozen("let x = 1;"),
      asked: "x",
      taken: true,
    },
    {
      name: "an imported name is taken",
      code: text_frozen('import { each } from "./each.mjs";'),
      asked: "each",
      taken: true,
    },
    {
      name: "a caught name is taken",
      code: text_frozen("try {\n  g();\n} catch (oops) {}"),
      asked: "oops",
      taken: true,
    },
    {
      name: "a function expression's own name is taken",
      code: text_frozen("let h = function inner() {};"),
      asked: "inner",
      taken: true,
    },
    {
      name: "a name the file never binds and never brings in is free",
      code: text_frozen("let x = 1;"),
      asked: "y",
      taken: false,
    },
  ];
  return cases;
}
