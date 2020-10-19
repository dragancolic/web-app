import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardGroup,
  CardHeader,
  Spinner
} from 'reactstrap';

import * as Request from '../../../utils/Request';
import Table from '../table/Table'; 
import { columns } from '../columns/Columns'; 
import { FilterByGroup } from '../../filterby/FilterByGroup';
import { ALL_AREAS } from '../../../types/area/AreaType';
import './_events.scss';

export default function Events() {

  const [showSpinner, setShowSpinner] = useState(false);
  const [events, setEvents] = useState(getAllEvents);
  const [areas, setAreas] = useState(getAllAreas);

  function getAllEvents() {
    setShowSpinner(true);
    Request.getAllEvents().then((response) => { 
      setEvents(response.events);
      setShowSpinner(false); 
    });
  };

  function getAllAreas() {
    Request.getAllAreas().then((response) => {
      setAreas(response.areas.concat(ALL_AREAS)); 
    });
  };

  function filterEvents(areaId: string, severityType: string, eventType: string, created: string) {
    setShowSpinner(true);
    Request.filterEvents(areaId, severityType, eventType, created).then((response) => { 
      setEvents(response.events);
      setShowSpinner(false);
    });
  };

  return (
      <CardGroup>
        <Card>
            <CardHeader>{'Events'}</CardHeader>            
            <CardBody>
              <FilterByGroup 
                areas={areas}
                filterEvents={filterEvents}
              />
                {showSpinner ? 
                  <Spinner 
                    className={'spinner'}
                    type={'border'}/> : 
                  null}
              <Table 
                columns={columns} 
                data={events}
              /> 
            </CardBody>
        </Card>
      </CardGroup>      
  );
}