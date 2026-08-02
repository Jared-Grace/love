import { js_shadowing_assign } from "./js_shadowing_assign.mjs";
import { function_transform } from "./function_transform.mjs";
export async function function_shadowing_assign(f_name, name) {
  "clear one finding of the shadowing gate by deciding that the inner line was";
  "meant to write the outer binding: inside this function's file, the word let is";
  "taken off it and it becomes a plain assignment.";
  "Reach for this one, and not the rename beside it, when the lines below the inner";
  "binding were reading the value that line works out. The rename leaves those lines";
  "reading the outer binding, which is right when they always meant it and wrong";
  "when they did not - and when they did not, what they were reading is whatever the";
  "outer binding was started with.";
  function lambda(ast) {
    js_shadowing_assign(ast, name);
  }
  let r = await function_transform(f_name, lambda);
  return r;
}
