export function g_content_backup_auto_seconds() {
  "How long the backup waits between passes.";
  "A day, and the reason is what the bucket charges rather than how often the content changes.";
  "A pass reads every file, because the listing this project can make is of names only - it cannot say which files changed, so there is nothing to ask for but all of them. That is twenty-odd megabytes a pass against a free allowance of a thousand a day, which an hourly pass would spend more than half of and a daily one spends two hundredths of.";
  "What it costs is a day of edits, and only in the case where the machine is lost before the next pass - the live copy is still in the bucket either way. That is the cheap side of the trade.";
  let seconds = 86400;
  return seconds;
}
