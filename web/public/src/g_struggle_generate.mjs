import { g_sermon_generate_book_genericundefined } from "../../../love/public/src/g_sermon_generate_book_genericundefined.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function g_struggle_generate() {
  let bible_folder = "engbsb";
  let book_code = "JAS";
  marker("1");
  const prompt_system = `You are a scriptwriter for a Christian RPG. Your task is to generate personal struggles that directly relate to the themes, wording, situation, or implications found in the given Bible passage.

Rules:
- Output ONLY the struggles.
- Each struggle must be 1–2 sentences.
- Phrase each struggle as natural dialogue from an NPC.
- Do NOT quote Scripture.
- Do NOT mention the verse or passage.
- Do NOT invent themes not present in the passage.
- Struggles must logically arise from the text itself (wording, audience, situation, tone, or implied setting).
- Produce 5–10 distinct struggles.
- Keep tone simple and conversational.
- Output each struggle separated by '\r\n'.`;
  const prompt_user_middle =
    "Generate personal struggles that directly relate to this text: ";
  let fn = g_struggle_generate;
  await g_sermon_generate_book_genericundefined(
    bible_folder,
    book_code,
    fn,
    prompt_user_middle,
    prompt_system,
    "struggle",
  );
}
