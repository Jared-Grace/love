import { text_frozen } from "./text_frozen.mjs";
export function js_storage_browser_objects_cases() {
  "Files written out small, each one saying which of the browser's stores it speaks to itself.";
  "The empty answers are the ones that earn their keep. The gate built on this reading measures against what the repo already carried, so a reading that had stopped answering would read as a repo which had just cleaned itself up - and would then let every new file speak straight to the browser unwatched.";
  "One case hands a store to something else whole rather than speaking to it in front of a dot, because that is how one of the two real doors in this repo is written and a reading that only looked in front of a dot would walk past it.";
  "One case gives an ordinary object a field spelled the same way, which is the thing this must not mistake for the browser's own store.";
  "Every name written inside a case is held as fixed text, because the pass that canonicalizes this file would otherwise read a real one as a reference and change what the case says.";
  let cases = [
    {
      code: text_frozen("let held = localStorage.getItem(key);"),
      objects: ["localStorage"],
      why: "the plain shape - a store spoken to in front of a dot, which is what nearly every site doing this looks like",
    },
    {
      code: text_frozen(
        "sessionStorage.setItem(key, value);\nsessionStorage.removeItem(other);",
      ),
      objects: ["sessionStorage"],
      why: "the answer is which stores and not how many lines, so two calls to one store are one answer",
    },
    {
      code: text_frozen(
        "let held = localStorage.getItem(key);\nsessionStorage.setItem(key, held);",
      ),
      objects: ["localStorage", "sessionStorage"],
      why: "a file may speak to both, and both are published in their own way",
    },
    {
      code: text_frozen('let size = property_get(localStorage, "length");'),
      objects: ["localStorage"],
      why: "a store handed to something else whole is the same file speaking to the same browser, and a reading that only looked in front of a dot would walk past one of the two real doors here",
    },
    {
      code: text_frozen("let held = storage_local_specify_get_json(key);"),
      objects: [],
      why: "a function whose whole job is to speak to the browser is the repaired shape, and every reading that watches a stored word starts from names like this one",
    },
    {
      code: text_frozen(
        'let settings = { localStorage: true };\nlet on = property_get(settings, "localStorage");',
      ),
      objects: [],
      why: "a field of somebody's own object spelled the same way is not the browser's store, and the word is asked as a name read as a value so this falls out rather than being ruled out",
    },
    {
      code: text_frozen('("the chapter is kept in localStorage");'),
      objects: [],
      why: "a word the file only says in prose is not a store it speaks to",
    },
  ];
  return cases;
}
