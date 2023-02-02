import {styled} from "@mui/material/styles";
import Button from '@mui/material/Button';

export const ButtonStyles = styled(Button)`  
  height: 28px;
  width: auto;
  padding: 4px 10px;
  background: rgba(60, 178, 228, 0.1);
  border-radius: 6px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.272728px;
  color: #3CB2E4;
  box-shadow: none;
  text-transform: capitalize;
  margin: 0;  
  
  &:hover {
    background: rgba(60, 178, 228, 0.1);
    filter: brightness(1.2);
    box-shadow: none;
  }
`;
