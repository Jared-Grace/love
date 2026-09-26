import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_groups() {
  arguments_assert(arguments, 0);
  ("the groups the home list folds its lessons into, each named and starting at the lesson number given, and running until the next one starts - the last runs to the end of the list");
  ("Numbers rather than lesson names, because the human gave the groups as ranges of the numbers a learner sees. A lesson moved across a boundary changes the group it shows in, which is what the ranges mean.");
  ("Each name is its parts in turn, words then code then words, the way a lesson title with code in it is written - so console.log is shown as code, at the human's request.");
  let groups = [
    {
      parts: ["Identifiers"],
      first: 1,
    },
    {
      parts: [
        "Operators (",
        "+",
        " ",
        "-",
        " ",
        "*",
        " ",
        "/",
        " ",
        "<",
        " ",
        ">",
        " ",
        "<=",
        " ",
        ">=",
        " ",
        "===",
        " ",
        "!==",
        " ",
        "!",
        " ",
        "||",
        " ",
        "&&",
        ")",
      ],
      first: 11,
    },
    {
      parts: ["Nested Expressions"],
      first: 41,
    },
    {
      parts: ["Writing output: ", "console.log"],
      first: 74,
    },
    {
      parts: ["Remainder (", "%", ")"],
      first: 81,
    },
    {
      parts: ["Math functions"],
      first: 100,
    },
    {
      parts: ["More Expressions"],
      first: 106,
    },
    {
      parts: ["Statements"],
      first: 144,
    },
  ];
  return groups;
}
