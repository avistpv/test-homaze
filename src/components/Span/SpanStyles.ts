import { css, styled } from '@mui/material/styles';

type Color = 'gray'

export const SpanStyles = styled('span')<{
    fz?: number;
    fw?: number;
    lh?: number;
    color?: Color;
    opacity?: number;
}>`
  font-style: normal;
  font-weight: ${({ fw }) => fw || 400};
  font-size: ${({ fz }) => fz || 14}px;
  line-height: ${({ lh }) => lh || 20}px;
  letter-spacing: 0.272728px;
  opacity: ${({ opacity }) => (opacity !== undefined ? opacity : 1)};
  ${({ color }) => {
    if (color === 'gray') {
        return css`
          color: #9F9F9F;
        `;
    }
    return css`
      color: #2d2d2d;
    `;
    }}
`;
