import { fn_name } from "./fn_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function command_grantable_run_name_cases() {
  "Command lines written out one by one, each beside the verbs already approved when it ran and the one function a rule would have to name for it to stop asking.";
  "The reading these check decides which interruptions are offered to the human as grantable, so both directions do harm and neither shows up anywhere else. A line wrongly named puts a grant in front of them that cannot pay off; a line wrongly left unnamed hides the grant that would have stopped it, which is the mistake that was actually made - a week of interruptions had three hundred rows in it that a pipe alone had ruled out.";
  "The approved verbs are written into each case rather than read from the settings file, because a corpus that read the live rules would answer differently on the day somebody granted something and stop being a record of anything.";
  "Each command is held as fixed text, since the function names inside are ordinary repo names and the canonicalizing pass would otherwise rewrite them into references and change what the case says.";
  let trimming = ["tail", "head", "grep", "wc", "cd", "echo", "ls", "rm"];
  let cases = [
    {
      name: "a plain call is named, as it always was",
      command: text_frozen("node scripts/ai.mjs hash_fields_all"),
      verbs: trimming,
      run_name: fn_name("hash_fields_all"),
    },
    {
      name: "a call trimmed by tail is named, because granting it makes the whole line allowed",
      command: text_frozen(
        "node scripts/ai.mjs app_shared_text_reader_language_gate_run 2>&1 | tail -10",
      ),
      verbs: trimming,
      run_name: fn_name("app_shared_text_reader_language_gate_run"),
    },
    {
      name: "a time limit in front of the call does not hide it",
      command: text_frozen(
        "timeout 900 node scripts/ai.mjs functions_calls_to_each_candidates | tail -5",
      ),
      verbs: trimming,
      run_name: fn_name("functions_calls_to_each_candidates"),
    },
    {
      name: "a doubled ampersand chains the way a semicolon does, so an approved verb in front is no obstacle",
      command: text_frozen("cd /tmp/x && node scripts/ai.mjs ai_git | tail -3"),
      verbs: trimming,
      run_name: fn_name("ai_git"),
    },
    {
      name: "a redirect writes a file of its own and no grant naming a function reaches it",
      command: text_frozen(
        "node scripts/ai.mjs functions_calls_to_each_candidates > /tmp/x.json 2>&1",
      ),
      verbs: trimming,
      run_name: "",
    },
    {
      name: "a verb nothing approves yet is what would go on prompting, so the line is not offered",
      command: text_frozen(
        "node scripts/ai.mjs ai_git | curl -X POST http://x",
      ),
      verbs: trimming,
      run_name: "",
    },
    {
      name: "a line that reaches no dispatcher at all is named by nothing",
      command: text_frozen(
        "grep -c chapter named.json; grep -c word named.json",
      ),
      verbs: trimming,
      run_name: "",
    },
    {
      name: "a substitution runs a second command inside the first and cannot be folded",
      command: text_frozen("node scripts/ai.mjs ai_git $(cat /tmp/x)"),
      verbs: trimming,
      run_name: "",
    },
    {
      name: "the same trimming verb, before it was approved, leaves the line unanswerable",
      command: text_frozen("node scripts/ai.mjs hash_fields_all | tail -20"),
      verbs: [],
      run_name: "",
    },
  ];
  return cases;
}
