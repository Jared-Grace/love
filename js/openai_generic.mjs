import { text_is_assert_multiple_json } from "./text_is_assert_multiple_json.mjs";
import { file_temp } from "./file_temp.mjs";
import { file_read } from "./file_read.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function openai_generic(fn, system, user) {
  text_is_assert_multiple_json([system, user], {
    hint: "the system and user prompts should both be text",
  });
  let input = {
    system,
    user,
  };
  let data = null;
  async function lambda(input_file_path) {
    async function lambda2(output_file_path) {
      await file_overwrite_json(input_file_path, input);
      await fn(input_file_path, output_file_path);
      data = await file_read(output_file_path);
    }
    let result2 = await file_temp(lambda2);
  }
  let result = await file_temp(lambda);
  return data;
}
