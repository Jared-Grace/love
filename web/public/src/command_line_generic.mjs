import { log } from "../../../love/public/src/log.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { text_is_assert } from "../../../love/public/src/text_is_assert.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export async function command_line_generic(command, extra) {
  text_is_assert(command);
  const r = await import("child_process");
  let exec = property_get(r, "exec");
  const r2 = await import("util");
  let promisify = property_get(r2, "promisify");
  const execAsync = promisify(exec);
  const options = {
    encoding: "utf8",
  };
  object_merge(options, extra);
  const stdout = await execAsync(command, options);
  return stdout;
}
