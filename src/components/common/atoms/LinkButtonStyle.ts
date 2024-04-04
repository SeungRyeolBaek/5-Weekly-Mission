import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const LinkModule = styled(Link)`
  display: block;
  text-align: center;
  &.link {
    &__gradient {
      color: #fff;
      font-weight: 600;
      text-align:center;
      background:${theme.bgColor.gradient};
      border-radius: 8px;
      &.full {
       width: 100% !important; 
      }
      &.large {
        width: 128px;
        font-size: 18px;
        line-height: 53px;
        font-weight: 600;
        @media screen and (max-width: ${theme.screenSize.moLarge}) {
          width: 80px;
          font-size: 14px;
          line-height: 37px;
        }
      }
      &.mideum {
        width: 80px;
        font-size: 14px;
        line-height: 37px;
        font-weight: 600;
      }
    }
  }
`