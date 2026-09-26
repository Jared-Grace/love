import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_groups() {
  arguments_assert(arguments, 0);
  ("the groups the home list folds its lessons into, each named and starting at the lesson number given, and running until the next one starts - the last runs to the end of the list");
  ("Numbers rather than lesson names, because the human gave the groups as ranges of the numbers a learner sees. A lesson moved across a boundary changes the group it shows in, which is what the ranges mean.");
  let groups = [
    {
      title: "Identifiers",
      first: 1,
    },
    {
      title: "Operators",
      first: 11,
    },
    {
      title: "Nested Expressions",
      first: 38,
    },
    {
      title: "Writing output: console.log",
      first: 71,
    },
    {
      title: "Remainder",
      first: 78,
    },
    {
      title: "Math functions",
      first: 97,
    },
    {
      title: "More Expressions",
      first: 103,
    },
    {
      title: "Statements",
      first: 144,
    },
  ];
  return groups;
}
