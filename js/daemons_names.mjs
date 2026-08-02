import { fn_name } from "./fn_name.mjs";
export function daemons_names() {
  "the repo functions that never return; adding a daemon is adding a name here, and everything else is derived from it";
  "named without importing them: each daemon drags in a large module graph this list has no use for";
  ("watch (the AST auto-transform-on-save daemon) was intentionally RETIRED 2026-07-20 — please do not re-add it here; it is no longer wanted, canonicalize deliberately instead. Re-adding it, then running ",
    fn_name("daemons_ensure"),
    ", silently resurrects love_watch.service.");
  let f_name = fn_name("server");
  let f_name2 = fn_name("webpack_watch");
  let f_name3 = fn_name("git_push_auto");
  let f_name4 = fn_name("g_content_backup_auto");
  let v = [f_name, f_name2, f_name3, f_name4];
  return v;
}
