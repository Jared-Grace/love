import { fn_name } from "./fn_name.mjs";
export function comment_migrate_probe() {
  "a plain comment with no funny business";
  let f_name = fn_name("js_fold");
  let f_name2 = fn_name("folder_user");
  `a comment naming ${f_name} and ${f_name2} but also not_a_function_at_all`;
  let a = 1;
  ('a comment with a "double quote" and a backslash \\ in it');
  let b = 2;
  ("a comment with a `backtick` and a ${dollar_brace}");
  let c = 3;
  let d = "// this is a string, not a comment";
  let e = `
// this line lives inside a template literal
`;
  let r = [a, b, c, d, e];
  return r;
}
