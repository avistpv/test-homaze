import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import {CardStyles, StatusStyles} from "./parts";
import {SpanStyles} from "../Span/SpanStyles";
import Stack from '@mui/material/Stack';

export default function Card() {

    const number = 103250.20;

    return (
        <CardStyles>
            <CardHeader
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardContent>
                <SpanStyles>
                    Word of the Day
                </SpanStyles>
                <CardActions>
                    <Button size="small" variant={'contained'}>Learn More</Button>
                    <Button size="small" variant={'contained'}>Learn More</Button>
                    <Button size="small" variant={'contained'}>Learn More</Button>
                </CardActions>
                <Stack direction="row" justifyContent="space-between">
                    <StatusStyles>
                        <SpanStyles color={'gray'}>
                           Last update
                        </SpanStyles>
                        <SpanStyles>
                            Last update
                        </SpanStyles>
                    </StatusStyles>
                    <StatusStyles>
                        <SpanStyles color={'gray'}>
                            Total
                        </SpanStyles>
                        <SpanStyles fw={700}>
                            ${number}
                        </SpanStyles>
                    </StatusStyles>
                    <StatusStyles>
                        <SpanStyles color={'gray'}>
                            Stage
                        </SpanStyles>
                        <SpanStyles>
                            Stage
                        </SpanStyles>
                    </StatusStyles>
                </Stack>
            </CardContent>
        </CardStyles>
    );
}
