import {
  Box,
  Chip,
  CircularProgress,
  IconButton,
  Paper,
  Stack,
} from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { useFetch } from "../hooks/useFetch";
import { ServerEndpoints } from "../AppConstants";
import { useEffect, useState } from "react";
import { Refresh } from "@mui/icons-material";

export type LogType = {
  level: string;
  message: string;
  timestamp: string | Date;
  stack?: string;
};

export type MetaData = {
  message: string;
  count: string;
};

export type LogRes = {
  data: LogType[];
  meta: MetaData;
};

const columns: GridColDef[] = [
  { field: "id", headerName: "#", flex: 0.2 },
  {
    field: "level",
    headerName: "Level",
    flex: 0.5,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    renderCell: (params: GridRenderCellParams<any, any>) => (
      <Chip label={params.value} />
    ),
  },
  {
    field: "message",
    headerName: "Message",
    flex: 1,
  },
  {
    field: "timestamp",
    headerName: "Timestamp",
    flex: 0.5,
  },
];

const Logs = () => {
  const { data, error, refetch } = useFetch<LogRes>(ServerEndpoints.logs);
  const [rows, setRows] = useState<LogType[]>([]);

  useEffect(() => {
    const _rows = data?.data?.map((row: LogType, index: number) => ({
      ...row,
      id: index,
    }));
    setRows(_rows || []);
  }, [data]);

  const CustomToolBar = () => {
    return (
      <GridToolbarContainer
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
        >
          <GridToolbarExport />
          <IconButton
            color="primary"
            onClick={() => {
              refetch && refetch();
            }}
          >
            {!data ? <CircularProgress size={20} disableShrink /> : <Refresh />}
          </IconButton>
        </Stack>
        <GridToolbarQuickFilter />
      </GridToolbarContainer>
    );
  };

  if (error) return <>Some error occured</>;

  return (
    <Box marginX={4} component={Paper} height={"80vh"}>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{ toolbar: CustomToolBar }}
        slotProps={{
          toolbar: {
            showQuickFilter: false,
          },
        }}
        loading={!data}
      />
    </Box>
  );
};

export default Logs;
