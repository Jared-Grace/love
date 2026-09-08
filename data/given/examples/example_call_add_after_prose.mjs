import { js_call_add_after_prose } from "../../../js/js_call_add_after_prose.mjs";
import { js_call_add_first } from "../../../js/js_call_add_first.mjs";
export const example = {
  fn: js_call_add_after_prose.name,
  args: ["date_now_milliseconds"],
  kind: "transform",
  title: "Add a call at the top of the work, under what the function says about itself",
  note: [
    "Wiring a check into a function that explains itself. Its older relative, ",
    { fn: js_call_add_first.name },
    ", adds at the very front of the body — which in a function like this one is ",
    "above the account and above the count of arguments, so the summary every ",
    "reader meets first ends up underneath a line of code. Both places already ",
    "had a body-adder; only the first of them had a call-adder, so until now the ",
    "choice was the wrong place or no command at all. Note that the count of ",
    "arguments is stepped over on the way down: it is written above the account ",
    "here, and it is not what the new line belongs after.",
  ],
  before: `export function f(a) {
  arguments_assert(arguments, 1);
  ("what this function is for");
  run(a);
}`,
  after: `export function f(a) {
  arguments_assert(arguments, 1);
  ("what this function is for");
  let now = date_now_milliseconds();
  run(a);
}`,
};
