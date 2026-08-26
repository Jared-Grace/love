import { arguments_assert } from "./arguments_assert.mjs";
import { apps_published_dev_missing } from "./apps_published_dev_missing.mjs";
import { apps_published_dev_baseline_path } from "./apps_published_dev_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function apps_published_dev_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: every app at a public address can still be built here. Read-only.");
  ("Sending is the easy half to keep and the hard half to undo. An address a stranger can");
  ("type in stays reachable long after the work behind it has gone, and the first anybody");
  ("hears of it is a person opening a page nobody can fix. The build here is what makes");
  ("the address answerable for - it is where the page is opened, looked at and put right");
  ("before it goes out again.");
  ("The two folders were one reading until now, so this could not be asked at all: an app");
  ("was published because it existed and existed because it was published, and the two");
  ("could never disagree. Splitting them made the disagreement sayable, and this is the");
  ("half of it worth failing on.");
  ("The other half is not a fault and is not gated. An app built here and not yet sent is");
  ("how every app begins, and most of what stands in the working folder is meant to stay");
  ("there for a while.");
  ("Measured against what the repo already carried rather than against zero, because the");
  ("three it holds are addresses that are not apps and cannot be given a build - and the");
  ("list only shrinks, so a fourth one fails and so does one left recorded after it has");
  ("been put right.");
  let offenders = await apps_published_dev_missing();
  let path = apps_published_dev_baseline_path();
  let hint =
    "these addresses are being served and this repo can no longer build them - give the app a working build, or take the address down";
  let name_write = fn_name("apps_published_dev_baseline_write");
  let r = await baseline_names_gate_generic(offenders, path, hint, name_write);
  return r;
}
