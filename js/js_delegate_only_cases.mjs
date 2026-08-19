import { text_frozen } from "./text_frozen.mjs";
export function js_delegate_only_cases() {
  "Written-out functions, each saying whether the whole of what it does is make some values and hand them to one call.";
  "Standing here for the same reason as the two beside it: the reading is asked at the one moment nobody is watching. A cut has already been made and the files already written when it is put; a yes puts every character back and a no leaves the cut standing. Either way the run finishes cleanly and no gate goes red, so a reading that quietly stopped saying yes would let a sweep move whole bodies one function at a time and call it progress.";
  "The functions that must be let through cost more thought than the ones that must be refused, and there are more of them here for that reason. A refusal that is too eager only undoes good cuts, silently, one at a time.";
  "Each case is frozen text, because the words inside are ordinary repo names and the pass that turns a mentioned name into a reference would rewrite them into something the case no longer tests.";
  let cases = [
    {
      why: "three names set and passed on, which is the shape a cut leaves when the run took everything that mattered",
      code: text_frozen(
        'async function holder(a) {\n  arguments_assert(arguments, 1);\n  ("what this is for");\n  let b = one(a);\n  let c = two(b);\n  let d = three(c);\n  await piece(d);\n}\n',
      ),
      delegate_only_is: true,
    },
    {
      why: "the same shape with nothing to wait for",
      code: text_frozen(
        "function holder(a) {\n  arguments_assert(arguments, 1);\n  let b = one(a);\n  piece(b);\n}\n",
      ),
      delegate_only_is: true,
    },
    {
      why: "a record is handed back, so the body kept something of the call and the reading next door is the one to ask",
      code: text_frozen(
        "function holder(a) {\n  arguments_assert(arguments, 1);\n  let b = one(a);\n  let r = piece(b);\n  return r;\n}\n",
      ),
      delegate_only_is: false,
    },
    {
      why: "the body goes on doing something after the call, so the call is a step rather than the whole of it",
      code: text_frozen(
        "function holder(a) {\n  arguments_assert(arguments, 1);\n  let b = one(a);\n  piece(b);\n  show(b);\n}\n",
      ),
      delegate_only_is: false,
    },
    {
      why: "a line above the call does something rather than set a name, so the body has work the call does not account for",
      code: text_frozen(
        "function holder(a) {\n  arguments_assert(arguments, 1);\n  clear(a);\n  let b = one(a);\n  piece(b);\n}\n",
      ),
      delegate_only_is: false,
    },
    {
      why: "a body that stops early asks a question of its own, whatever it ends on",
      code: text_frozen(
        "function holder(a) {\n  arguments_assert(arguments, 1);\n  let b = one(a);\n  if (b) {\n    return;\n  }\n  piece(b);\n}\n",
      ),
      delegate_only_is: false,
    },
    {
      why: "the last line is a name being set rather than a call standing on its own",
      code: text_frozen(
        "function holder(a) {\n  arguments_assert(arguments, 1);\n  let b = one(a);\n  let c = piece(b);\n}\n",
      ),
      delegate_only_is: false,
    },
    {
      why: "one line on its own is a different shape with a different answer, and is left to the readings beside this one",
      code: text_frozen(
        "function holder(a) {\n  arguments_assert(arguments, 1);\n  piece(a);\n}\n",
      ),
      delegate_only_is: false,
    },
  ];
  return cases;
}
