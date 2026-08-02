import { text_frozen } from "./text_frozen.mjs";
export function js_identifiers_rename_unused_number_suffixes_cases() {
  "Small written-out files, each paired with what the file should read like once the made-up numbers have been taken off the names that carry them.";
  "A name the file invented to stand beside another one - `divided2` next to `divided` - is the file's own, and losing the number costs nothing once the plain name is free. A word in the place of a property is not the file's own: it is spelled the way the object being asked spells it, and shortening it asks for a thing that object does not have. Nothing complains, because asking an object for a name it lacks answers nothing at all, so the file goes on running and quietly does the wrong thing.";
  "The last two cases are the real one that went wrong. A compression library was asked for `compressToUTF16` and `decompressFromUTF16`; the pass shortened both to `...UTF`, and the writing and the reading of every compressed text became undefined without a word said. They are held here so that pair of readings can never be shortened again.";
  "Each file is held as fixed text, and so is each answer. Left as references they would follow a rename while the frozen file beside them kept the old word.";
  let cases = [
    {
      name: "a made-up number comes off a name the file reads as a value",
      code: text_frozen(
        "export function f(width) {\n  let divided2 = divide(width, 2);\n  return divided2;\n}\n",
      ),
      renamed: text_frozen(
        "export function f(width) {\n  let divided = divide(width, 2);\n  return divided;\n}\n",
      ),
    },
    {
      name: "a number stays on when the plain name is already taken",
      code: text_frozen(
        "export function f(width) {\n  let divided = 1;\n  let divided2 = divide(width, 2);\n  return [divided, divided2];\n}\n",
      ),
      renamed: text_frozen(
        "export function f(width) {\n  let divided = 1;\n  let divided2 = divide(width, 2);\n  return [divided, divided2];\n}\n",
      ),
    },
    {
      name: "the word right of a dot names a property and keeps its number",
      code: text_frozen(
        "export function f(library, text) {\n  return library.compressToUTF16(text);\n}\n",
      ),
      renamed: text_frozen(
        "export function f(library, text) {\n  return library.compressToUTF16(text);\n}\n",
      ),
    },
    {
      name: "a word used as a key in an object keeps its number",
      code: text_frozen(
        "export function f() {\n  return { decompressFromUTF16: 1 };\n}\n",
      ),
      renamed: text_frozen(
        "export function f() {\n  return { decompressFromUTF16: 1 };\n}\n",
      ),
    },
  ];
  return cases;
}
