export function js_flow_read_plain(read) {
  "A flow read as plain data that survives being written as JSON: its two maps become lists of key and value pairs, and everything else is lists, words and yes-or-no already.";
  let plain = {
    ...read,
    index: [...read.index],
    aliases: [...read.aliases],
  };
  return plain;
}
