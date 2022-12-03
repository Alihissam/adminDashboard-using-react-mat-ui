import React, { useState } from 'react'
import './userlist.css';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { userRow } from "../../dummyData";
import { Link } from 'react-router-dom';


const UserList = () => {

    const [data, setData] = useState(userRow);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'User',
            headerName: 'User',
            width: 200, width: 200, renderCell: (params) => {
                return (
                    <div className="UserlistUser">
                        <img className="userlistimg" src={params.row.Avatar} alt="" />
                        {params.row.UserName}
                    </div>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'status',
            width: 120,
            editable: true,
        },
        {
            field: 'Transaction',
            headerName: 'Transaction volume',
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userlistedit">Edit</button>
                        </Link>
                        <DeleteIcon className="userlistedelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
    ];



    return (
        <div className="Userlist">


            <Box sx={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={8}
                    rowsPerPageOptions={[8]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
        </div>
    )
}

export default UserList
