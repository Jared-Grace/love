import { g_preach_generate_book_generic } from "../../../love/public/src/g_preach_generate_book_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function g_objection_generate() {
  let bible_folder = "engbsb";
  let book_code = "JAS";
  marker("1");
  const prompt_system = `You will be given a Bible passage and its context. Your task is to generate objections, misunderstandings, or arguments that the given Bible passage would refute.

Rules:
- Output ONLY objections.
- Each objection must be 1–2 sentences.
- Objections must be phrased as natural dialogue from an NPC in a Christian RPG.
- Do NOT quote any Scripture.
- Do NOT mention the verse or passage.
- Do NOT provide explanations, commentary, rebuttals, or meta-text.
- Produce 5–10 distinct objections.
- Keep tone simple and conversational.
- Every output must be a plain list of objections, nothing else.

Output each objection separated by '\\r\\n'. Follow these instructions exactly.`;
  const prompt_user_middle =
    "Generate objections that the following passage would refute; Output 5–10 objections: ";
  let fn = g_objection_generate;
  await g_preach_generate_book_generic(
    bible_folder,
    book_code,
    fn,
    prompt_user_middle,
    prompt_system,
    "sermon",
  );
}
