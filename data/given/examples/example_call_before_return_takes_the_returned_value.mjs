import { js_call_add_before_return_argument_returned } from "../../../js/js_call_add_before_return_argument_returned.mjs";
export const example = {
  fn: js_call_add_before_return_argument_returned.name,
  args: ["clipboard_copy_value", "value"],
  kind: "transform",
  title: "Add a call above a return and hand it the returned value",
  note: [
    "A generated call arrives holding the ",
    { code: "called" },
    " function's own parameter names, and those name nothing where the call has landed. The file still parses and still looks right, so the mistake waits until somebody runs it. Naming the argument and pointing it at the local the return is about to hand back is what finishes the call — and it is said by name rather than by position, so the called function growing a parameter in front cannot move the value to the wrong slot.",
  ],
  before: `export async function f_copy(a, b) {
  let r = await f(a, b);
  return r;
}`,
  after: `export async function f_copy(a, b) {
  let r = await f(a, b);
  await clipboard_copy_value(r);
  return r;
}`,
};
