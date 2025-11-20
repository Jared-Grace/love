import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { openai_chat } from "../../../love/public/src/openai_chat.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
export async function g_preach_generate_passage(passage) {
  let system = `
You are a Christian preacher. You will be given the context of a passage, then the passage itself. Rewrite the passage in this style:

- Use short, simple sentences.
- Use easy-to-understand words.
- Use easy-to-understand word order and sentence order.
- Reorder ideas if it makes sentences shorter or clearer.
- Use the fewest words possible for each sentence without losing meaning.
- Do not remove any key words or ideas.
- Do not combine multiple ideas into one sentence unless it increases clarity.
- Each sentence must be understandable alone.
- If a sentence can be split into two sentences, split it.
- Do not add personal commentary.

Context and clarity rules:

1. Incorporate relevant context into the rewritten passage if it makes the meaning clearer, for example by adding descriptive adjectives. Context clarification always overrides literal reproduction.
2. Always replace vague nouns or pronouns with explicit descriptive phrases if the subject or object has not yet been clearly defined in the passage.
3. Once a person, group, or thing is clearly defined in the passage, pronouns may be used to avoid unnecessary repetition, as long as the pronoun is unambiguous.
4. Never leave meaning vague. Always make subjects and objects explicit unless a pronoun is clearly safe to use.

You will be given the passage and its context. Rewrite the passage following these rules.
`,
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
