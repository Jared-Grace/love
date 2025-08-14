import { path_resolve } from "./path_resolve.mjs";
export async function git_push_schedule() {
  let result = await path_resolve(".");
  ('schtasks /create /sc daily /st 08:00 /tn "GitPushDaily" /tr "cmd /c cd /d C:\\Users\\chris\\love && git push"');
}
