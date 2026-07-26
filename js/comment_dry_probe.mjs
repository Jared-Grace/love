export function comment_dry_probe() {
  `a comment naming ${fn_name("js_fold")} and ${fn_name("folder_user")} but also not_a_function_at_all`;
  let a = 1;
  "a comment with a \"double quote\" and a backslash \\ in it";
  let b = 2;
  "a comment with a `backtick` and a ${dollar_brace}";
  let c = 3;
  let d = "// this is a string, not a comment";
  return [a, b, c, d];
}
