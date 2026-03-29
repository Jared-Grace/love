import { app_replace_rule_set_binary_numbers_goals } from "../../../love/public/src/app_replace_rule_set_binary_numbers_goals.mjs";
export function app_replace_rule_set_binary_numbers() {
  let r = {
    name: "Binary Numbers",
    rules: ["g > b g", "g > b", "b > 0", "b > 1"],
    goals: app_replace_rule_set_binary_numbers_goals("g"),
    why: "The replacement rules generate all non-empty binary numbers by recursively expanding 'g' into sequences of '0's and '1's, demonstrating the construction of binary strings of any length.",
    rules_used: [
      [
        {
          left: ["g"],
          right: ["b", "g"],
        },
        {
          left: ["g"],
          right: ["b"],
        },
        {
          left: ["b"],
          right: ["0"],
        },
      ],
      [
        {
          left: ["b"],
          right: ["1"],
        },
        {
          left: ["g"],
          right: ["b"],
        },
        {
          left: ["b"],
          right: ["0"],
        },
      ],
      [
        {
          left: ["g"],
          right: ["b"],
        },
        {
          left: ["b"],
          right: ["0"],
        },
        {
          left: ["g"],
          right: ["b", "g"],
        },
        {
          left: ["b"],
          right: ["1"],
        },
      ],
      [
        {
          left: ["g"],
          right: ["b"],
        },
        {
          left: ["g"],
          right: ["b", "g"],
        },
        {
          left: ["b"],
          right: ["1"],
        },
      ],
      [
        {
          left: ["b"],
          right: ["0"],
        },
        {
          left: ["g"],
          right: ["b", "g"],
        },
        {
          left: ["b"],
          right: ["1"],
        },
        {
          left: ["g"],
          right: ["b"],
        },
      ],
      [
        {
          left: ["b"],
          right: ["0"],
        },
        {
          left: ["b"],
          right: ["1"],
        },
        {
          left: ["g"],
          right: ["b"],
        },
        {
          left: ["g"],
          right: ["b", "g"],
        },
      ],
    ],
  };
  return r;
}
