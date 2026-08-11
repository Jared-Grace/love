import { text_frozen } from "./text_frozen.mjs";
export function js_imports_local_names_cases() {
  "Small written-out files, each saying which local names its import lines bind.";
  "This is the term the free-name question subtracts before anything else, and the free-name";
  "question is what the canonicalizing pass asks to decide which imports to add. So a shape";
  "this reading does not recognise turns into a name that looks bound by nothing, and an";
  "import added beside one the file already had - written in another shape, and therefore";
  "invisible to the reader that was supposed to see it.";
  "The shapes are the whole point, so each is written down on its own: the repo's own";
  "one-name-per-line form, the default form, the whole-module form, renaming on the way in,";
  "several names on one line, and the two forms that bind nothing at all.";
  "Each file is held as fixed text, since the names inside are ordinary repo names and the";
  "canonicalizing pass would otherwise rewrite them into references and change what the case";
  "says.";
  "the names expected back are held as fixed text for the same reason the files are.";
  "Marked as references instead, they would follow a rename while the frozen file";
  "beside them kept the old word, and the pair would stop agreeing over a rename";
  "that changed nothing about what this reading does.";
  let a = text_frozen("list_add");
  let b = text_frozen("list_map");
  ("no case asks for the same name twice, because no file can: two import lines");
  ("binding one word is a syntax error, so the uniqueness the collector keeps is a");
  ("guard against a shape the language does not allow rather than one a case could");
  ("write down.");
  let cases = [
    {
      name: "the repo's own one-name-per-line relative import",
      code: text_frozen('import { list_add } from "./list_add.mjs";\n'),
      local: [a],
    },
    {
      name: "the default binding of another file, whose local name is chosen here",
      code: text_frozen('import list_add from "./list_add.mjs";\n'),
      local: [a2],
    },
    {
      name: "the whole module under one name",
      code: text_frozen('import * as list_add from "./list_add.mjs";\n'),
      local: [a3],
    },
    {
      name: "renamed on the way in - the local name is the one bound, not the exported one",
      code: text_frozen(
        'import { list_add as adding } from "./list_add.mjs";\n',
      ),
      local: ["adding"],
    },
    {
      name: "several names on one line",
      code: text_frozen(
        'import { list_add, list_map } from "./list_add.mjs";\n',
      ),
      local: [a4, b],
    },
    {
      name: "the default and a named one together",
      code: text_frozen(
        'import list_add, { list_map } from "./list_add.mjs";\n',
      ),
      local: [a5, b2],
    },
    {
      name: "a package rather than a file, which binds a local name just the same",
      code: text_frozen('import { readFileSync } from "fs";\n'),
      local: ["readFileSync"],
    },
    {
      name: "an import for its side effect only binds nothing",
      code: text_frozen('import "./list_add.mjs";\n'),
      local: [],
    },
    {
      name: "a file with no import line at all",
      code: text_frozen("export function f(o) {\n  return o;\n}\n"),
      local: [],
    },
    {
      name: "two import lines, both collected, in the order they are written",
      code: text_frozen(
        'import { list_map } from "./list_map.mjs";\nimport { list_add } from "./list_add.mjs";\n',
      ),
      local: [b3, a6],
    },
  ];
  return cases;
}
