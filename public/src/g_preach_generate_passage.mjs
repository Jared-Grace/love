import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { openai_chat } from "../../../love/public/src/openai_chat.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
export async function g_preach_generate_passage(passage) {
  const prompt = `You are a Christian preacher. You will be given the context of a passage and the passage itself. Rewrite the passage as follows:

1. Break each sentence into short, meaningful parts.
2. Use short, simple sentences and easy-to-understand words.
3. Introduce key traits, subjects, or clarifying details immediately; do not defer them to later sentences.
4. Combine ideas naturally when it improves clarity and readability, but avoid redundancy.
5. Split sentences only when necessary for understanding.
6. Reorder ideas if it makes sentences clearer, logical, and immediately understandable.
7. Identify context-free parts (understandable alone) and state them first.
8. Identify context-dependent parts (need prior context) and state them after context is established.
9. Replace vague nouns or pronouns with clear descriptive phrases if the subject or object is not yet defined.
10. Once defined, pronouns may be used if unambiguous.
11. Never leave meaning vague; always prioritize clarity over literal reproduction.
12. Each sentence should make sense as you read it, without waiting for later sentences.
13. Do not add personal commentary.

Treat the passage like a dependency graph: first state context-free parts, then context-dependent parts. Output each sentence separated by '\\r\\n'.`;
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
