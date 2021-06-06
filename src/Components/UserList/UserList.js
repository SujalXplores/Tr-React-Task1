import React from "react";
import Card from "../UI/Card";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from "./UserList.module.css";

const UserList = (props) => {
  if (props.users.length > 0) {
    return (
      <Card>
        <TableContainer component={Paper}>
          <Table className={styles.user__table}>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Maths</TableCell>
                <TableCell>Science</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.firstname}</TableCell>
                  <TableCell>{user.lastname}</TableCell>
                  <TableCell>{user.maths}</TableCell>
                  <TableCell>{user.science}</TableCell>
                  <TableCell>
                    <IconButton color="secondary" onClick={() => props.onDelete(user.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    );
  }
  return null;
};

export default UserList;
