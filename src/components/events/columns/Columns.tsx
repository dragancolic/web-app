import memoize from 'memoize-one';
import React  from 'react';

export const columns = memoize((updateHandler) => 
[
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
    cell: (row: any) => <span>{row.id}</span>
  },
  {
    name: 'AREA',
    selector: 'area',
    sortable: true,
    cell: (row: any) => 
      <span>
        {row.areas && row.areas.length > 0 ? row.areas.map((area: any) => area.name) : '' }
      </span>
  },
  {
    name: 'SEVERITY',
    selector: 'severity',
    sortable: true,
    cell: (row: any) => <span>{row.severity}</span>
  },
  {
    name: 'EVENT TYPE',
    selector: 'event_type',
    cell: (row: any) => <span>{row.event_type}</span>
  },
  {
    name: 'START DATE',
    selector: 'created',
    cell: (row: any) => <span>{row.created}</span>
  },
]
);