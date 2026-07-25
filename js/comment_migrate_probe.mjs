export function comment_migrate_probe() {
  // a plain comment with no funny business
  // a comment naming js_fold and folder_user but also not_a_function_at_all
  let a = 1;
  // a comment with a "double quote" and a backslash \ in it
  let b = 2; // this one trails code and must be left alone
  // a comment with a `backtick` and a ${dollar_brace}
  let c = 3;
  let d = "// this is a string, not a comment";
  let e = `
// this line lives inside a template literal
`;
  return [a, b, c, d, e];
}
