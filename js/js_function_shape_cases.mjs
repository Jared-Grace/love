import { fn_name } from "./fn_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function js_function_shape_cases() {
  "Pairs of written-out functions, each paired with whether the two of them do the same work once the names only their own writer sees have been taken away";
  "Held as pairs rather than as a function beside the shape it comes out as, because the shape is a middle step and its exact text changes every time the shaping learns to leave one more thing alone. What must not change is which pairs are the same piece of work, and that is what every duplicate finder in the repo reads this for";
  "Both answers are carried in numbers, and they have to be. Taking a name away can only ever make two pieces of code look more alike, so a shaping that took away too much would say yes to everything and be right about half of these, and a shaping that took away nothing would say no to everything and be right about the other half. Neither half can tell on its own";
  ("The pairs that must differ are the ones that have actually gone wrong. A word used as the key of an entry in an object was being taken away like any other, so ",
    fn_name("list_get"),
    " and ",
    fn_name("text_get"),
    " - which differ only in whether the thing they name in a complaint is a list or some text - sat in the record as one piece of work for weeks. The word after a dot went the same way earlier, and made four separate roundings of a number look like one function");
  ("Each piece of code is frozen text. The words inside are ordinary repo names, and the pass that turns a mentioned name into a reference would rewrite them into something the case no longer tests");
  let cases = [
    {
      name: "the same work with the private names spelled differently",
      one: text_frozen(
        "export function f(width) {\n  let half = divide(width, 2);\n  return half;\n}\n",
      ),
      other: text_frozen(
        "export function g(w) {\n  let part = divide(w, 2);\n  return part;\n}\n",
      ),
      same: true,
    },
    {
      name: "the same work said differently in the prose above it",
      one: text_frozen(
        'export function f(width) {\n  "halves a width";\n  let half = divide(width, 2);\n  return half;\n}\n',
      ),
      other: text_frozen(
        'export function g(width) {\n  "cuts a width in two, which is not the same sentence at all";\n  let half = divide(width, 2);\n  return half;\n}\n',
      ),
      same: true,
    },
    {
      name: "different words used as the keys of an entry in an object",
      one: text_frozen(
        "export function f(list, index) {\n  let v = { list: list, index: index };\n  return v;\n}\n",
      ),
      other: text_frozen(
        "export function g(s, index) {\n  let v = { s: s, index: index };\n  return v;\n}\n",
      ),
      same: false,
    },
    {
      name: "different words used as short entries, where one word is the key and the value at once",
      one: text_frozen(
        "export function f(list, index) {\n  let v = { list, index };\n  return v;\n}\n",
      ),
      other: text_frozen(
        "export function g(s, index) {\n  let v = { s, index };\n  return v;\n}\n",
      ),
      same: false,
    },
    {
      name: "the same key over privately named things called something else",
      one: text_frozen(
        "export function f(width) {\n  let v = { k: width };\n  return v;\n}\n",
      ),
      other: text_frozen(
        "export function g(w) {\n  let v = { k: w };\n  return v;\n}\n",
      ),
      same: true,
    },
    {
      name: "different words after a dot, which belong to whatever is being asked",
      one: text_frozen(
        "export function f(s) {\n  let v = s.includes(1);\n  return v;\n}\n",
      ),
      other: text_frozen(
        "export function g(t) {\n  let v = t.startsWith(1);\n  return v;\n}\n",
      ),
      same: false,
    },
    {
      name: "different functions called, which is what the work is",
      one: text_frozen(
        "export function f(width) {\n  let v = divide(width, 2);\n  return v;\n}\n",
      ),
      other: text_frozen(
        "export function g(width) {\n  let v = multiply(width, 2);\n  return v;\n}\n",
      ),
      same: false,
    },
  ];
  return cases;
}
