import {styled} from "@mui/material";
import Card from '@mui/material/Card';

export const CardStyles = styled(Card)`
  width: 350px;
  height: 235px;
  border: 1px solid #DDEDF4;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  padding: 0;


  .MuiCardHeader-root {
    background-color: #F6F9FA;
    padding: 0 20px;
    height: 76px;
    font-family: 'Poppins', sans-serif;

    .MuiCardHeader-content {
      overflow: hidden;
    }

    .MuiCardHeader-title {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.272728px;
      color: #2D2D2D;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-family: 'Poppins', sans-serif;
    }

    .MuiCardHeader-subheader {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 12px;
      letter-spacing: 0.272728px;
      color: #2D2D2D;
      opacity: 0.5;
      text-transform: uppercase;
      margin-top: 4px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-family: 'Poppins', sans-serif;
    }
  }

  .MuiCardContent-root {
    padding: 10px 20px 0;

    .MuiCardActions-root {
      margin: 20px 0;
      padding: 0;

      .MuiButton-root:not(:first-of-type) {
        margin-left: 3px;
      }
    }
  }
`


export const StatusStyles = styled('div')`
  display: flex;
  flex-direction: column;

  & > span:first-of-type {
    margin-bottom: 3px;
  }
`

