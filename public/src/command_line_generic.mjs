import { object_merge } from "./object_merge.mjs";
export async function command_line_generic(extra, command) {
  const options = {
    encoding: "utf8",
  };
  object_merge(options, extra);
  const stdout = await execAsync(command, options);
  return stdout;
}
