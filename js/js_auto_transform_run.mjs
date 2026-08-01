import { error_json } from "./error_json.mjs";
export async function js_auto_transform_run(t, ast) {
  "Run one step of the normalize pipeline and, if it gives up, say which step it was. The pipeline runs twenty-three steps over the same tree, so a bare failure message names a predicate that was violated somewhere without naming the step that violated it, and finding the step meant bisecting the list by hand every time.";
  "The failure is re-reported rather than passed through, because the original carries no room to add the name - it is the message of an argument assert raised deep inside a shared helper that has no idea which step called it.";
  try {
    await t(ast);
  } catch (e) {
    let cause = error_readable(e);
    error_json({
      transform: t.name,
      cause,
    });
  }
}
