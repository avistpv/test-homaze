import {styled} from "@mui/material";
import TextField from '@mui/material/TextField';

export const SearchBarStyles = styled(TextField)`
  width: 100%;
  max-width: 289px;
  height: 45px;
  font-size: 14px;
  border: 1px solid #c0c0c0;
  border-radius: 7px;

  .MuiOutlinedInput-root {
    padding-right: 15px;
  }

  input {
    height: 45px;
    line-height: 45px;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.272728px;
    color: #2D2D2D;
    padding: 0 0 0 15px;

    &::placeholder {
      color: #b0b0b0;
      opacity: 1;
    }
  }

  .MuiSvgIcon-root {
    height: 24px;
    width: 24px;
    opacity: 0.2;
  }

  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: #2D2D2D;
  }
`;
