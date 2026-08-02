import { text_frozen } from "./text_frozen.mjs";
export function js_name_value_use_nodes_cases() {
  "Small written-out files, each saying how many places in it hand the name f over as a value rather than calling it.";
  "This reading is one of the three refusals in front of the repair that takes an unread parameter off a function and off every call site at once. A function handed over as a value has its parameter list fixed by whoever ends up calling it, and that caller is nowhere in the file - so a handing-over this reading fails to see becomes a live argument written away in silence.";
  "The fourth case is here because it is the one that was got wrong. A file that only hands the name over and a file that only calls it were both answered correctly while a file doing both stopped the reading altogether, so neither of the simple two would have found it.";
  "Each file is held as fixed text so no rename walks into it.";
  let cases = [
    {
      name: "a file that only calls the name never hands it over",
      code: text_frozen("f(a);\n"),
      value_uses: 0,
    },
    {
      name: "a name written where a call wants an argument is handed over as a value",
      code: text_frozen("g(f);\n"),
      value_uses: 1,
    },
    {
      name: "the import that brought the name in is not a use of it",
      code: text_frozen('import { f } from "./f.mjs";\nf(a);\n'),
      value_uses: 0,
    },
    {
      name: "a file that both calls the name and hands it over sees only the handing over",
      code: text_frozen("g(f);\nf(a);\n"),
      value_uses: 1,
    },
    {
      name: "the name standing at its own declaration is not a use of it",
      code: text_frozen("export function f(a) {\n  return a;\n}\n"),
      value_uses: 0,
    },
    {
      name: "a name written into an object is handed over as a value",
      code: text_frozen("let o = { decoys: f };\n"),
      value_uses: 1,
    },
  ];
  return cases;
}
