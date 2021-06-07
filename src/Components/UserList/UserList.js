import React from "react";
import Card from "../UI/Card";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import { DataGrid, GridToolbar } from "@material-ui/data-grid";

const UserList = (props) => {
  const rows = props.users;
  const columns = [
    { field: "id", hide: true },
    { field: "firstname", headerName: "First Name", width: 150 },
    { field: "lastname", headerName: "Last Name", width: 150 },
    { field: "username", headerName: "Username", width: 150 },
    { field: "age", headerName: "Age", width: 150 },
    { field: "maths", headerName: "Maths", width: 150 },
    {
      field: "science",
      headerName: "Science",
      width: 150,
      filterable: false,
      editable: (rowData) => {
        return rowData.allowEdit ? true : false;
      },
    },
    {
      field: "Actions",
      width: 150,
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (user) => {
        return (
          <IconButton color="secondary" onClick={() => props.onDelete(user.id)}>
            <DeleteIcon />
          </IconButton>
        );
      },
      filterable: false,
    },
  ];

  if (props.users.length > 0) {
    return (
      <Card>
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
          }}
          disableColumnMenu={true}
        />
      </Card>
    );
  }
  return null;
};

export default UserList;
