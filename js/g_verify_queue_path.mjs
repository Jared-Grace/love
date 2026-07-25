export function g_verify_queue_path() {
  "Absolute path of the sermon-loop queue file next_books.txt - the curated";
  "next-books order the queue-advance step promotes from. Single source so the";
  "writer functions and the reader agree on one location.";
  let folder = g_sermon_loop_folder();
  let path = path_join([folder, "next_books.txt"]);
  return path;
}
