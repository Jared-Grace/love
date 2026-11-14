import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_worker_stage } from "./calendar_worker_stage.mjs";
import { calendar_worker_routes } from "./calendar_worker_routes.mjs";
import { npx_run } from "./npx_run.mjs";
export async function calendar_worker_deploy_live() {
  arguments_assert(arguments, 0);
  ("Sends the live calendar Worker to its routes on christarose.org. Run it only once the human has entered the real TURNSTILE_SECRET and FACEBOOK_APP_SECRET on it; until then every booking on the live page is refused.");
  let routes = calendar_worker_routes();
  let folder = await calendar_worker_stage(routes);
  let words = ["wrangler", "deploy"];
  let printed = await npx_run(
    words,
    {
      cwd: folder,
    },
    180000,
  );
  return printed;
}
