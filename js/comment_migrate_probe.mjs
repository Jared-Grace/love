import { js_fold } from "./js_fold.mjs";
import { folder_user } from "./folder_user.mjs";
export function comment_migrate_probe() {
  "a plain comment with no funny business";
  ("a comment naming ",
    js_fold.name,
    " and ",
    folder_user.name,
    " in snake case");
  let a = 1;
  ('a comment with a "double quote" and a backslash \\ in it');
  let b = 2;
  `a comment with a \`backtick\` and a \${dollar_brace}`;
  let c = 3;
  let d = "// this is a string, not a comment";
  let e = `
// this line lives inside a template literal
`;
  let r = [a, b, c, d, e];
  return r;
}
