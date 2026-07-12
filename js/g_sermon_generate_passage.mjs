import { newline_windows_code } from "./newline_windows_code.mjs";
import { openai_chat_completions } from "./openai_chat_completions.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function g_sermon_generate_passage(passage) {
  let prompt = text_combine_multiple([
    "You are a Christian preacher. You will be given a passage and its context. Rewrite the passage as follows:\n\n. Break sentences into very short, simple, meaningful parts. Prefer multiple short sentences over long, concise sentences.\n. Identify context-free parts first, then context-dependent parts.\n. Reorder and split sentences to make each sentence immediately clear and understandable.\n. Combine ideas only when necessary for clarity, but keep sentences short.\n. Each sentence must make sense as you read it; do not require future sentences to clarify earlier ones.\n. Introduce the subject and key traits immediately. Do not defer clarification to later sentences.\n. If the context outside the passage provides necessary clarification or describes key traits, include them immediately in the rewritten passage as part of the first sentence(s).\n. Avoid redundancy.\n. Use active voice whenever possible.\n. Express examples or illustrative situations as direct statements.\n. Do not add personal commentary.\n\nOutput each sentence separated by ",
    newline_windows_code(),
    ". Follow these instructions exactly.",
  ]);
  let sermon = await openai_chat_completions(prompt, passage);
  return sermon;
}
