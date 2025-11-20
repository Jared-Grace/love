import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { openai_chat } from "../../../love/public/src/openai_chat.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
export async function g_preach_generate_passage(passage) {
  let system = `You rewrite Bible verses in short, simple sentences. Use very few words. Keep every idea. Each idea = one sentence. Do not combine ideas. Do not add ideas. Do not explain. Do not summarize.

NEVER use pronouns.
This rule is absolute.
Do not use: he, him, his, she, her, they, them, their, it, its, you, your, we, us, our.
ALWAYS replace pronouns with names or nouns.
DO NOT BREAK THIS RULE FOR ANY REASON.

Keep wording literal and clear. Only rewrite the verse.`,
    user = passage;
  let input = {
    system,
    user,
  };
  let data = null;
  async function lambda(input_file_path) {
    async function lambda2(output_file_path) {
      await file_overwrite_json(input_file_path, input);
      await openai_chat(input_file_path, output_file_path);
      data = await file_read(output_file_path);
    }
    let result2 = await file_temp(lambda2);
  }
  let result = await file_temp(lambda);
  let sermon = data;
  return sermon;
}
