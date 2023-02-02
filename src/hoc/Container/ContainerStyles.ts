import {styled} from "@mui/material";
import Container from '@mui/material/Container';

export const ContainerStyles = styled(Container)`
  width: 100%;
  max-width: 1162px;
  
  @media (min-width: 600px) {
    padding-left: 0;
    padding-right: 0;
  }
  @media (min-width: 1200px) {
    max-width: 1162px;
  }

`
