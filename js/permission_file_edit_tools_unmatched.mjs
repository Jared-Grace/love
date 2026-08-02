export function permission_file_edit_tools_unmatched() {
  "the file-editing tools whose allow rules the permission engine never matches, because it consults Edit rules alone and an Edit rule already covers every one of them";
  let v = ["Write", "MultiEdit", "NotebookEdit"];
  return v;
}
