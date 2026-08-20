export async function folders_waiting_to_be_deleted_overdue() {
  arguments_assert(arguments, 0);
  "Everything that has been waiting for somebody to decide about it for longer than anybody meant it to.";
  "How long each one has waited is read off its own address rather than off the disk's own clock, because a move keeps the times a folder was already carrying and adding a second thing beside it makes the first look younger. Both of those are wrong in the same direction - they say something has waited less than it has - and a bin that under-reports how long its contents have sat there is a bin nobody is ever told about.";
  "Nothing to report when the bin is not there or the drive it is on is not mounted, which is the honest answer in both cases: a machine holding none of the waiting has nobody waiting on it.";
  "What comes back is the date it arrived, then where it came from, then its own name - so a person reading the answer is told how long it has been and what to go and look at, without opening anything.";
  let root = folder_waiting_to_be_deleted_root();
  let there = await file_exists(root);
  if (not(there)) {
    return [];
  }
  let days_max = folder_waiting_to_be_deleted_days_max();
  let today = date_today_iso();
  let day_now = date_iso_days(today);
  let overdue = [];
  let dates = await folder_read(root);
  for (let date of dates) {
    let day_then = date_iso_days(date);
    let waited = subtract(day_now, day_then);
    let late = greater_than(waited, days_max);
    if (not(late)) {
      continue;
    }
    let dated = path_join([root, date]);
    let folders_said = await folder_read(dated);
    for (let folder_said of folders_said) {
      let inner = path_join([dated, folder_said]);
      let names = await folder_read(inner);
      for (let name of names) {
        let spelled = path_join([date, folder_said, name]);
        list_add(overdue, spelled);
      }
    }
  }
  overdue.sort();
  return overdue;
}
