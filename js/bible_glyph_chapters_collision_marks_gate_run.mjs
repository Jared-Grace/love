import { bible_glyph_chapters_collision_marks_undecided_names_walked } from "./bible_glyph_chapters_collision_marks_undecided_names_walked.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_chapters_collision_marks_baseline_path } from "./bible_glyph_chapters_collision_marks_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
export async function bible_glyph_chapters_collision_marks_gate_run() {
  "QA gate: a picture Bible chapter draws no fresh mark on a shared picture that nothing can tell apart afterwards.";
  "SPLITTING A SHARED PICTURE IS THE PLAN AND EVERY UNDECIDABLE MARK IS A DEBT AGAINST IT. Sixteen pictures each stand for two roots today, and each of those has to end up standing for one - which means every mark already drawn on it has to be told apart first. The interlinear tells most of them apart on its own, and the order of the words tells apart most of the rest, and what is left is a verse somebody has to sit and read. That reading is the whole cost of the plan, so the number of them is the number to hold still.";
  "IT RATCHETS AND DOES NOT COUNT TO NOUGHT, because what it holds is not a mistake. Two of the marks it carries are the Greek emphatic double negative drawn as one picture, which is not a slip - both words really are there and really are one negation - and what to do about it is a decision about the writing system rather than a repair. Measured against nought this gate would be red for a reason nobody could clear, and a gate that is always red is a gate nobody reads.";
  "The number handed back is how many marks were compared, not how many were wrong. On a good day nothing is wrong, which is also what a run that opened no chapter would say, and the count is the one part of the answer that falls when the sweep stops reaching the chapters.";
  let told =
    await bible_glyph_chapters_collision_marks_undecided_names_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let path = bible_glyph_chapters_collision_marks_baseline_path();
  let name_write = fn_name(
    "bible_glyph_chapters_collision_marks_baseline_write",
  );
  let r = await baseline_names_gate_walked_generic(
    walked,
    offenders,
    path,
    "these verses draw a picture two roots share, in a place where neither the interlinear nor the order of the words says which root was meant - write the word in plain English instead, or draw as many marks as the original has words so the two pair off",
    name_write,
  );
  return r;
}
