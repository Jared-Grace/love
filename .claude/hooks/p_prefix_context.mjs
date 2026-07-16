#!/usr/bin/env node
// UserPromptSubmit hook. When the user's message begins with the bare
// "p " shorthand, surface it as an explicit instruction so it can never
// be read as noise or run blindly.
//
// "p <command>" is the user's established shorthand for: "I was prompted
// for this command elsewhere - evaluate whether the bash-command guard
// should allow it." The right response is to reword the command to use
// only allow-listed verbs, propose a narrow permissions.allow rule, or
// explain why it must keep prompting - NOT to silently execute it.
//
// The recognition lives in this hook (deterministic) rather than in
// Claude's reading of the prompt (probabilistic), because a bare "p "
// prefix was being missed - interpreted as noise while the command ran
// anyway.
import process from "node:process";

let input = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  let prompt = "";
  try {
    prompt = JSON.parse(input).prompt || "";
  } catch {
    process.exit(0);
  }
  let match = prompt.match(/^p (.+)/s);
  if (!match) {
    process.exit(0);
  }
  let command = match[1].trim();
  let context =
    'The user prefixed this message with the "p " shorthand. That means: ' +
    "the command below was prompted for elsewhere, and the user is asking " +
    "you to evaluate whether the bash-command guard should allow it - " +
    "reword it to use only allow-listed verbs, propose a narrow " +
    "permissions.allow rule for it, or explain why it must keep prompting. " +
    'Do NOT treat the "p " as noise, and do NOT simply run the command ' +
    "blindly.\n\nCommand: " +
    command;
  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "UserPromptSubmit",
        additionalContext: context,
      },
    }),
  );
  process.exit(0);
});
