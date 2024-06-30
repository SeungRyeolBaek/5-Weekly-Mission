import { instance } from "../util";
import { FolderRawData } from "../type";
import { useMutation } from "@tanstack/react-query";
import { useGetFolders } from ".";

type Params = { folderId: number };

export const useDeleteFolder = () => {
  const { refetch } = useGetFolders();
  const deleteFolder = ({ folderId }: Params) =>
    instance.delete<FolderRawData[]>(`/folders/${folderId}`);

  const { mutate } = useMutation({
    mutationKey: ["deleteFolder"],
    mutationFn: deleteFolder,
    onSuccess: () => refetch(),
    retry: false,
  });

  return { mutate };
};