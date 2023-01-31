import {styled} from "@mui/material";
import Card from '@mui/material/Card';

export const CardStyles = styled(Card)`
  width: 350px;
  height: 235px;
  border: 1px solid #DDEDF4;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  padding: 0;
  text-align: start;

  .MuiCardHeader-root {
    background-color: #F6F9FA;
    padding: 20px;

    .MuiCardHeader-title {
      font-family: 'Poppins, sans-serif';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.272728px;
      color: #2D2D2D;
    }
    .MuiCardHeader-subheader {
      font-family: 'Poppins, sans-serif';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 12px;
      letter-spacing: 0.272728px;
      color: #2D2D2D;
      opacity: 0.5;
      text-transform: uppercase;
      margin-top: 4px;
    }
  }

  .MuiCardContent-root {
    padding: 20px;

    .MuiCardActions-root {
      padding: 0;
    }
  }
`


export const StatusStyles = styled('div')`
  display: flex;
  flex-direction: column;
`

