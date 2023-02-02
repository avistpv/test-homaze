import {css, styled} from "@mui/material";
import Chip from '@mui/material/Chip';

export type Progress = 'In progress' | 'Done' | 'Cancelled' | 'Negotiation';

export const ChipStyles = styled(Chip, {
    shouldForwardProp: (prop) => prop !== 'progress'
})<{
    progress?: Progress;
}>`
  height: 24px;
  padding: 2px 10px;
  border-radius: 52px;
  transform: translateX(-10px);
  
  .MuiChip-label {
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.272728px;
    color: #2D2D2D;
  }

  ${({progress}) => {
      if(progress === 'Done') {
        return css`
          background: #EBFCEC;
          .MuiChip-label {
            color: #30D869;
          }
      `}
      if(progress === 'Cancelled') {
        return css`
          background: #EBF7FC;
          .MuiChip-label {
            color: #3CB2E4;
            font-weight: 700;
          }
      `}
      if(progress === 'Negotiation') {
        return css`
          background: #FAEEE8;
          .MuiChip-label {
            color: #E4783C;
          }
     `}
  }}
`
