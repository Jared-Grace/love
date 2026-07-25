export function p_command_of_line(line) {
  ("Given one JSONL transcript line, return the normalized `p ` shorthand command");
  ("the user typed - the text after the leading p, whitespace-collapsed so");
  ("re-pastes of the same command compare equal - or empty text when the line is");
  ("not a string-content user message that begins with p.");
  try {
    let event = JSON.parse(line);
    if (event.type !== "user") {
      return "";
    }
    let content = event.message.content;
    let match = content.match(/^p\s+([\s\S]+)/);
    if (match === null) {
      return "";
    }
    let body = match[1];
    let trimmed = body.trim();
    let collapsed = trimmed.replace(/\s+/g, " ");
    return collapsed;
  } catch (e) {
    return "";
  }
}
