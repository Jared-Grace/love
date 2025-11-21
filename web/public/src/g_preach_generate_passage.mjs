import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { openai_chat } from "../../../love/public/src/openai_chat.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
export async function g_preach_generate_passage(passage) {
  const prompt = `You are a Christian preacher. You will be given a passage and its context. Rewrite the passage as follows:

1. Break sentences into very short, simple, meaningful parts. Prefer multiple short sentences over long, concise sentences.
2. Introduce the subject and key traits immediately. Do not defer clarification to later sentences.
3. Express examples or illustrative situations as direct statements.
4. If the context makes the passage clearer, then replace ambiguous words and phrases with explicit descriptions including key traits.
5. Use active voice whenever possible.
6. Reorder and split sentences to make each sentence immediately clear and understandable.
7. Identify context-free parts first, then context-dependent parts.
8. Avoid redundancy.
9. Each sentence must make sense as you read it; do not require future sentences to clarify earlier ones.
10. Combine ideas only when necessary for clarity, but keep sentences short.
11. Do not add personal commentary.

Output each sentence separated by '\\r\\n'. Follow these instructions exactly.`;
  let user = passage;
  let input = {
    system: prompt,
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
