import { text_frozen } from "./text_frozen.mjs";
export function js_imports_relative_paths_cases() {
  "Written-out files pinning which import lines name a place on disk and which name a package";
  "The sweep this reader feeds answers nothing at all once the repo is clean, and nothing is also what a reader that had stopped looking would answer. So the cases must fail both ways: one that calls every import dotted breaks the package cases, and one that calls none dotted breaks the rest.";
  "The files are frozen text, because the pass that turns a mentioned name into a reference would otherwise rewrite the names inside them and the case would stop testing what it was written for.";
  let cases = [
    {
      name: "a file in the same folder",
      code: text_frozen(
        'import { not } from "./not.mjs";\nexport function f() {\n  return not(1);\n}\n',
      ),
      paths: ["./not.mjs"],
    },
    {
      name: "a package names no place, so it is left out",
      code: text_frozen(
        'import path from "path";\nexport function f() {\n  return path;\n}\n',
      ),
      paths: [],
    },
    {
      name: "a package beside a file, and only the file is a place",
      code: text_frozen(
        'import path from "path";\nimport { not } from "./not.mjs";\nexport function f() {\n  return [path, not(1)];\n}\n',
      ),
      paths: ["./not.mjs"],
    },
    {
      name: "a path leading out of this folder is a place too",
      code: text_frozen(
        'import { not } from "../../love/js/not.mjs";\nexport function f() {\n  return not(1);\n}\n',
      ),
      paths: ["../../love/js/not.mjs"],
    },
    {
      name: "two files, both named, in the order they are written",
      code: text_frozen(
        'import { not } from "./not.mjs";\nimport { equal } from "./equal.mjs";\nexport function f() {\n  return not(equal(1, 1));\n}\n',
      ),
      paths: ["./not.mjs", "./equal.mjs"],
    },
    {
      name: "nothing imported at all",
      code: text_frozen("export function f() {\n  return 1;\n}\n"),
      paths: [],
    },
  ];
  return cases;
}
