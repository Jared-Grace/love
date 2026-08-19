import { text_frozen } from "./text_frozen.mjs";
export function js_statements_grouping_worthless_cases() {
  "Written-out functions, each saying whether the run of lines in it would be worth acting on if it turned up in two functions at once.";
  "The judgment behind them decides what the three readings over shared shape are allowed to find, and it is written as four refusals joined by or. A refusal that reaches too wide empties a whole reading and the run still comes out green, because a reading that finds nothing and a reading that finds nothing wrong print the same thing. So each refusal wants a case it must say yes to and a near neighbour it must say no to.";
  "The pair that matters most is the last two. A return standing as the run's own last line is the shape of nearly every shared ending in the repo, so counting it would quietly take the reading over endings down to nothing; a return part-way through cannot be given a name at all. The two are one line apart in the code and a world apart in what they cost, and nothing but a case says which way round they go.";
  let cases = [
    {
      name: "a run ending in its own return is worth a name",
      code: text_frozen(
        "function f() {\n  let a = one(x);\n  let b = two(a);\n  return b;\n}",
      ),
      worthless: false,
    },
    {
      name: "a run giving up part-way through cannot be given a name",
      code: text_frozen(
        "function f() {\n  let a = one(x);\n  if (a) {\n    return null;\n  }\n  let b = two(a);\n  return b;\n}",
      ),
      worthless: true,
    },
    {
      name: "a return sitting inside the last line rather than being it is counted",
      code: text_frozen(
        "function f() {\n  let a = one(x);\n  if (a) {\n    return null;\n  }\n}",
      ),
      worthless: true,
    },
    {
      name: "a going-round-again matched by its own loop inside the run is not counted",
      code: text_frozen(
        "function f() {\n  let a = one(x);\n  for (let i of a) {\n    continue;\n  }\n}",
      ),
      worthless: false,
    },
    {
      name: "a run reading nothing from outside itself is constants written out",
      code: text_frozen("function f() {\n  let a = 1;\n  let b = 2;\n}"),
      worthless: true,
    },
    {
      name: "a run that is nothing but constants fetched by name is already shared",
      code: text_frozen(
        "function f() {\n  let a = one();\n  let b = two();\n}",
      ),
      worthless: true,
    },
    {
      name: "a run that is nothing but one thing being taken apart has nothing to collapse onto",
      code: text_frozen(
        'function f() {\n  let a = property_get(r, "a");\n  let b = property_get(r, "b");\n}',
      ),
      worthless: true,
    },
    {
      name: "pieces lifted out of two different things are two readings spelt alike",
      code: text_frozen(
        'function f() {\n  let a = property_get(r, "a");\n  let b = property_get(s, "b");\n}',
      ),
      worthless: false,
    },
  ];
  return cases;
}
