export function ebible_offline_database_open_timeout_ms() {
  "opening the database is near-instant in normal use; well before this the only cause left is another tab holding it, which the reader is told about rather than left waiting on forever";
  let ms = 15000;
  return ms;
}
