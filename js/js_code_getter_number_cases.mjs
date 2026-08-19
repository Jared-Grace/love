import { text_frozen } from "./text_frozen.mjs";
export function js_code_getter_number_cases() {
  "Files written out small, each one saying which number the function in it exists to hand back, or nothing when it exists to hand back something else.";
  "This is the twin of the corpus over written-out words, and it is here for a heavier reason. A word routed onto the wrong getter reads wrong to anybody who opens the file. A number does not: every site holding it is replaced by a call, the call returns a number, and the code goes on running and quietly doing something else.";
  "So the empty answers are what this corpus is mostly about. Three of them are numbers standing in a body without being what the body is for - handed to a call, sitting in a written-out list, being compared against - and each of those was once a way to point every site in the repo holding that number at a function that means something entirely different by it.";
  "The two-return case is the one that found a real mistake. A function that gives up part-way through and chooses its value below was read as whichever return came first, so a getter beginning with a nought would have routed every site holding nought onto it. Its neighbour, one return standing on its own line below three sentences of prose, is the shape of every getter in the repo and must still answer, which is what stops the refusal being widened until the reader answers nothing at all.";
  "Every name written inside a case is held as fixed text, so the pass that canonicalizes this file cannot read one as a reference and change what the case says.";
  let cases = [
    {
      code: text_frozen("export function f() {\n  return 180;\n}\n"),
      f_name: text_frozen("f"),
      number: 180,
      why: "handed straight back, which is the plainest getter there is",
    },
    {
      code: text_frozen("export function f() {\n  let v = 180;\n  return v;\n}\n"),
      f_name: text_frozen("f"),
      number: 180,
      why: "given a name and then handed back, which is what the canonicalizing pass writes and so what nearly every getter in the repo looks like",
    },
    {
      code: text_frozen(
        'export function f() {\n  "a sentence saying what this is for.";\n  "a second sentence saying why it is not the other one.";\n  let v = 29;\n  return v;\n}\n',
      ),
      f_name: text_frozen("f"),
      number: 29,
      why: "prose above the value changes nothing, and this is the shape the refusal over several returns must not swallow",
    },
    {
      code: text_frozen("export function f() {\n  return -1;\n}\n"),
      f_name: text_frozen("f"),
      number: -1,
      why: "a number below nought is still a number somebody chose",
    },
    {
      code: text_frozen("export function f() {\n  let v = 0.5;\n  return v;\n}\n"),
      f_name: text_frozen("f"),
      number: 0.5,
      why: "a part of one is written with a dot and is read the same way",
    },
    {
      code: text_frozen(
        "export function f() {\n  if (less_than(n, 5)) {\n    return 0;\n  }\n  return 180;\n}\n",
      ),
      f_name: text_frozen("f"),
      number: null,
      why: "two ways out means this is not a getter, and reading the first of them would have handed back the nought it gives up with - the case that found the mistake",
    },
    {
      code: text_frozen(
        "export function f() {\n  let v = 180;\n  let w = other(v);\n  return w;\n}\n",
      ),
      f_name: text_frozen("f"),
      number: null,
      why: "the number is an argument and the answer is what the call made out of it, so this function hands back that and not the number",
    },
    {
      code: text_frozen(
        "export function f() {\n  let list = [1, 2, 3];\n  return list;\n}\n",
      ),
      f_name: text_frozen("f"),
      number: null,
      why: "numbers written out in a list are the list's contents, and taking the first of them would file the whole list under whichever number happens to come first",
    },
    {
      code: text_frozen(
        "export function f() {\n  let big = greater_than(n, 180);\n  return big;\n}\n",
      ),
      f_name: text_frozen("f"),
      number: null,
      why: "a number being compared against is a limit and not a value, and this is the commonest way a body holds a number it does not mean",
    },
    {
      code: text_frozen("export function f() {\n  let v = 180;\n}\n"),
      f_name: text_frozen("f"),
      number: null,
      why: "nothing is handed back at all, so there is no value here to point anybody at",
    },
    {
      code: text_frozen("export function f(n) {\n  return 180;\n}\n"),
      f_name: text_frozen("f"),
      number: null,
      why: "it is asked for something before it answers, so what it hands back is not one value somebody chose once",
    },
    {
      code: text_frozen("export function g() {\n  return 180;\n}\n"),
      f_name: text_frozen("f"),
      number: null,
      why: "the file holds no function by the name asked about, so there is nothing here to answer for",
    },
  ];
  return cases;
}
