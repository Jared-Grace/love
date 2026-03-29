import { property_get } from "../../../love/public/src/property_get.mjs";
import { text_is_assert } from "../../../love/public/src/text_is_assert.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export async function command_line_generic(command, extra) {
  text_is_assert(command);
  const c = await import("child_process");
  let exec = property_get(c, "exec");
  const u = await import("util");
  let promisify = property_get(u, "promisify");
  const execAsync = promisify(exec);
  const options = {
    encoding: "utf8",
  };
  object_merge(options, extra);
  const stdout = await execAsync(command, options);
  return stdout;
}
