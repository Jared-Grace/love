import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export function qa_gate_said_listed_cases() {
  "Everything a gate said while it was failing, and the offenders a reader must be able to pick out of it.";
  "This reading decides whether a red gate can be shown to be about somewhere else, and a gate that names nobody holds every app in the repo out of a deployment. So the cases that must answer with a name and the cases that must answer with nothing carry equal weight: reading too little blocks work that was never at fault, and reading a sentence as if it were a name lets a gate claim to have named somebody while naming nothing that could ever match.";
  "Written as the run really sees it, not as the gate wrote it. A gate is free to print as it goes, so the lines it printed stand in front of the record it threw, and a reader given only the record would answer every one of these correctly while answering nothing the run ever hands it.";
  let f_name = fn_name("app_shared_bible_verse_line");
  let f_name2 = fn_name("app_shared_bible_verse_line");
  let cases = [
    {
      said: '{"list":["ceb_bible"],"json":{"hint":"gloss chapters explain words the passage does not carry"}}',
      listed: ["ceb_bible"],
      why: "the plain shape: a record thrown on its own, the offender a bare word in the list",
    },
    {
      said: 'instruction files reached: 8\n{"list":["ebible_letter.md"],"json":{"hint":"note(s) in the notes folder are pointed at by nothing"}}',
      listed: ["ebible_letter.md"],
      why: "the gate printed a line of its own before it threw, which is what made a whole-text parse fail and the gate read as naming nobody",
    },
    {
      said: 'a line\nanother line\n{\n "list": [\n  {\n   "bible_folder": "am_ulb"\n  }\n ]\n}',
      listed: ["am_ulb"],
      why: "a record laid out over many lines, after printed lines - both halves at once, and the offender written under a property no other gate uses",
    },
    {
      said: text_combine_multiple([
        '{"list":[{"name":"',
        f_name,
        '","hint":"this function is longer than the ceiling"}]}',
      ]),
      listed: [f_name2],
      why: "an offender written as a record carrying a hint beside its name - the name is a word anything can answer to, the hint is prose and must be left where it is",
    },
    {
      said: "8 functions hold a local that hides a name already in scope",
      listed: [],
      why: "a gate complaining in English names nobody here, and the sentence reader is the one with the answer",
    },
    {
      said: "",
      listed: [],
      why: "nothing said at all, which is what a gate that was never asked leaves behind",
    },
  ];
  return cases;
}
