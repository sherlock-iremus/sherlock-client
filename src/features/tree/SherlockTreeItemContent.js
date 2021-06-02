/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import { ArrowLeft, ArrowRight } from '@material-ui/icons'
import { useTreeItem } from '@material-ui/lab/TreeItem'
import React from 'react'

//TODO ou bien https://material-ui.com/api/typography/ ?
function computeLabelIcon(LabelIcon) {
    if (LabelIcon === ArrowRight) {
        return <Typography css={theme => css`
            white-space: nowrap;
            margin-right: ${theme.spacing(1)};
            color: ${theme.palette.colors.MI_ORANGE};
        `}>
            →
        </Typography>
    } else if (LabelIcon === ArrowLeft) {
        return <Typography css={theme => css`
            white-space: nowrap;
            margin-right: ${theme.spacing(1)};
            color: ${theme.palette.colors.MI_MAGENTA};
        `}>
            ←
        </Typography>
    }
    return <LabelIcon color="inherit" css={theme => css`
        margin-right: ${theme.spacing(1)};
    `} />
}

// On doit s'inspirer, pour le comportement du clic, de :
// https://github.com/mui-org/material-ui/blob/v5.0.0-alpha.34/docs/src/pages/components/tree-view/IconExpansionTreeView.js
// et pour le style, de :
// https://github.com/mui-org/material-ui/blob/v5.0.0-alpha.34/docs/src/pages/components/tree-view/GmailTreeView.js
export default React.forwardRef((props, ref) => {
    const {
        classes,
        className,
        labelText,
        labelIcon: LabelIcon,
        labelInfo,
        nodeId,
        icon: iconProp,
        expansionIcon,
        displayIcon,
        onIconClick,
        onLabelClick
    } = props;

    const {
        content,
        disabled,
        expanded,
        focused,
        group,
        root,
        selected,
        handleExpansion,
        handleSelection,
        preventSelection,
    } = useTreeItem(nodeId)

    const icon = iconProp || expansionIcon || displayIcon

    const handleMouseDown = preventSelection
    const handleExpansionClick = handleExpansion
    const handleSelectionClick = handleSelection

    return (
        <div className={clsx(className, {
            [classes.content]: content,
            [classes.disabled]: disabled,
            [classes.expanded]: expanded,
            [classes.focused]: focused,
            [classes.group]: group,
            [classes.root]: root,
            [classes.selected]: selected,
        })}
            onMouseDown={handleMouseDown}
            ref={ref}
        >
            <div className={classes.iconContainer} onClick={e => {
                handleExpansionClick(e)
                onIconClick()
            }}>
                {icon}
            </div>
            <div className={classes.label} component="div" onClick={e => {
                handleSelection(e)
                onLabelClick(e)
            }} css={theme => css`
                    align-items: center;
                    display: flex;
                    justify-content: center;
                    padding: ${theme.spacing(0.25, 0)};
                `}>
                {computeLabelIcon(LabelIcon)}
                <Typography component="span" variant="body2" css={css`
                    flex-grow: 1;
                `}>
                    {labelText}
                </Typography>
                <Typography color="inherit" component="span" variant="caption" css={css`
                    white-space: nowrap;
                `}>
                    {labelInfo}
                </Typography>
            </div>
        </div>
    )
})