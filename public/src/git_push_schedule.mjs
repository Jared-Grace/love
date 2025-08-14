import { folder_current } from "./folder_current.mjs";
import { path_resolve } from "./path_resolve.mjs";
export async function git_push_schedule() {
  let paths = folder_current();
  let result = await path_resolve(paths);
  ('schtasks /create /sc daily /st 08:00 /tn "GitPushDaily" /tr "cmd /c cd /d ',
    result,
    ' && git push"');
}
