/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { rootSet, getResourceIdentity } from './treeSlice'
import IriTreeItem from './IriTreeItem'
import { ChevronRight, ExpandMore } from '@mui/icons-material'
import { TreeView } from '@mui/lab'

const Tree = ({ uri }) => {
  const dispatch = useDispatch()
  const path = ''

  useEffect(() => {
    dispatch(rootSet(uri))
    dispatch(getResourceIdentity(uri))
  }, [dispatch, uri])

  return (
    <TreeView
      css={css`
        user-select: none;
        overflow-y: auto;
        overflow-x: auto;
      `}
      defaultCollapseIcon={<ExpandMore />}
      defaultExpandIcon={<ChevronRight />}
    >
      <IriTreeItem path={path} uri={uri} nodeId={path + uri + ','} />
    </TreeView>
  )
}

export default Tree
