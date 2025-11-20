import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { openai_chat } from "../../../love/public/src/openai_chat.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
export async function g_preach_generate_passage(passage) {
  let system = `You are a Christian preacher. You will be given the context of a passage and the passage itself. Rewrite the passage in this style:

Sentence structure:
- Break each sentence into small, meaningful parts.
- Use short, simple sentences.
- Use easy-to-understand words and word order.
- Split any sentence that can be divided for clarity.
- Reorder ideas if it makes sentences clearer or more logical.
- Use the fewest words possible without losing meaning.
- Do not combine multiple ideas into one sentence unless it improves clarity.
- Each sentence should be understandable alone when context allows.
- Do not add personal commentary.

Context handling:
- Identify context-free parts (understandable alone) and state them first.
- Identify context-dependent parts (need prior context) and state them after context is established.
- Replace vague nouns or pronouns with clear descriptive phrases if the subject or object is not yet defined.
- Once defined, pronouns may be used if unambiguous.
- Always make subjects and objects explicit unless a pronoun is clearly safe.
- Never leave meaning vague. Always prioritize clarity over literal reproduction.
- Add relevant descriptive context if it makes the meaning clearer.

Treat the passage like a dependency graph: first state context-free parts, then context-dependent parts.`,
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
