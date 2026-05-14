import { app_shared_refresh } from "../../../love/public/src/app_shared_refresh.mjs";
export async function app_shared_initialize_refresh(context, app_fn, screens) {
  app_shared_initialize;
  await app_shared_refresh(context);
}
