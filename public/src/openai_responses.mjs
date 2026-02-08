import { openai_cmd_py_api } from "../../../love/public/src/openai_cmd_py_api.mjs";
export async function openai_responses(input_file_path, output_file_path) {
  const openai_script_name = "responses";
  await openai_cmd_py_api(
    openai_script_name,
    input_file_path,
    output_file_path,
  );
}
