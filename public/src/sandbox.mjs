import { marker } from "../../../love/public/src/marker.mjs";
import { function_run_io_file_wrapper } from "../../../love/public/src/function_run_io_file_wrapper.mjs";
export async function sandbox() {
  marker("1");
  let r = await function_run_io_file_wrapper({
    f_name: "function_read",
    args: ["function_read"],
  });
}
