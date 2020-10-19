import React from 'react';
import DataTable from 'react-data-table-component';

export default function Table(props: any) {
    return (
        <DataTable
            columns={props.columns()}
            data={props.data}
            pagination
        />         
    );
};