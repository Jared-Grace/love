import { app_code_screens_manifest_path_assert } from "./app_code_screens_manifest_path_assert.mjs";
import { app_code_screens_records } from "./app_code_screens_records.mjs";
import { app_code_screens_crawl_summary } from "./app_code_screens_crawl_summary.mjs";
import { app_code_screens_diff } from "./app_code_screens_diff.mjs";
import { app_code_reload_persists_test } from "./app_code_reload_persists_test.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { property_get } from "./property_get.mjs";
export async function app_code_screens_check(url_prefix, current_path) {
  "the one-command make-sense check, run after a code-app change: crawl every screen once, write the current manifest to current_path, compute the mechanical summary (overflow, blank screens, page errors), run the reload-persistence regression test, and diff the stable text against the committed baseline (data/app_code_screens_baseline.json). Returns { mechanical, reload, diff }: mechanical and reload are the deterministic gates (reload throws if today's refresh bug returns), and diff.changed is the short list of screens whose label/prose/structure moved - which the agent then judges (text plus a screenshot) against the make-sense rubric. After judging and accepting, regenerate the baseline so the next diff is clean";
  let both = await app_code_screens_records_summary(url_prefix);
  let records = property_get(both, "records");
  let mechanical = property_get(both, "summary");
  await app_code_screens_manifest_records_write(records, current_path);
  let reload = await app_code_reload_persists_test(url_prefix);
  let baseline_path = "data/app_code_screens_baseline.json";
  let diff = await app_code_screens_diff(baseline_path, current_path);
  let report = {
    mechanical,
    reload,
    diff,
  };
  return report;
}
