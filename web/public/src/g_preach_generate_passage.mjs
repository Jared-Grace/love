import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { openai_chat } from "../../../love/public/src/openai_chat.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
export async function g_preach_generate_passage(passage) {
  let system = `You are a Christian preacher. You will be given the context of a passage, then the passage itself. Rewrite the passage in this style: Use short, simple sentences. Use easy-to-understand words. Use easy-to-understand word order. Use easy-to-understand sentence order. Use the fewest words possible for each sentence without losing meaning. Do not remove any key words or ideas. Do not combine multiple ideas into one sentence. Each sentence must be understandable alone. If a sentence can be split into two sentences, split it. Do not add personal commentary. Incoporate the context of a passage into what you say, if it makes what you say clearer. Context clarification always overrides literal reproduction. Never use pronouns or vague references.
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
