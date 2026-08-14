import { fn_name } from "./fn_name.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { g_sermon_generate_book_generic } from "./g_sermon_generate_book_generic.mjs";
export async function g_dialogue_generate() {
  "Generate, per passage, the person's own lines around it: what they say that the passage answers, and what they say once it has been given.";
  ("Its two neighbours generate only the first of those. ",
    fn_name("g_objection_generate"),
    " and ",
    fn_name("g_struggle_generate"),
    " each return a flat list of opening lines, so a passage landing had no visible effect on the person who heard it. This asks for the pair, which is what makes a turn have a consequence rather than just advancing.");
  ("The after is deliberately allowed to be empty, and most of them should be. A person answering one question a piece at a time simply carries on to the next thing they have to say, and their next line IS their response - an after in front of it only delays it. An after earns its place when the passage changed something. Asking for one every time turns every turn into a small conversion, and the person has agreed with everything by the third.");
  ("Named for what it generates rather than for the unit, because the unit's word is not settled: 'turn' is wanted for what the player experiences on one screen, which is the previous after and this before together, and the authored [before, passage, after] group still needs its own word.");
  let bible_folder = ebible_folder_english();
  let book_code = "JAS";
  let prompt_system =
    'You are a scriptwriter for a Christian RPG. You will be given a Bible passage and its context. Your task is to generate dialogue for one person that the given passage speaks to.\n\nThe dialogue is a run of turns. A turn has three parts:\n- BEFORE: what the person says.\n- PASSAGE: what the player gives in reply. This is the passage you are given. You do not write it.\n- AFTER: what the person says once the passage has been given.\n\nRules for BEFORE:\n- 1–2 sentences of natural spoken dialogue.\n- An objection, misunderstanding, struggle, or argument that the passage answers.\n- Every BEFORE is the same person continuing to answer the one question the player asked them. Each is the next thing they have to say, not a new topic.\n- Do NOT quote Scripture.\n- Do NOT mention the verse or passage.\n- Do NOT invent themes not present in the passage.\n\nRules for AFTER:\n- Leave AFTER empty when the person carries straight on to what they say next. The next BEFORE is their response, and an AFTER would only delay it.\n- Write an AFTER only when the passage changed something for them: they soften, they concede a point, or they are given something to think about.\n- 1 sentence.\n- Do NOT reuse the wording of the BEFORE, or of the next BEFORE.\n- Never concede more than the passage earned. A person who has heard one passage has not been convinced of everything.\n\nOutput:\n- Produce 5–10 turns.\n- Output ONLY a JSON array. Each item is an object with a "before" key and an "after" key. Set "after" to an empty string when there is none.\n- Do NOT provide explanations, commentary, or meta-text.';
  let prompt_user_middle =
    "Generate dialogue for one person that the following passage speaks to; Output 5–10 turns: ";
  let fn = g_dialogue_generate;
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
