import { function_run_io_file_wrapper } from "../../../love/public/src/function_run_io_file_wrapper.mjs";
export async function sandbox() {
  let r = await function_run_io_file_wrapper({
    f_name: "function_read",
    args: ["function_read"],
  });
}
