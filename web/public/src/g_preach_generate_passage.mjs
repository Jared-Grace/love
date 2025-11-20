import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { openai_chat } from "../../../love/public/src/openai_chat.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
export async function g_preach_generate_passage(passage) {
  let system = `You are a Christian preacher. You will be given the context of a passage and the passage itself. Rewrite the passage as follows:

1. Break each sentence into very short, meaningful parts.
2. Use short, simple sentences and easy-to-understand words.
3. Split sentences whenever possible for clarity.
4. Reorder ideas if it makes sentences clearer or more logical.
5. Identify context-free parts (understandable alone) and state them first.
6. Identify context-dependent parts (need prior context) and state them after context is established.
7. Replace vague nouns or pronouns with clear descriptive phrases if the subject or object is not yet defined.
8. Once defined, pronouns may be used if unambiguous.
9. Avoid repeating the same idea in multiple sentences.
10. Combine only if necessary for clarity, but do not introduce redundancy.
11. Never leave meaning vague; always prioritize clarity over literal reproduction.
12. Each sentence should be understandable alone whenever possible.
13. Do not add personal commentary.

Treat the passage like a dependency graph: first state context-free parts, then context-dependent parts. Output each sentence separated by '\\r\\n'.`,
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
