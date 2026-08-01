import { text_frozen } from "./text_frozen.mjs";
export function js_declare_assign_null_cases() {
  "Written-out declarations pinning which ones the pass may fill in with a value and which it must leave empty";
  "The step this feeds is one of the quietest in the pass. It finishes cleanly whatever it does, and what it leaves behind is only readable or not once somebody writes it back out - so a run where it filled in something it should not have looks, from inside, exactly like a run where it did the right thing.";
  "The half that must be left alone is the half worth writing down. A loop that walks a list or an object is given its value by the walk, so a value written into the header is not a wrong value, it is an unparseable line - and the file the pass had just rewritten would no longer load. That happened to every such loop in the repo, and what noticed was a person editing a file by hand.";
  "Each case is frozen text, because the words inside are ordinary repo names and the pass that turns a mentioned name into a reference would rewrite them into something the case no longer tests.";
  let cases = [
    {
      name: "a declaration with nothing on the right is given one",
      code: text_frozen("let a;\n"),
      filled: 1,
    },
    {
      name: "a declaration that already has something on the right keeps it",
      code: text_frozen("let a = 1;\n"),
      filled: 1,
    },
    {
      name: "two empty declarations are both given one",
      code: text_frozen("let a;\nlet b;\n"),
      filled: 2,
    },
    {
      name: "a loop that walks a list names one thing at a time and takes no value",
      code: text_frozen("for (let item of items) {\n  step(item);\n}\n"),
      filled: 0,
    },
    {
      name: "a loop that walks an object names one key at a time and takes no value",
      code: text_frozen("for (let key in record) {\n  step(key);\n}\n"),
      filled: 0,
    },
    {
      name: "a counting loop declares in its header and does take a value",
      code: text_frozen("for (let i = 0; i < n; i = i + 1) {\n  step(i);\n}\n"),
      filled: 1,
    },
    {
      name: "an empty declaration inside a loop that walks an object is still filled in",
      code: text_frozen("for (let key in record) {\n  let a;\n  step(a);\n}\n"),
      filled: 1,
    },
  ];
  return cases;
}
