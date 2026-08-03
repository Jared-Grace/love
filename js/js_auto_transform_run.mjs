import { error_where } from "./error_where.mjs";
import { error_json } from "./error_json.mjs";
import { error_readable } from "./error_readable.mjs";
export async function js_auto_transform_run(t, ast) {
  "Run one step of the normalize pipeline and, if it gives up, say which step it was. The pipeline runs twenty-three steps over the same tree, so a bare failure message names a predicate that was violated somewhere without naming the step that violated it, and finding the step meant bisecting the list by hand every time.";
  "The failure is re-reported rather than passed through, because the original carries no room to add the name - it is the message of an argument assert raised deep inside a shared helper that has no idea which step called it.";
  "What went wrong is asked for rather than read off the error, because anything at all can be thrown and a thrown thing that is not an error has no message to read - which reported the step by name and then said nothing whatever about why it failed.";
  "Where it came from is said beside what went wrong, because the step's name is not evidence about which file is broken. A step reaches a good deal of the repo to do its work, so a file anywhere along that reach can be the one at fault, and then the step named here is merely the first one whose work happened to touch it. Measured 2026-08-03: a step for adding the word await reported a name that was not defined, and the file missing the line that brings that name in was the file writer, which the step reaches through a cache refresh. Three commands were spent finding it, and the trail had it on its first line.";
  try {
    await t(ast);
  } catch (e) {
    let cause = error_readable(e);
    let where = error_where(e);
    error_json({
      transform: t.name,
      cause,
      where,
    });
  }
}
