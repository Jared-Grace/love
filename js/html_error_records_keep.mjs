export function html_error_records_keep() {
  ("how many of a device's errors are kept, newest last - the older ones are dropped as new ones arrive");
  ("A bound rather than a growing list, because the list is what gets sent, and a page that throws inside something that repeats can throw thousands of times in a minute. Kept unbounded, one device in a bad loop would fill its own storage and then send all of it.");
  ("Ten rather than one, because the first error is usually the one worth reading and the ones after it are usually consequences of it - and which is which is only visible when several are side by side.");
  let count = 10;
  return count;
}
