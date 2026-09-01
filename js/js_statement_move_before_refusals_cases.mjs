import { text_frozen } from "./text_frozen.mjs";
export function js_statement_move_before_refusals_cases() {
  "Written-out function bodies, each beside the word on the line that would be moved, the word on the line it would come to stand above, and every reason the move is refused.";
  "THREE OF THE FOUR REASONS HAD NEVER ONCE BEEN SEEN TO HAPPEN. A refusal nothing has ever triggered is indistinguishable from a refusal written backwards - both are quiet, both leave the reading answering with an empty list, and an empty list is the word yes. So the value of a corpus here is not that it checks the wording; it is that it makes each branch run at least once, in a place where being wrong is loud.";
  "Half of these cases are here to be answered with nothing, and they are the more important half. Each one puts the shape that triggers a refusal inside a function written on the line rather than on the line itself, and a reading that stopped drawing that line would refuse them - which would refuse the one move this whole reading exists to make. A body whose sections were written above the value they all close over mentions that value inside them everywhere, and every one of those mentions happens after the move either way.";
  "Only what a refusal is ABOUT and which name it names are written down. The wording beside it is a sentence addressed to a person, and pinning sentences here would mean that improving one turns a gate red for no reason anybody would keep.";
  "The words of address are chosen with care, because a line is addressed by a name whose earliest mention in the whole body falls on that line. A line that binds a name something above it already mentions cannot be pointed at by that name, so those lines are given a call of their own to be addressed by.";
  let cases = [
    {
      name: "a line that reads nothing bound between here and there moves freely",
      code: text_frozen(
        "function f() {\n  let a = 1;\n  let b = 2;\n  let c = 3;\n}",
      ),
      address: text_frozen("c"),
      address_before: text_frozen("a"),
      refused: [],
    },
    {
      name: "a line already standing above its target is refused, because this moves lines earlier and never later",
      code: text_frozen(
        "function f() {\n  let a = 1;\n  let b = 2;\n  let c = 3;\n}",
      ),
      address: text_frozen("a"),
      address_before: text_frozen("c"),
      refused: [
        {
          about: "order",
          name: null,
        },
      ],
    },
    {
      name: "a line asked to move above itself is refused the same way",
      code: text_frozen("function f() {\n  let a = 1;\n  let b = 2;\n}"),
      address: text_frozen("a"),
      address_before: text_frozen("a"),
      refused: [
        {
          about: "order",
          name: null,
        },
      ],
    },
    {
      name: "a line reading a name one of the jumped lines binds is refused, and the name is said",
      code: text_frozen("function f() {\n  let a = 1;\n  let b = a;\n}"),
      address: text_frozen("b"),
      address_before: text_frozen("a"),
      refused: [
        {
          about: "unbound",
          name: "a",
        },
      ],
    },
    {
      name: "every such name is said, not only the first",
      code: text_frozen(
        "function f() {\n  let a = 1;\n  let b = 2;\n  let c = combine(a, b);\n}",
      ),
      address: text_frozen("combine"),
      address_before: text_frozen("a"),
      refused: [
        {
          about: "unbound",
          name: "a",
        },
        {
          about: "unbound",
          name: "b",
        },
      ],
    },
    {
      name: "a name read only inside a function written on the moved line is not read here, so the move is free",
      code: text_frozen(
        "function f() {\n  let a = 1;\n  let b = function () {\n    return a;\n  };\n}",
      ),
      address: text_frozen("b"),
      address_before: text_frozen("a"),
      refused: [],
    },
    {
      name: "a jumped line reading the name the moved line binds is refused, and the name is said",
      code: text_frozen(
        "function f() {\n  let p = shared;\n  let shared = fresh();\n}",
      ),
      address: text_frozen("fresh"),
      address_before: text_frozen("p"),
      refused: [
        {
          about: "used",
          name: "shared",
        },
      ],
    },
    {
      name: "a name read only inside a function written on a jumped line is not read there, so the move is free",
      code: text_frozen(
        "function f() {\n  let p = function () {\n    return shared;\n  };\n  let shared = fresh();\n}",
      ),
      address: text_frozen("fresh"),
      address_before: text_frozen("p"),
      refused: [],
    },
    {
      name: "reasons of both kinds are gathered rather than the first one answered",
      code: text_frozen(
        "function f() {\n  let p = shared;\n  let q = 1;\n  let shared = fresh(q);\n}",
      ),
      address: text_frozen("fresh"),
      address_before: text_frozen("p"),
      refused: [
        {
          about: "used",
          name: "shared",
        },
        {
          about: "unbound",
          name: "q",
        },
      ],
    },
    {
      name: "a jumped line that waits is refused, and no name is said because none is at fault",
      code: text_frozen(
        "async function f() {\n  let a = 1;\n  let b = await g();\n  let c = h();\n}",
      ),
      address: text_frozen("c"),
      address_before: text_frozen("a"),
      refused: [
        {
          about: "wait",
          name: null,
        },
      ],
    },
    {
      name: "the moved line waiting is refused too, because it decides when everything after it runs",
      code: text_frozen(
        "async function f() {\n  let a = 1;\n  let b = await g();\n}",
      ),
      address: text_frozen("b"),
      address_before: text_frozen("a"),
      refused: [
        {
          about: "wait",
          name: null,
        },
      ],
    },
    {
      name: "waiting inside a function written on a jumped line is not waiting there, so the move is free",
      code: text_frozen(
        "async function f() {\n  let a = 1;\n  let b = async function () {\n    return await g();\n  };\n  let c = h();\n}",
      ),
      address: text_frozen("c"),
      address_before: text_frozen("a"),
      refused: [],
    },
  ];
  return cases;
}
