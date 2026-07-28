import { js_shadowing_rename } from "./js_shadowing_rename.mjs";
export function js_shadowing_rename_lambda(name, name_after) {
  "The shadowing rename with its two names already fixed, left wanting only a";
  "tree - the shape the example runner hands every verb it drives.";
  function lambda(ast) {
    js_shadowing_rename(ast, name, name_after);
  }
  return lambda;
}
