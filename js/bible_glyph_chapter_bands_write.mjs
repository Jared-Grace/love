import { bible_glyph_chapter_rosetta_lines_write } from "./bible_glyph_chapter_rosetta_lines_write.mjs";
import { bible_glyph_chapters_tagalog_write } from "./bible_glyph_chapters_tagalog_write.mjs";
import { bible_glyph_chapters_urdu_write } from "./bible_glyph_chapters_urdu_write.mjs";
import { function_list_call_add } from "./function_list_call_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export async function bible_glyph_chapter_bands_write(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter to write the bands of. It names a stretch of text and nothing that runs.";
  arguments_assert(arguments, 1);
  ("Writes every band a newly authored picture Bible chapter needs, and names the one that has to be named: the Rosetta lines, their entry in the register, and both reveal languages refetched.");
  ("IT EXISTS BECAUSE AUTHORING A CHAPTER IS ONE PIECE OF WORK AND REGISTERING IT WAS FOUR. Writing the twenty third psalm meant a Rosetta write, a hand edit adding the file to a register, and a refetch of each reveal language - and two of those four were found afterwards by gates rather than remembered, which is the good case. The bad case is a chapter that ships with a blank key band, which is what the register drifting produced the last time it was kept by hand.");
  ("THE PICTURE CHAPTER ITSELF IS NOT REGISTERED HERE AND THAT IS DELIBERATE. Joining the list of chapters means writing a paragraph saying why this chapter is in it, and that paragraph is the only part of the whole operation a person has to think about. A command that did it would either skip the prose or invent it, and both are worse than the hand edit. So the order is: author the chapter, name it in the list with its reason, then run this.");
  ("AND IT MUST RUN AFTER THAT AND NOT BEFORE, because the two language writers find their own set by reading the list of chapters. Run early they write every band except the new one, report a number one short, and leave exactly the failure they exist to prevent.");
  ("THE REGISTER ENTRY IS ADDED BY THE GENERAL COMMAND rather than spelled out here, because a list holding the results of calls is a shape this repo has twenty two of and the paperwork for joining one is not a fact about Bibles.");
  let f_name = await bible_glyph_chapter_rosetta_lines_write(chapter_code);
  let register = fn_name("bible_glyph_chapters_rosetta_lines");
  await function_list_call_add(register, f_name);
  let tagalog = await bible_glyph_chapters_tagalog_write();
  let urdu = await bible_glyph_chapters_urdu_write();
  let report = {
    chapter_code,
    f_name,
    register,
    tagalog,
    urdu,
  };
  return report;
}
