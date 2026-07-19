import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function function_github_url(fn_name) {
  // A repo function's source file on GitHub (convention: one fn per js/<fn>.mjs,
  // on main). Lets the fn name — the strong, rename-safe reference — be clicked
  // straight through to its source.
  let v = text_combine_multiple([
    "https://github.com/Jared-Grace/love/blob/main/js/",
    fn_name,
    ".mjs",
  ]);
  return v;
}
