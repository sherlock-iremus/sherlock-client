/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import Avatar from '@mui/material/Avatar'

const UserAvatar = React.forwardRef(({ user, ...props}, ref) => {

    return <Avatar
        align="right"
        ref={ref}
        {...props}
        css={css`
        background-color: #${user.hexColor};
        &:hover {
            cursor: pointer;
        }
        `}
    >
        {user.unicodeChar} 
    </Avatar>

});

export default UserAvatar;