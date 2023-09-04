import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface Column {
  id: 'timestamp' | 'level' | 'message' | 'other_suff';
  label: string;
  minWidth?: number;
  align?: 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'timestamp', label: 'Timestamp', align: 'center', minWidth: 70 },
  { id: 'level', label: 'Level', align: 'center', minWidth: 100 },
  {
    id: 'message',
    label: 'Message',
    minWidth: 170,
    align: 'center',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'other_suff',
    label: 'Other Suff',
    minWidth: 170,
    align: 'center',
    format: (value: number) => value.toLocaleString('en-US'),
  }
];

interface Data {
  timestamp: string;
  level: string;
  message: string;
  other_suff: number;
}

function createData(
  timestamp: string,
  level: string,
  message: string,
  other_suff: number,
): Data {
  return { timestamp, level, message, other_suff };
}

const rows = [
  createData('10:32AM', 'HTTP', '::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP', '::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP', '::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP','::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP', '::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP', '::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP', '::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP','::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP', '::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP', '::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP', '::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP','::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP', '::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP', '::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP', '::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP', '::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP', '::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP', '::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP','::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP', '::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP', '::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP', '::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP','::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP', '::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP', '::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP', '::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
  createData('10:32AM', 'HTTP','::ffff:127.0.0.1 - anonymous "POST /users/add HTTP/1.1" 200 "-" "-"', 3287263),
];

export default function LogDataTable() {

  return (
    <Paper sx={{ overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 600}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow  >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor: "#E2E8F0", color:"#0F172A" ,  
                  fontSize :"16px",textAlign:column.align,fontWeight: "bold",
                  borderLeft: "2px solid black",}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.level}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{ borderLeft: "2px solid black"}}>
                          { value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
