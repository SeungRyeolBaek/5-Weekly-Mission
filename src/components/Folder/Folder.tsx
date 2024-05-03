import React, { useCallback, useEffect, useState } from "react";
import { getAllLinksRequest, getLinksRequest } from "../../api";
import * as S from "./Folder.styled";
import useAsync from "../../hooks/useAsync";
import FolderOptionButton from "./FolderOptionButton";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { FolderLink, FolderList } from "../../api/types";

interface FolderProps {
  folderList: FolderList[];
  setLinks: React.Dispatch<React.SetStateAction<FolderLink[]>>;
}

const Folder: React.FC<FolderProps> = ({ folderList, setLinks }) => {
  const [folder, setFolder] = useState("");
  const [currentFolder, setCurrentFolder] = useState("");
  const [currentFolderId, setCurrentFolderId] = useState(0);
  const [isModalTrigger, setModalTrigger] = useState(false);
  const { requestFunction: allLinksRequest } = useAsync(getAllLinksRequest);
  const { requestFunction: LinkRequest } = useAsync(getLinksRequest);

  const getAllLinks = async () => {
    const result = await allLinksRequest();
    if (!result) return;

    const { data } = result;
    setLinks(data);
  };

  const getLink = async (id: number) => {
    const result = await LinkRequest(id);
    if (!result) return;

    const { data } = result;
    setLinks(data);
  };

  const onChangeFolderTitle = useCallback((name: string, id?: number) => {
    setFolder(name);
    setCurrentFolder(name);
    if (id) {
      setCurrentFolderId(id);
    }
  }, []);

  const onChangeAllLinksFolder = useCallback(() => {
    getAllLinks();
    onChangeFolderTitle("전체");
  }, []);

  const onChangeLinkFolder = useCallback((name: string, id: number) => {
    getLink(id);
    onChangeFolderTitle(name, id);
  }, []);

  return (
    <S.FolderLayout>
      <S.FolderContainer>
        <S.FolderBox>
          <Button
            variant={"folderButton"}
            selected={currentFolder}
            onClick={() => onChangeAllLinksFolder()}
            text={"전체"}
          />
          {folderList.map((folderItem) => (
            <Button
              key={folderItem.id}
              variant={"folderButton"}
              selected={currentFolder}
              onClick={() => onChangeLinkFolder(folderItem.name, folderItem.id)}
              text={folderItem.name}
            />
          ))}
        </S.FolderBox>
        <div onClick={() => setModalTrigger((prev) => !prev)}>
          <Button
            variant={"addFolder"}
            text='폴더 추가'
          />
        </div>
      </S.FolderContainer>
      <FolderOptionButton
        folderTitle={folder}
        folderId={currentFolderId}
      />
      {isModalTrigger && (
        <Modal
          variant='addFolder'
          closeModal={setModalTrigger}
        />
      )}
    </S.FolderLayout>
  );
};

export default Folder;
