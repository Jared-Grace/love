import { ai_git_noted } from "./ai_git_noted.mjs";
import { app_shared_text_reader_language_from_missing } from "./app_shared_text_reader_language_from_missing.mjs";
import { app_shared_text_reader_language_from_write } from "./app_shared_text_reader_language_from_write.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { list_add } from "./list_add.mjs";
export async function app_shared_text_reader_language_from_repair() {
  "Writes down, in exactly the functions that never said it, the english each of their translations was made from.";
  "What it writes is a claim about the past - that this translation was made against the english standing beside it now - and that is true of every translation in the folder at the moment this is first run, because each was written in the same sitting as the english above it. Run again later over a translation written against an english since edited, it would write the claim down as though it were true and put out the very fire it was built to raise. So it fills in only what is empty, and a record already standing is left exactly as it is.";
  "Asking the same question again afterwards is the only honest way to say it worked, since a repair that filled nothing in looks identical to one that succeeded.";
  "Each function is committed the moment it is written rather than all of them at the end, because a run over many files lasts long enough that somebody else's sweep takes them first, and what it leaves behind then says nothing about how they were repaired.";
  await ai_git_noted();
  let f_names = await app_shared_text_reader_language_from_missing();
  let written = [];
  for (let f_name of f_names) {
    let args = [f_name];
    await function_call_commit(
      app_shared_text_reader_language_from_write,
      args,
    );
    list_add(written, f_name);
  }
  let remaining = await app_shared_text_reader_language_from_missing();
  let r = {
    written,
    remaining,
  };
  return r;
}
