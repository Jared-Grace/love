import { fn_name } from "./fn_name.mjs";
export function daemons_names() {
  ("the repo functions that never return; adding a daemon is adding a name here, and everything else is derived from it");
  ("named without importing them: each daemon drags in a large module graph this list has no use for");
  let v = [
    fn_name("server"),
    fn_name("webpack_watch"),
    fn_name("git_push_auto"),
  ];
  return v;
}
