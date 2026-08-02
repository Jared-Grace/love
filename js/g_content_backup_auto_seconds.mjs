export function g_content_backup_auto_seconds() {
  "How long the backup waits between passes.";
  "Six hours, and the reason is what the bucket charges rather than how often the content changes.";
  "A pass now asks each file only what version it is at and fetches the few that moved, so what it spends is no longer twenty-odd megabytes but one question per file - twelve hundred of them, against a free allowance of fifty thousand questions a day. Four passes spend a tenth of that; a pass every hour would spend more than half, which leaves nothing over for the game itself.";
  "What it costs is six hours of edits, and only in the case where the machine is lost before the next pass - the live copy is still in the bucket either way. That is the cheap side of the trade.";
  let seconds = 21600;
  return seconds;
}
