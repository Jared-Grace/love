import { app_code_lesson_console_log_remainder_generic } from "./app_code_lesson_console_log_remainder_generic.mjs";
export function app_code_lesson_expression_remainder_2() {
  "remainder by 2 is the even/odd test: even numbers give 0, odd numbers give 1";
  let divisor = 2;
  let insight = [
    {
      text: "If the number is even, then the remainder is ",
      remainder: 0,
    },
    {
      text: "If the number is odd, then the remainder is ",
      remainder: 1,
    },
  ];
  let lesson = app_code_lesson_console_log_remainder_generic(divisor, insight);
  return lesson;
}
