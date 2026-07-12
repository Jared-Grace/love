import { newline_windows_code } from "./newline_windows_code.mjs";
import { g_objection_generate_property } from "./g_objection_generate_property.mjs";
import { g_sermon_generate_book_generic } from "./g_sermon_generate_book_generic.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function g_objection_generate() {
  let bible_folder = "engbsb";
  let book_code = "JAS";
  let prompt_system = text_combine_multiple([
    "You will be given a Bible passage and its context. Your task is to generate objections, misunderstandings, or arguments that the given Bible passage would refute.\n\nRules:\n- Output ONLY objections.\n- Each objection must be 1–2 sentences.\n- Objections must be phrased as natural dialogue from an NPC in a Christian RPG.\n- Do NOT quote any Scripture.\n- Do NOT mention the verse or passage.\n- Do NOT provide explanations, commentary, rebuttals, or meta-text.\n- Produce 5–10 distinct objections.\n- Keep tone simple and conversational.\n- Every output must be a plain list of objections, nothing else.\n\nOutput each objection separated by ",
    newline_windows_code(),
    ". Follow these instructions exactly.",
  ]);
  let prompt_user_middle =
    "Generate objections that the following passage would refute; Output 5–10 objections: ";
  let fn = g_objection_generate;
  let property_name = g_objection_generate_property();
  let chapter_code_specified = null;
  await g_sermon_generate_book_generic(
    [bible_folder],
    book_code,
    fn,
    prompt_user_middle,
    prompt_system,
    chapter_code_specified,
  );
}
