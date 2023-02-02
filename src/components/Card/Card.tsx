import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import {CardStyles, StatusStyles} from "./CardStyles";
import {SpanStyles} from "../Span/SpanStyles";
import Stack from '@mui/material/Stack';
import {ICard} from "../../type";
import {formatCurrency, formatDate} from "../../utils/transformNumbers";
import {ButtonStyles} from "../Button/ButtonStyles";
import {ChipStyles, Progress} from "../Chip/ChipStyles";

export default function Card({
                                 customerName,
                                 projectId,
                                 address,
                                 rooms,
                                 updated_timestmp,
                                 totalProject,
                                 projectState
                             }: ICard) {

    return (
        <CardStyles>
            <CardHeader
                title={customerName}
                subheader={projectId}
            />
            <CardContent>
                <SpanStyles>
                    {address}
                </SpanStyles>
                <CardActions>
                    {rooms?.map(({name}) => (
                        <ButtonStyles size="small" variant={'contained'} key={name}>
                            {name}
                        </ButtonStyles>
                    ))}
                </CardActions>
                <Stack direction="row" justifyContent="space-between">
                    <StatusStyles>
                        <SpanStyles color={'gray' }>
                            Last update
                        </SpanStyles>
                        <SpanStyles lh={24}>
                            {formatDate(updated_timestmp)}
                        </SpanStyles>
                    </StatusStyles>
                    <StatusStyles>
                        <SpanStyles color={'gray'}>
                            Total
                        </SpanStyles>
                        <SpanStyles fw={700} lh={24}>
                            {formatCurrency(totalProject)}
                        </SpanStyles>
                    </StatusStyles>
                    <StatusStyles>
                        <SpanStyles color={'gray'}>
                            Stage
                        </SpanStyles>
                        <ChipStyles label={projectState} progress={projectState as Progress}/>
                    </StatusStyles>
                </Stack>
            </CardContent>
        </CardStyles>
    );
}
