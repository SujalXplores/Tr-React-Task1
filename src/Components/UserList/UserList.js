import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@material-ui/data-grid";

const UserList = (props) => {
  const { users } = props;
  const [userList, setUserList] = useState(users);

  useEffect(() => {
    setUserList(users);
  }, [users]);

  const handleDeleteItem = (id) => {
    const newList = userList.filter((item) => item.id !== id);
    setUserList(newList);
    props.onDeleteList(newList);
  };

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  };

  const rows = userList;

  const columns = [
    { field: "id", hide: true, filterable: false },
    {
      field: "firstname",
      headerName: "First Name",
      width: 150,
      editable: true,
    },
    { field: "lastname", headerName: "Last Name", width: 150, editable: true },
    { field: "username", headerName: "Username", width: 150, editable: true },
    { field: "age", headerName: "Age", width: 150, editable: true },
    { field: "maths", headerName: "Maths", width: 150, editable: true },
    {
      field: "science",
      headerName: "Science",
      width: 150,
      editable: true,
    },
    {
      field: "",
      width: 150,
      sortable: false,
      filterable: false,
      renderCell: (user) => {
        return (
          <IconButton
            color="secondary"
            onClick={() => handleDeleteItem(user.id)}
          >
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  if (userList.length > 0) {
    return (
      <Card>
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          components={{
            Toolbar: CustomToolbar,
          }}
          disableColumnMenu={true}
          hideFooterSelectedRowCount={true}
        />
      </Card>
    );
  }
  return null;
};

export default UserList;
