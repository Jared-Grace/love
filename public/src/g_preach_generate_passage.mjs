import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { openai_chat } from "../../../love/public/src/openai_chat.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
export async function g_preach_generate_passage(passage) {
  const prompt = `You are a Christian preacher. You will be given a passage and its context. Rewrite the passage as follows:

1. Break sentences into very short, simple, meaningful parts.
2. Introduce the subject and key traits immediately. Do not defer clarification to later sentences.
3. Replace vague references like "that man" or "this person" with explicit descriptions including key traits.
4. Use active voice whenever possible (e.g., "God gives" instead of "is given by God").
5. Split and reorder sentences to make each sentence immediately clear and understandable.
6. Identify context-free parts first, then context-dependent parts.
7. Avoid redundancy; do not repeat ideas unnecessarily.
8. Each sentence must make sense as you read it; do not require future sentences to clarify earlier ones.
9. Do not add personal commentary.

Output each sentence separated by '\\r\\n'.`;
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
