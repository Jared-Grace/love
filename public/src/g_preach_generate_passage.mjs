import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { openai_chat } from "../../../love/public/src/openai_chat.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
export async function g_preach_generate_passage(passage) {
  const prompt = `You are a Christian preacher. You will be given the context of a passage and the passage itself. Rewrite the passage as follows:

1. Break sentences into short, meaningful parts.
2. Use short, simple sentences and easy-to-understand words.
3. Introduce the subject and key traits immediately; do not defer clarification.
4. Use active voice whenever possible (e.g., "God gives" instead of "is given by God").
5. Combine ideas naturally for clarity and flow, but avoid redundancy.
6. Split sentences only when necessary for understanding.
7. Reorder ideas if it makes sentences clearer, logical, and immediately understandable.
8. Each sentence should make sense on its own without waiting for later sentences.
9. Identify context-free parts first, then context-dependent parts.
10. Replace vague nouns or pronouns with clear descriptive phrases if the subject or object is not yet defined.
11. Once defined, pronouns may be used if unambiguous.
12. Do not add personal commentary.

Treat the passage like a dependency graph. Output each sentence separated by '\\r\\n'.`;
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
