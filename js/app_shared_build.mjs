import { app_shared_latest_build } from "./app_shared_latest_build.mjs";
import { app_shared_dev_build } from "./app_shared_dev_build.mjs";
export async function app_shared_build(search) {
  "build both of an app's bundles from the one source, together: the latest (staging, then promoted to prod) bundle and the local dev bundle. Building them as a pair is what keeps dev from drifting behind prod — the drift that happens when only one is rebuilt.";
  await app_shared_latest_build(search);
  await app_shared_dev_build(search);
}
