import PostCard from "../../components/folder/PostCard";
import { ContainBody, ContainHead } from "../../styles/commonStyle";
import {
  BodyInner,
  EmptyBox,
  ShareHeadInner,
  PostCardWrap,
  BoxLinkSearch,
} from "./folderStyle";
import { TitleMs } from "../../styles/commonStyle";
import Input from "../../components/common/atoms/Input";
import { SHAREDCONTANTAPI } from "../../constant/api";
import useFetch from "../../hook/useFetch";
import { IFolderContent } from "./interface";
const logo = "/assets/logo/logo_codeit.svg";
const search = "/assets/icon/icon_search.svg";

interface IFolder {
  $title?: string;
  $folderLogo?: string;
  $folderLogoAlt?: string;
}

function FolderHead({ $title, $folderLogo, $folderLogoAlt }: IFolder) {
  return (
    <ShareHeadInner>
      {$folderLogo && <img src={$folderLogo} alt={$folderLogoAlt} />}
      {$folderLogoAlt && <p>{$folderLogoAlt}</p>}
      {$title && <TitleMs>{$title}</TitleMs>}
    </ShareHeadInner>
  );
}

function useFatchDataLoad<T>(api: string) {
  return useFetch<T>(api);
}

function Shared() {
  const { value, isLoading } =
    useFatchDataLoad<IFolderContent[]>(SHAREDCONTANTAPI);
  return (
    <>
      <ContainHead>
        <FolderHead
          $title={"⭐️ 즐겨찾기"}
          $folderLogo={logo}
          $folderLogoAlt={"@코드잇"}
        />
      </ContainHead>
      <ContainBody>
        <BodyInner>
          <BoxLinkSearch>
            <Input
              $inputClass={"input__link--search"}
              $placeholder={"링크를 검색해 보세요."}
              $beforeBgIcon={search}
            />
          </BoxLinkSearch>
          {isLoading ? (
            value ? (
              <PostCardWrap>
                {value &&
                  value.map((data) => <PostCard key={data.id} {...data} />)}
              </PostCardWrap>
            ) : (
              <EmptyBox>저장된 링크가 없습니다.</EmptyBox>
            )
          ) : (
            <EmptyBox>Loading...</EmptyBox>
          )}
        </BodyInner>
      </ContainBody>
    </>
  );
}

export default Shared;
