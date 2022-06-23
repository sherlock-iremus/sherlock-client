import { useSelector } from 'react-redux'
import { Box, Button } from '@mui/material'
import UserAvatar from './UserAvatar'
import { useHistory } from 'react-router-dom'

const UserLogin = () => {
    const user = useSelector(state => state.user)
    const history = useHistory();

    return <Box>
    {user && user.hexColor ? (
        <UserAvatar user={user} onClick={() => history.push('/me')} />
    ) : (
        <Button align="right" onClick={() => window.location.replace(`${process.env.REACT_APP_SSO_URL}/?redirect-uri=${window.location.href}`)}>
          🔒 Login
        </Button>
    )}
  </Box>
}

export default UserLogin;
