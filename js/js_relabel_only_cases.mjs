import { text_frozen } from "./text_frozen.mjs";
export function js_relabel_only_cases() {
  "Written-out functions, each saying whether it is a second name for another function and nothing else.";
  "Standing here because the reading is asked at the one moment nobody is watching. A cut has already been made and the files already written when it is put; a yes puts every character back and a no leaves the cut standing. Either way the run finishes cleanly and no gate goes red, so a reading that quietly stopped saying yes would let a whole sweep relabel the repo one function at a time.";
  "The functions that must be let through cost more thought than the ones that must be refused, and there are more of them here for that reason. A refusal that is too eager only undoes good cuts, silently, one at a time.";
  "Each case is frozen text, because the words inside are ordinary repo names and the pass that turns a mentioned name into a reference would rewrite them into something the case no longer tests.";
  let cases = [
    {
      why: "the shape a cut leaves when the run was the whole of what the holder did",
      code: text_frozen(
        'async function holder(a, b) {\n  arguments_assert(arguments, 2);\n  ("what this is for");\n  let r = await piece(a, b);\n  return r;\n}\n',
      ),
      relabel_only_is: true,
    },
    {
      why: "the same shape with nothing to wait for",
      code: text_frozen(
        "function holder(a) {\n  arguments_assert(arguments, 1);\n  let r = piece(a);\n  return r;\n}\n",
      ),
      relabel_only_is: true,
    },
    {
      why: "the holder still does something of its own before it calls the piece",
      code: text_frozen(
        "async function holder(a, b) {\n  arguments_assert(arguments, 2);\n  let c = add(a, b);\n  let r = await piece(c);\n  return r;\n}\n",
      ),
      relabel_only_is: false,
    },
    {
      why: "a parameter handed straight back was set nowhere in this body",
      code: text_frozen(
        "function holder(a) {\n  arguments_assert(arguments, 1);\n  piece(a);\n  return a;\n}\n",
      ),
      relabel_only_is: false,
    },
    {
      why: "a record handed back is the reading next door rather than this one",
      code: text_frozen(
        "function holder(a) {\n  arguments_assert(arguments, 1);\n  let r = piece(a);\n  return {\n    r,\n  };\n}\n",
      ),
      relabel_only_is: false,
    },
    {
      why: "the value handed back was made rather than called for",
      code: text_frozen(
        "function holder(a) {\n  arguments_assert(arguments, 1);\n  let r = [a];\n  return r;\n}\n",
      ),
      relabel_only_is: false,
    },
    {
      why: "a body that hands nothing back is doing something rather than passing it on",
      code: text_frozen(
        "function holder(a) {\n  arguments_assert(arguments, 1);\n  let r = piece(a);\n  show(r);\n}\n",
      ),
      relabel_only_is: false,
    },
  ];
  return cases;
}
