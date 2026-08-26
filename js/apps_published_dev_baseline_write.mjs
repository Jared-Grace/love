import { apps_published_dev_missing } from "./apps_published_dev_missing.mjs";
import { apps_published_dev_baseline_path } from "./apps_published_dev_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function apps_published_dev_baseline_write() {
  "Rewrite the record of published addresses with no working build here, from what is on";
  "disk right now. For seeding it once, and for shrinking it after one of them has been";
  "given a build or taken down - never for blessing a new one, which is the single thing";
  "the gate exists to refuse.";
  "What it holds today is three addresses that are not apps at all and never will be: the";
  "page shown when nothing else matched, an old address kept alive so that a link people";
  "saved still lands somewhere, and a dated copy of an app frozen as it stood. None of";
  "those can be built, so recording them is the honest answer rather than a let-off - and";
  "recording them by name is what lets a fourth one fail.";
  let known = await apps_published_dev_missing();
  let path = apps_published_dev_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these addresses are being served and this repo cannot build them - give the app a working build, or take the address down, rather than recording it as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
