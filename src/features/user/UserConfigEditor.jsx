/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Box, Paper, TextField, Button } from '@mui/material'
import { ColorPicker } from 'mui-color'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUserDetails } from './userSlice';
import { sendUserDetails } from '../../common/backend'

const UserConfigEditor = ({ user }) => {
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({
        unicodeChar: '',
        hexColor: ''
    });

    useEffect(() => {
        if (user.unicodeChar)
            setInputs({
                unicodeChar: user.unicodeChar,
                hexColor: user.hexColor
            });
    }, [user]);

    const onChange = (changes) => {
        setInputs({...inputs, ...changes});
    }

    const sendForm = () => {
        sendUserDetails(inputs.unicodeChar, inputs.hexColor).then(() => {
            dispatch(getUserDetails());
        })
    }

    return <Paper css={css`width: 90%; margin-top: 10px; display: flex; flex-direction: column; gap: 10px; padding: 30px`}>
        <Box>
            <TextField css={css`text-align: right;`} inputProps={{ maxLength: 1 }} size="small" onChange={(e) => onChange({unicodeChar: e.target.value})} label="Caractère unicode" value={inputs.unicodeChar}/>
            <ColorPicker onChange={(e) => onChange({hexColor: e.hex})} value={`#${inputs.hexColor}`} />
        </Box>
        <Button onClick={() => sendForm()} css={css`display: block;`} variant="contained" type="submit">
            Mettre à jour
        </Button>
    </Paper>
}

export default UserConfigEditor;
