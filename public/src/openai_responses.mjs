import { openai_chat_completions_generic } from "../../../love/public/src/openai_chat_completions_generic.mjs";
export async function openai_responses(input_file_path, output_file_path) {
  const openai_script_name = "chat_completions";
  await openai_chat_completions_generic(
    openai_script_name,
    input_file_path,
    output_file_path,
  );
}
