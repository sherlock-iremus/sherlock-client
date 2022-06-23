/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Paper, Typography } from '@mui/material'
import React from 'react'
import { useCookies } from 'react-cookie'
import { userDisconnected } from './userSlice'
import UserAvatar from './UserAvatar'
import UserConfigEditor from './UserConfigEditor'

const User = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const [cookie, setCookie, removeCookie] = useCookies(['JWT']);
  
  const disconnect = () => {
    dispatch(userDisconnected());
    removeCookie("JWT", {path: '/'});
  }

  return (
    <React.Fragment>
      <Paper
        align="center"
        variant="outlined"
        css={css`
          width: 75%;
          margin: 5vh auto;
        `}
      >
        <UserAvatar user={user} css={css`
          margin-top: 2vh;
        `}/>
        <UserConfigEditor user={user} />
        <Typography mt={3} variant="h5">
          Liste des contributions
        </Typography>
        <code>
          À implémenter
        </code>
        <br />         
        <Button
          css={css`
            margin-top: 5vh;
          `}
          variant="contained"
          color="primary"
          onClick={disconnect}
        >
          Déconnexion 🔓
        </Button>
      </Paper>
    </React.Fragment>
  )
}

export default User;

