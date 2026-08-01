import { ai_git_noted } from "./ai_git_noted.mjs";
import { literal_duplicates_unambiguous } from "./literal_duplicates_unambiguous.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_literal_route } from "./function_literal_route.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function literal_duplicates_repair() {
  "Routes every value that a getter in its own family already holds, in exactly the files still spelling it out.";
  "The set is worked out rather than taken, which the single-file verb and the several-file one both refuse to do - and rightly, because they are told which files to touch by whoever read them. Here nobody has to read anything: the narrowed finder has already dropped the two shapes that need a reading, keeping only a word one getter alone claims and only the sites inside that getter's own name family. What is left is not a judgement, so asking a reader to make it once per family was asking them to retype an answer that was already worked out.";
  "That retyping is the whole cost this removes. The gate prints a command per family and the reader runs each one, so a repo with six families to route costs six copied lines, and the copying is where a wrong pair of names gets in.";
  "Asking the same question again afterwards is the only honest way to say it worked, because a repair that routed nothing looks exactly like one that routed everything.";
  "Each file is committed the moment it is routed. A run over many files lasts long enough for somebody else's sweep to reach them first, and what that sweep leaves behind says nothing about how they were changed.";
  await ai_git_noted();
  let offenders = await literal_duplicates_unambiguous();
  let routed = [];
  for (let offender of offenders) {
    let getter_f_name = property_get(offender, "f_name");
    let files = property_get(offender, "files");
    for (let f_name of files) {
      let args = [f_name, getter_f_name];
      await function_call_commit(function_literal_route, args);
      let pair = text_combine_multiple([f_name, " -> ", getter_f_name]);
      list_add(routed, pair);
    }
  }
  let left = await literal_duplicates_unambiguous();
  let r = {
    routed,
    remaining: left,
  };
  return r;
}
