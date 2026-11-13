import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_worker_routes } from "./calendar_worker_routes.mjs";
import { calendar_worker_stage } from "./calendar_worker_stage.mjs";
import { path_join } from "./path_join.mjs";
import { npx_run } from "./npx_run.mjs";
export async function calendar_worker_dry_run() {
  arguments_assert(arguments, 0);
  ("Stages the calendar Worker with its live routes and asks wrangler to bundle and check it without sending anything to Cloudflare. A clean answer means the settings are understood and every import bundles.");
  let routes = calendar_worker_routes();
  let folder = await calendar_worker_stage(routes);
  let out_dir = path_join([folder, "dry_run"]);
  let words = ["wrangler", "deploy", "--dry-run", "--outdir", out_dir];
  let printed = await npx_run(
    words,
    {
      cwd: folder,
    },
    120000,
  );
  return printed;
}
