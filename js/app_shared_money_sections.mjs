import { app_shared_money_section_free } from "./app_shared_money_section_free.mjs";
import { app_shared_money_section_gifts_welcome } from "./app_shared_money_section_gifts_welcome.mjs";
import { app_shared_money_section_used_for } from "./app_shared_money_section_used_for.mjs";
import { app_shared_money_section_tithe } from "./app_shared_money_section_tithe.mjs";
import { app_shared_money_section_never_used_for } from "./app_shared_money_section_never_used_for.mjs";
import { app_shared_money_section_why_receive } from "./app_shared_money_section_why_receive.mjs";
import { app_shared_money_section_purpose_love } from "./app_shared_money_section_purpose_love.mjs";
import { app_shared_money_section_code_public } from "./app_shared_money_section_code_public.mjs";
import { app_shared_money_section_large_download } from "./app_shared_money_section_large_download.mjs";
export function app_shared_money_sections() {
  "What this app does with money, said plainly, each part under the question it answers.";
  "Written down where a reader can see it rather than kept as an understanding among the people running it, because a promise nobody can read is not one anybody can hold you to.";
  "The scriptures are named rather than quoted, because this app is a bible - a reader who wants the words can go and read them here, in whichever translation is theirs.";
  "Each part is asked for by name rather than written out here, so the order they are read in is the only thing this decides. A part is argued rather than listed, so it cannot be turned into another language a line at a time - what it says has to come across whole, in however many lines that language needs - and a part that can be handed over on its own is one that can be turned over on its own, and left alone when its neighbours change.";
  let section = app_shared_money_section_free();
  let section2 = app_shared_money_section_gifts_welcome();
  let section3 = app_shared_money_section_used_for();
  let section4 = app_shared_money_section_tithe();
  let section5 = app_shared_money_section_never_used_for();
  let section6 = app_shared_money_section_why_receive();
  let section7 = app_shared_money_section_purpose_love();
  let section8 = app_shared_money_section_code_public();
  let section9 = app_shared_money_section_large_download();
  let sections = [
    section,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section8,
    section9,
  ];
  return sections;
}
