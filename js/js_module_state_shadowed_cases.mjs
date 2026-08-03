import { text_frozen } from "./text_frozen.mjs";
export function js_module_state_shadowed_cases() {
  "Small files written out, each one saying which of its own top-level names a";
  "binding inside a function hides.";
  "A gate ratchets against zero off this reader and passes by finding nothing, which";
  "is also what a repo with nothing wrong looks like. The first case must come back";
  "with a name, and that is what tells the two apart.";
  "The false cases carry the edges. A word bound only inside a function is not";
  "shared state and hides nothing. Two functions side by side may each bind the same";
  "word, because neither can see the other. And a top-level function is left out of";
  "the question entirely: it is reachable from anywhere once it lives in its own";
  "file, so a parameter wearing its name hides no state.";
  "Every name written inside a case is held as fixed text, because the pass that";
  "canonicalizes this file would otherwise read a real one as a reference.";
  let cases = [
    {
      code: text_frozen(
        "let dictionary = null;\nexport function look(key) {\n  if (dictionary === null) {\n    let dictionary = read();\n  }\n  return dictionary[key];\n}\n",
      ),
      hidden: ["dictionary"],
      why: "the case the reader exists for - a cache the file shares, filled into a copy that is dropped at the closing brace, so every read of the shared name gets null for the life of the process",
    },
    {
      code: text_frozen(
        "let dictionary = null;\nexport function look(key) {\n  if (dictionary === null) {\n    dictionary = read();\n  }\n  return dictionary[key];\n}\n",
      ),
      hidden: [],
      why: "the same file with the word let taken off - the line writes the shared name, which is what the reader is asking about",
    },
    {
      code: text_frozen(
        "export function look(key) {\n  let dictionary = read();\n  return dictionary[key];\n}\n",
      ),
      hidden: [],
      why: "bound only inside the function, so it is not state the file shares and there is nothing for it to hide",
    },
    {
      code: text_frozen(
        "export function one() {\n  let count = 1;\n  return count;\n}\nexport function two() {\n  let count = 2;\n  return count;\n}\n",
      ),
      hidden: [],
      why: "two functions side by side reusing a word - neither can see the other, so neither hides anything and this must not be reported",
    },
    {
      code: text_frozen(
        "export function read() {\n  return 1;\n}\nexport function look(read) {\n  return read;\n}\n",
      ),
      hidden: [],
      why: "a parameter wearing the name of a function declared at the top level - a function is reachable from its own file anywhere, so it is not shared state and this is the other gate's business",
    },
  ];
  return cases;
}
