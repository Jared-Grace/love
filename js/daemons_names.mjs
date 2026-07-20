import { fn_name } from "./fn_name.mjs";
export function daemons_names() {
  ("the repo functions that never return; adding a daemon is adding a name here, and everything else is derived from it");
  ("named without importing them: each daemon drags in a large module graph this list has no use for");
  ("watch (the AST auto-transform-on-save daemon) was intentionally RETIRED 2026-07-20 — please do not re-add it here; it is no longer wanted, canonicalize deliberately instead. Re-adding it, then running daemons_ensure, silently resurrects love_watch.service.");
  let v = [
    fn_name("server"),
    fn_name("webpack_watch"),
    fn_name("git_push_auto"),
  ];
  return v;
}
