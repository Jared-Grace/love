import { text_frozen } from "./text_frozen.mjs";
export function qa_gate_count_fixed_is_cases() {
  "Small written-out function bodies beside whether the number each one answers with is the size of something spelled into the source rather than something the reading gathered.";
  "The two that count are the two shapes a fixed list arrives in. One is written where it is used; the other has a name of its own and is asked for, which is the commoner of the two, because a set worth naming gets a name. Both are the same number on the run that read everything and on the run that read nothing.";
  "The three that do not count are the three ways this has to let somebody past. A number that was counted up is not a size at all; a list gathered by a call that answers with something worked out is a real reading; and a name arriving from outside the function cannot be followed from here, so it is called honest.";
  "The case asking for a set by name reaches a real function in this repo on purpose. What it is checking is the following of a name one step out of the gate, and a made-up name would check the giving up rather than the following.";
  "Each body is held as fixed text so the canonicalizing pass leaves the names inside it alone.";
  let cases = [
    {
      name: "the size of a list written where it is used",
      code: text_frozen(
        'let names = ["a", "b"]; let n = names.length; return n;',
      ),
      told: {
        fixed: true,
      },
    },
    {
      name: "the size of a set asked for by name, whose whole answer is a written list",
      code: text_frozen(
        "let names = js_operator_function_names(); let n = names.length; return n;",
      ),
      told: {
        fixed: true,
      },
    },
    {
      name: "a number counted up as the reading went, which is not a size of anything",
      code: text_frozen("let walked = 0; return walked;"),
      told: {
        fixed: false,
      },
    },
    {
      name: "the size of a list a call worked out, which is a real reading",
      code: text_frozen(
        "let names = list_map(a, b); let n = names.length; return n;",
      ),
      told: {
        fixed: false,
      },
    },
    {
      name: "the size of a list arriving under a name nothing here binds",
      code: text_frozen("let n = names.length; return n;"),
      told: {
        fixed: false,
      },
    },
  ];
  return cases;
}
