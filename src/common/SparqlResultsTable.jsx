import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

import { formatUri } from './rdf'

const C = ({ bindings }) => {
  let headers = []
  if (bindings) {
    for (const v of Object.entries(bindings)) {
      headers.push(...Object.keys(v[1]))
    }
  }
  headers = Array.from(new Set(headers))

  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            {headers.map(h => (
              <TableCell align="center" key={h} sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                {h}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {bindings.map(r => (
            <TableRow key={Math.random()}>
              {headers.map(h => (
                <TableCell key={Math.random()}>{r.hasOwnProperty(h) ? formatUri(r[h].value) : '🦕'}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default C
