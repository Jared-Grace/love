import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs_stepping } from "./app_learn_js_lesson_code_logged_wrong_programs_stepping.mjs";
export function app_learn_js_lesson_code_logged_wrong_programs(params) {
  arguments_assert(arguments, 1);
  ("a lesson of multi-line programs that write out, whose wrong answers come from wrong programs: the forwards quiz offers what each wrong program writes out, and the backwards quiz offers each wrong program that writes out something other than the answer. Shared by the number lessons of 2026-11-21 (divisors, perfect numbers, primes, Fibonacci, digits, the digit total and Collatz), which differ only in their programs, their wrong programs and their screen above.");
  ("params: name_id and above, as every lesson has; inputs_get, handing back the list of inputs one set of questions is made from; program_of, the right program for one input; wrong_programs_of, the wrong programs for one input; wrong_outputs_of, more wrong answers for the forwards quiz that no single program writes out, often none.");
  ("Each program is remembered with the input it was made from, so the wrong programs are made from the same input rather than read back off the code.");
  let lesson = app_learn_js_lesson_code_logged_wrong_programs_stepping(
    params,
    true,
  );
  return lesson;
}
