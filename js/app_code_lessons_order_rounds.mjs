import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lessons_order_rounds() {
  arguments_assert(arguments, 0);
  ("How many times each lesson is asked for a line when the course order is being measured.");
  ("A lesson hands out a line built fresh each time, so the hardest line it can reach is found by asking it more than once and keeping the worst answer. One ask would report whatever the first draw happened to be, and a lesson that only sometimes reaches three operators would read as a two-operator lesson on most runs and a three-operator one on the rest.");
  ("Six, because the gate that reads this has to give the same answer twice running or it is worse than nothing. Two whole runs at six were compared over all ninety-eight lessons standing out of place and not one of them differed, which is what a number for a gate has to earn before it is written down.");
  ("Said here rather than at each caller, because the reading and the gate that judges the reading have to ask in the same breath. Two numbers would mean the gate judging a course it had measured differently from the report a person read before changing it.");
  let n = 6;
  return n;
}
