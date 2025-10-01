import { command_line_generic } from "../../../love/public/src/command_line_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox_3() {
  marker("1");
  return await command_line_generic("dir", {
    cwd: "C:/Users/chris/repos/karate_code",
  });
}
