import { text_frozen } from "./text_frozen.mjs";
export function js_guard_statements_cases() {
  "Four names beside the guard they should come out as, and beside the word for having refused where one of the four was not a name at all.";
  "Each case hands over the four words a guard is built from and writes down what the two lines came out holding - the name bound, the function asked, the name handed to it, the name tested, and the thing given back - read back out of the tree rather than off the printed line, so how the printer spaces things cannot decide whether the gate is green.";
  "The four that refuse are the point of the corpus. The whole claim this builder makes is that nothing but a name can get in through any of its four slots, and a claim of that kind is only worth what the attempts to break it are worth: a call in the slot handed to the test, a second argument, a call in the slot given back, and a dot where a name should be.";
  "The names inside are frozen text, because the pass that turns a mentioned name into a reference would otherwise rewrite them and the case would stop testing what it was written for.";
  let cases = [
    {
      name: "the commonest guard in the repo - a reading answering with nothing, handed straight back",
      test_fn_name: text_frozen("null_is"),
      tested_name: text_frozen("skip"),
      bound_name: text_frozen("taken"),
      returned_name: text_frozen("null"),
      built: {
        bound: text_frozen("taken"),
        test_fn: text_frozen("null_is"),
        tested: text_frozen("skip"),
        guarded: text_frozen("taken"),
        returned: text_frozen("null"),
      },
    },
    {
      name: "a guard handing back a name it was already holding",
      test_fn_name: text_frozen("list_empty_is"),
      tested_name: text_frozen("items"),
      bound_name: text_frozen("empty_is"),
      returned_name: text_frozen("r"),
      built: {
        bound: text_frozen("empty_is"),
        test_fn: text_frozen("list_empty_is"),
        tested: text_frozen("items"),
        guarded: text_frozen("empty_is"),
        returned: text_frozen("r"),
      },
    },
    {
      name: "a call where the name being asked about should be, which is a whole line of somebody's code arriving through the slot",
      test_fn_name: text_frozen("null_is"),
      tested_name: text_frozen("f(x)"),
      bound_name: text_frozen("taken"),
      returned_name: text_frozen("null"),
      built: null,
    },
    {
      name: "two things where one name should be, so the test would be asked something it was never given",
      test_fn_name: text_frozen("null_is"),
      tested_name: text_frozen("a, b"),
      bound_name: text_frozen("taken"),
      returned_name: text_frozen("null"),
      built: null,
    },
    {
      name: "a call in the one slot the other checks leave open, where a guard would quietly start asking a second question",
      test_fn_name: text_frozen("null_is"),
      tested_name: text_frozen("skip"),
      bound_name: text_frozen("taken"),
      returned_name: text_frozen("g(x)"),
      built: null,
    },
    {
      name: "a dot where a name should be, which reaches inside something instead of naming a function of this repo",
      test_fn_name: text_frozen("a.b"),
      tested_name: text_frozen("skip"),
      bound_name: text_frozen("taken"),
      returned_name: text_frozen("null"),
      built: null,
    },
    {
      name: "a line ending and a second statement behind it, which is the plainest way to smuggle code in and stops at the parse",
      test_fn_name: text_frozen("null_is"),
      tested_name: text_frozen("skip"),
      bound_name: text_frozen("x = 1;\nlet y"),
      returned_name: text_frozen("null"),
      built: null,
    },
  ];
  return cases;
}
