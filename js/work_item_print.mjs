export function work_item_print(item) {
  "One work item as three lines the human and a Claude read the same way: what it is, why it earns the time, and where to start. The count only shows for a measured item, so its absence is what marks a standing direction rather than a separate label saying so.";
  let count = item.count;
  let suffix = "";
  if (count) {
    suffix = "  (" + count + ")";
  }
  console.log(item.title + suffix);
  console.log("  why: " + item.why);
  console.log("  how: " + item.how);
}
