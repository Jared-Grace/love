import { app_shared_initialize } from "./app_shared_initialize.mjs";
import { app_shared_refresh } from "./app_shared_refresh.mjs";
export async function app_shared_initialize_refresh(context, app_fn, screens) {
  app_shared_initialize(context, app_fn, screens);
  await app_shared_refresh(context);
}
