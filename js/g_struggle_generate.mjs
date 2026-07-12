import { g_sermon_generate_book_generic } from "./g_sermon_generate_book_generic.mjs";
export async function g_struggle_generate() {
  let bible_folder = "engbsb";
  let book_code = "JAS";
  let prompt_system =
    "You are a scriptwriter for a Christian RPG. Your task is to generate personal struggles that directly relate to the themes, wording, situation, or implications found in the given Bible passage.\n\nRules:\n- Output ONLY the struggles.\n- Each struggle must be 1–2 sentences.\n- Phrase each struggle as natural dialogue from an NPC.\n- Do NOT quote Scripture.\n- Do NOT mention the verse or passage.\n- Do NOT invent themes not present in the passage.\n- Struggles must logically arise from the text itself (wording, audience, situation, tone, or implied setting).\n- Produce 5–10 distinct struggles.\n- Keep tone simple and conversational.\n- Output each struggle separated by '\r\n'.";
  let prompt_user_middle =
    "Generate personal struggles that directly relate to this text: ";
  let fn = g_struggle_generate;
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
