import { text_frozen } from "./text_frozen.mjs";
export function js_imports_relative_named_cases() {
  "Written-out files pinning which names an import line asks a neighbouring file for, and which lines ask for no name at all";
  "The sweep this reader feeds finds nothing once the repo is clean, and a reader that had stopped reading import lines would also find nothing. So the cases must fail both ways: one answering with nothing breaks the lines that do ask, and one answering with every specifier breaks the package line and the two that name no word of the neighbour's.";
  "The files are frozen text, because the pass that turns a mentioned name into a reference would otherwise rewrite the names inside them and the case would stop testing what it was written for.";
  let cases = [
    {
      name: "one name asked of a file in the same folder",
      code: text_frozen(
        'import { not } from "./not.mjs";\nexport function f() {\n  return not(1);\n}\n',
      ),
      asked: [
        {
          path: "./not.mjs",
          name: "not",
        },
      ],
    },
    {
      name: "two names asked on one line, each its own entry",
      code: text_frozen(
        'import { not, equal } from "./both.mjs";\nexport function f() {\n  return not(equal(1, 1));\n}\n',
      ),
      asked: [
        {
          path: "./both.mjs",
          name: "not",
        },
        {
          path: "./both.mjs",
          name: "equal",
        },
      ],
    },
    {
      name: "a package cannot be looked in, so its names are passed over",
      code: text_frozen(
        'import { join } from "path";\nexport function f() {\n  return join("a", "b");\n}\n',
      ),
      asked: [],
    },
    {
      name: "a whole-module import asks for no name the other file wrote",
      code: text_frozen(
        'import * as all from "./all.mjs";\nexport function f() {\n  return all;\n}\n',
      ),
      asked: [],
    },
    {
      name: "a default import names a word the asking line chose",
      code: text_frozen(
        'import own from "./own.mjs";\nexport function f() {\n  return own;\n}\n',
      ),
      asked: [],
    },
    {
      name: "read under another word, the neighbour's own word is the one asked for",
      code: text_frozen(
        'import { not as no } from "./not.mjs";\nexport function f() {\n  return no(1);\n}\n',
      ),
      asked: [
        {
          path: "./not.mjs",
          name: "not",
        },
      ],
    },
  ];
  return cases;
}
