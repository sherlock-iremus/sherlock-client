/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import TransitionComponent from './TransitionComponent'

import type from './datatype'
import { DateRange, Label } from '@mui/icons-material'
import { TreeItem } from '@mui/lab'

const LiteralTreeItem = ({ path, literal }) => {
  return (
    <TreeItem
      key={path}
      label={
        <Box
          css={css`
            display: flex;
          `}
        >
          <Box
            component={computeLabelIcon(literal.datatype)}
            css={css`
              width: 33px;
            `}
          />
          <Typography
            css={css`
              font-size: 0.875rem;
            `}
          >
            {literal.value}
          </Typography>
        </Box>
      }
      nodeId={path}
      TransitionComponent={TransitionComponent}
    />
  )
}

function computeLabelIcon(datatype) {
  switch (datatype) {
    case type.date:
      return DateRange
    default:
      return Label
  }
}

export default LiteralTreeItem
