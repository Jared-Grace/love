import { fn_name } from "./fn_name.mjs";
export function functions_auto_machine_read_only() {
  "The only functions touching the machine directly that a grant nobody read may reach: each one reads, or works something out, and none changes a file or sends anything.";
  "★ THE LIST SAYS WHAT IS ALLOWED, NOT WHAT IS FORBIDDEN. A roster of dangerous steps is safe only while nobody adds a dangerous step it does not name, and in 2026 a function writing a shell startup file and one sending a secret to any address both passed the check, because neither step was on the roster. Anything new touching the machine now asks until a person adds it here, so forgetting costs a prompt and never a hole.";
  "The last nine are plain helpers that only look like they reach out: they name a built-in the reader cannot place, or hold a list of risky words as data. Most of the repo stands on them, so without them the check refused everything, and a check that refuses everything proves nothing.";
  "Each is read for what it does when it runs as a program. Several also have a branch for a page, which a command line never takes.";
  "A read can fetch a secret, and that is allowed on purpose: the check refuses every way of sending it anywhere, and a command that prints it prints it to the person's own session.";
  "The walk stops at these rather than going through, so each one's source counts toward the pin: a later edit to any of them spoils it and self-granting stops.";
  "The names are spelled rather than imported, for the reason the seam roster gives: an import would make this list reach what it names.";
  let names = [
    fn_name("file_read"),
    fn_name("file_exists"),
    fn_name("file_root_exists"),
    fn_name("file_size"),
    fn_name("folder_read"),
    fn_name("folder_read_files"),
    fn_name("folder_exists"),
    fn_name("folder_current_absolute"),
    fn_name("folder_current_logical"),
    fn_name("folder_home"),
    fn_name("path_modified_ms"),
    fn_name("repo_current_name"),
    fn_name("random_seed_get"),
    fn_name("random_seed_set"),
    fn_name("sha256_hash"),
    fn_name("md5_base64"),
    fn_name("js_format"),
    fn_name("cpu_count"),
    fn_name("machine_load_average"),
    fn_name("machine_name"),
    fn_name("property_name_internal_not_assert_object"),
    fn_name("property_name_internal_names"),
    fn_name("browser_is"),
    fn_name("sleep"),
    fn_name("buffer_text_to"),
    fn_name("module_acorn_get"),
    fn_name("js_unparse_inner"),
    fn_name("text_compress"),
    fn_name("path_resolve"),
  ];
  return names;
}
