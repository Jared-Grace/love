import { g_preach_generate_book_generic } from "../../../love/public/src/g_preach_generate_book_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function g_struggle_generate() {
  let bible_folder = "engbsb";
  let book_code = "JAS";
  marker("1");
  const prompt_system = `You are a scriptwriter for a Christian RPG. You will be given a Bible passage and its context. Your job is to generate realistic character struggles or personal issues inspired by Bible passages. 

Rules:
- Output ONLY the struggles/issues.
- Each issue must be 1–2 sentences.
- Phrase each issue as natural dialogue from an NPC in the game.
- Do NOT quote Scripture.
- Do NOT mention the Bible passage or verse.
- Produce 5–10 distinct struggles per passage.
- Keep tone simple and conversational.
- Output each struggle separated by '\r\n'.

Output each struggle separated by '\\r\\n'. Follow these instructions exactly.`;
  const prompt_user_middle =
    "Generate personal struggles or issues that characters might be experiencing that relate to this passage; Output 5–10 struggles: ";
  let fn = g_struggle_generate;
  await g_preach_generate_book_generic(
    bible_folder,
    book_code,
    fn,
    prompt_user_middle,
    prompt_system,
    "struggle",
  );
}
