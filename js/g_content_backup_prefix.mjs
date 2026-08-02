import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
export function g_content_backup_prefix(namespace) {
  "Where one namespace's files sit in storage, written as the head of their addresses so a listing can be asked for it.";
  "The trailing separator is what keeps one namespace from answering for another whose name merely starts the same way.";
  let ending = "";
  let prefix = list_join_slash_forward(["function", namespace, ending]);
  return prefix;
}
