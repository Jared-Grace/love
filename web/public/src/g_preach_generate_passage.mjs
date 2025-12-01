import { newline_windows_code } from "../../../love/public/src/newline_windows_code.mjs";
import { g_generate_openai } from "../../../love/public/src/g_generate_openai.mjs";
export async function g_preach_generate_passage(passage) {
  const prompt =
    `You are a Christian preacher. You will be given a passage and its context. Rewrite the passage as follows:

. Break sentences into very short, simple, meaningful parts. Prefer multiple short sentences over long, concise sentences.
. Identify context-free parts first, then context-dependent parts.
. Reorder and split sentences to make each sentence immediately clear and understandable.
. Combine ideas only when necessary for clarity, but keep sentences short.
. Each sentence must make sense as you read it; do not require future sentences to clarify earlier ones.
. Introduce the subject and key traits immediately. Do not defer clarification to later sentences.
. If the context outside the passage provides necessary clarification or describes key traits, include them immediately in the rewritten passage as part of the first sentence(s).
. Avoid redundancy.
. Use active voice whenever possible.
. Express examples or illustrative situations as direct statements.
. Do not add personal commentary.

Output each sentence separated by ` +
    newline_windows_code() +
    `. Follow these instructions exactly.`;
  let sermon = await g_generate_openai(prompt, passage);
  return sermon;
}
