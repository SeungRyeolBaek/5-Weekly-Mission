import { useEffect, useState } from 'react';
import { getFolderInfo } from '../../utils/api';
import FolderInfo from '../FolderInfo/FolderInfo';
import LinkCardList from '../LinkCardList/LinkCardList';
import './Folder.css';

export default function Folder() {
  const [ownerInfo, setOwnerInfo] = useState({});
  const [folderName, setFolderName] = useState('');
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchValue(e.target['search-input'].value);
  };

  const handleLoad = async () => {
    let result;
    try {
      result = await getFolderInfo();
    } catch (error) {}

    const { name, owner, links } = result;
    setFolderName(name);
    setItems(links);
    setOwnerInfo(owner);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className='folder-container'>
      <FolderInfo
        ownerName={ownerInfo.name}
        profileImgSource={ownerInfo.profileImageSource}
        folderName={folderName}
      />
      <LinkCardList items={items} searchOnSubmit={handleSearchSubmit} />
    </div>
  );
}
