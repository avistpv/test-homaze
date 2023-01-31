import {styled} from "@mui/material";
import Container from '@mui/material/Container';
export const ContainerStyles = styled(Container)`
    width: 100%;
    height: 100vh;  
    max-width: 1440px;
    background-color: aquamarine;
  
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
  
    @media (min-width: 600px) {  
      max-width: 1440px;
    }
`
