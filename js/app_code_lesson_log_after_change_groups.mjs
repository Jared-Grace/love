import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_log_after_change_groups() {
  arguments_assert(arguments, 0);
  ("the numbers of a lesson comparing a line written out with n changing around it, as [start, bound, added]: one group each for one, two and three runs");
  let groups = [
    [
      [3, 5, 4],
      [2, 4, 3],
    ],
    [
      [1, 6, 3],
      [2, 5, 2],
    ],
    [
      [1, 9, 3],
      [2, 7, 2],
    ],
  ];
  return groups;
}
