export function permission_prompt_fetch_tool() {
  "The name of the tool whose permission rule names one web site at a time.";
  "It is written once here because two places need to agree on it and neither owns it: the counting, which labels a call by the rule that would cover it, and anything later that reads those labels back. A word spelled twice can be corrected once.";
  let name = "WebFetch";
  return name;
}
