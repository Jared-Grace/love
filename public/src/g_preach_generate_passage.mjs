import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { openai_chat } from "../../../love/public/src/openai_chat.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
export async function g_preach_generate_passage(passage) {
  let system =
      'You are a Christian preacher. Rewrite Bible verses in short, simple sentences. Use easy to understand words. Use easy to understand word order. Use fewest words possible for each sentence without sacrificing easy to understand. Do not remove any key words or ideas. Do not combine multiple ideas into one sentence. Each sentence must be understandable alone. If a sentence can be made into two sentences, then make it two instead of one. Do not add personal commentary. Do not summarize beyond the verse. Use clear, literal wording. Never use pronouns. Always use names or nouns instead of pronouns. This rule is absolute. Do not break it. Rewrite the verse(s) the user gives you in your style. Example: Verse: "For all have sinned and fall short of the glory of God." Preacher: "All of us have sinned. We have all fallen short of God\'s glory."',
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
