import React from "react";
import { MDBDataTable, MDBBtn } from "mdbreact";

const DataTable = () => {
    const data = {
        columns: [
            {
                label: "",
                field: "personal",
                sort: "disabled"
            },
            {
                label: "Name",
                field: "name",
                sort: "asc"
            },
            {
                label: "Systems",
                field: "systems",
                sort: "asc"
            },
            {
                label: "Release Date",
                field: "release",
                sort: "asc"
            },
            {
                label: "Release Price",
                field: "price",
                sort: "asc"
            },
        ],
        rows: [
            {
                personal: <MDBBtn>Add or Edit</MDBBtn>,
                name: "Airi Satou",
                systems: "Accountant",
                release: "Tokyo",
                price: "33",
            },
            {
                personal: <MDBBtn>Button</MDBBtn>,
                name: "Airi Satou",
                systems: "Accountant",
                release: "Tokyo",
                price: "33",
            },
            {
                personal: <MDBBtn>Button</MDBBtn>,
                name: "Airi Satou",
                systems: "Accountant",
                release: "Tokyo",
                price: "33",
            },
            {
                personal: <MDBBtn>Button</MDBBtn>,
                name: "Airi Satou",
                systems: "Accountant",
                release: "Tokyo",
                price: "33",
            },
            {
                personal: <MDBBtn>Button</MDBBtn>,
                name: "Airi Satou",
                systems: "Accountant",
                release: "Tokyo",
                price: "33",
            },
            {
                personal: <MDBBtn>Button</MDBBtn>,
                name: "Airi Satou",
                systems: "Accountant",
                release: "Tokyo",
                price: "33",
            },
            {
                personal: <MDBBtn>Button</MDBBtn>,
                name: "Airi Satou",
                systems: "Accountant",
                release: "Tokyo",
                price: "33",
            },
            {
                personal: <MDBBtn>Button</MDBBtn>,
                name: "Airi Satou",
                systems: "Accountant",
                release: "Tokyo",
                price: "33",
            },{
                personal: <MDBBtn>Button</MDBBtn>,
                name: "Airi Satou",
                systems: "Accountant",
                release: "Tokyo",
                price: "33",
            },{
                personal: <MDBBtn>Button</MDBBtn>,
                name: "Airi Satou",
                systems: "Accountant",
                release: "Tokyo",
                price: "33",
            },{
                personal: <MDBBtn>Button</MDBBtn>,
                name: "Airi Satou",
                systems: "Accountant",
                release: "Tokyo",
                price: "33",
            },
            {
                personal: <MDBBtn>Button</MDBBtn>,
                name: "Airi Satou",
                systems: "Accountant",
                release: "Tokyo",
                price: "33",
            },
            {
                personal: <MDBBtn>Button</MDBBtn>,
                name: "Airi Satou",
                systems: "Accountant",
                release: "Tokyo",
                price: "33",
            },
            {
                personal: <MDBBtn>Button</MDBBtn>,
                name: "Airi Satou",
                systems: "Accountant",
                release: "Tokyo",
                price: "33",
            },
            {
                personal: <MDBBtn>Button</MDBBtn>,
                name: "Airi Satou",
                systems: "Accountant",
                release: "Tokyo",
                price: "33",
            },
            {
                personal: <MDBBtn>Button</MDBBtn>,
                name: "Airi Satou",
                systems: "Accountant",
                release: "Tokyo",
                price: "33",
            },{
                personal: <MDBBtn>Button</MDBBtn>,
                name: "Airi Satou",
                systems: "Accountant",
                release: "Tokyo",
                price: "33",
            },
            {
                personal: <MDBBtn>Button</MDBBtn>,
                name: "Airi Satou",
                systems: "Accountant",
                release: "Tokyo",
                price: "33",
            },
            {
                personal: <MDBBtn>Button</MDBBtn>,
                name: "Airi Satou",
                systems: "Accountant",
                release: "Tokyo",
                price: "33",
            }
        ]
    };

    return (
        <MDBDataTable
            maxHeight={"600px"}
            scrollY
            striped
            autoWidth={false}
            bordered
            small
            data={data}
            hover
            fixed={true}
        />
    );
};

export default DataTable;
