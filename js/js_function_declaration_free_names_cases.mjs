import { text_frozen } from "./text_frozen.mjs";
export function js_function_declaration_free_names_cases() {
  "Small written-out functions, each saying which names its body reaches for from outside itself - what it calls and what it leans on";
  "Imports are not subtracted by this reading, which is what makes it different from the whole-module one and what makes a corpus necessary. A file that imports everything it reads would answer nothing to the module question and still answer plenty here, so the two cannot borrow each other's cases";
  "The cases carry both directions. Some must name something, so a reading gone quiet fails here; some must name nothing, so a reading that calls every word free fails too. A reading that had stopped subtracting would pass a corpus of the first kind alone, which is exactly the fault this was written after";
  "The written-out functions are held as fixed text, because the pass that canonicalizes an edited file would otherwise read the names inside them as references and rewrite the very thing each case is written to say";
  let outer = text_frozen("outer_shade");
  let outer2 = text_frozen("outer_shade");
  let cases = [
    {
      name: "a name the body calls and nothing inside it binds",
      code: text_frozen(
        "export function f() {\n  return paint(1);\n}\n",
      ),
      free: [text_frozen("paint")],
    },
    {
      name: "the words the function is handed",
      code: text_frozen(
        "export function f(shade, width) {\n  return [shade, width];\n}\n",
      ),
      free: [],
    },
    {
      name: "a word handed to a function written inside this one",
      code: text_frozen(
        "export function f() {\n  function inner(shade) {\n    return shade;\n  }\n  return inner(1);\n}\n",
      ),
      free: [],
    },
    {
      name: "an error the body catches",
      code: text_frozen(
        "export function f() {\n  try {\n    return 1;\n  } catch (trouble) {\n    return trouble;\n  }\n}\n",
      ),
      free: [],
    },
    {
      name: "a name the body binds for itself",
      code: text_frozen(
        "export function f() {\n  let held = 1;\n  return held;\n}\n",
      ),
      free: [],
    },
    {
      name: "an import is deliberately not subtracted here",
      code: text_frozen(
        'import { outer_shade } from "./outer_shade.mjs";\nexport function f() {\n  return outer_shade;\n}\n',
      ),
      free: [outer],
    },
    {
      name: "the name after the colon in a pair is read; the key is not",
      code: text_frozen(
        "export function f() {\n  return { shade: outer_shade };\n}\n",
      ),
      free: [outer2],
    },
  ];
  return cases;
}
