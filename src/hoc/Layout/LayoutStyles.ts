import {styled} from "@mui/material";
import Container from '@mui/material/Container';

export const LayoutStyles = styled(Container)`
    width: 100vw;
    height: 100vh;  
    background-color: #f6f9fa;
    margin: 0 auto;
    padding: 0;

  @media (min-width: 1200px) {
    max-width: unset;
  }  
`
