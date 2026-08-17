export function app_code_expression_step_value_least() {
  ("the smallest number a step-at-a-time line is allowed to hold or come to: 2");
  (
    "Every number on such a line, and every number a step of it comes to, stays between this and the largest. Held at both ends, a line can be grown one operator at a time without any step ever going below zero, leaving a remainder, or running into numbers a learner would have to work at - which is arithmetic the lesson is not asking about."
  );
  (
    "Two rather than nought or one, because those three make a step that teaches nothing: anything times one is itself, anything minus nought is itself, and a nought anywhere times something is nought whatever else is on the line."
  );
  let least = 2;
  return least;
}
