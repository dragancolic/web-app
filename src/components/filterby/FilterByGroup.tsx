import React, { useState, useEffect } from 'react';
import {
  Dropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem,
  CardBody,
  Card,
  CardDeck,
  CardTitle
} from 'reactstrap';
import * as uuid from 'uuid';

import { EventType as EventTypes } from '../../types/event/EventType';
import { SeverityType as SeverityTypes } from '../../types/severity/SeverityType';
import AreaModel, { ALL_AREAS } from '../../types/area/AreaType';
import { DateCreated } from '../../types/created/DateCreatedType';

export const FilterByGroup = (props: any) => {

  const [dropdownOpenArea, setdropdownOpenArea] = useState(false);
  const [dropdownOpenSeverity, setdropdownOpenSeverity] = useState(false);
  const [dropdownOpenEvent, setDropdownOpenEvent] = useState(false);
  const [dropdownOpenCreated, setDropdownOpenCreated] = useState(false);

  const [selectedArea, setSelectedArea] = useState(ALL_AREAS);
  const [selectedSeverity, setSelectedSeverity] = useState(SeverityTypes.ALL);
  const [selectedEvent, setSelectedEvent] = useState(EventTypes.ALL);
  const [selectedCreated, setSelectedCreated] = useState(DateCreated.ALL);
  
  useEffect(() => {
    props.filterEvents(selectedArea.id, selectedSeverity, selectedEvent, selectedCreated);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedArea, selectedSeverity, selectedEvent, selectedCreated]);

  return (
    <CardDeck>
      {/* Area Filter */}
      <Card>
        <CardBody>
          <CardTitle>Area filter:</CardTitle>
          <Dropdown 
            isOpen={dropdownOpenArea} 
            toggle={() => setdropdownOpenArea(prevState => !prevState)}
        >
          <DropdownToggle caret>{selectedArea.name}</DropdownToggle>
          <DropdownMenu>
              {
                props.areas && props.areas.length > 0 ?
                  props.areas.map((area: AreaModel) =>
                    <DropdownItem 
                      key={uuid.v4()}
                      dropdownvalue={area}
                      onClick={() => setSelectedArea(area)}>
                      {area.name}
                    </DropdownItem>
                  ) :
                  ''
              }
          </DropdownMenu>
        </Dropdown> 
        </CardBody>
      </Card>
      {/* Severity Filter */}
      <Card>
        <CardBody>
          <CardTitle>Severity filter:</CardTitle>
          <Dropdown isOpen={dropdownOpenSeverity} toggle={() => setdropdownOpenSeverity(prevState => !prevState)}>
             <DropdownToggle caret>{selectedSeverity}</DropdownToggle>
              <DropdownMenu>
               {
                Object.values(SeverityTypes).map((severity: any) => 
                  <DropdownItem 
                    key={uuid.v4()}
                    dropdownvalue={severity}
                    onClick={() => setSelectedSeverity(severity)}>
                    {severity}
                  </DropdownItem>
                )
              }
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
      {/* Event Filter */}
      <Card>
        <CardBody>
          <CardTitle>Event filter:</CardTitle>
          <Dropdown 
            isOpen={dropdownOpenEvent} 
            toggle={() => setDropdownOpenEvent(prevState => !prevState)}
        >
          <DropdownToggle caret>{selectedEvent}</DropdownToggle>
          <DropdownMenu>
            {
              Object.keys(EventTypes).map((event: any) => 
                <DropdownItem 
                  key={uuid.v4()}
                  dropdownvalue={event}
                  onClick={() => setSelectedEvent(event)}>
                  {event}
                </DropdownItem>
              )
            }
          </DropdownMenu>
        </Dropdown> 
        </CardBody>
      </Card>
       {/* Date Created (YEAR) Filter */}
       <Card>
        <CardBody>
          <CardTitle>Start date filter (YEAR):</CardTitle>
          <Dropdown 
            isOpen={dropdownOpenCreated} 
            toggle={() => setDropdownOpenCreated(prevState => !prevState)}
          >
          <DropdownToggle caret>{selectedCreated}</DropdownToggle>
          <DropdownMenu>
            {
              Object.values(DateCreated).map((created: any) => 
                <DropdownItem 
                  key={uuid.v4()}
                  dropdownvalue={created}
                  onClick={() => setSelectedCreated(created)}>
                  {created === DateCreated.ALL ? created : created + ' and above'}
                </DropdownItem>
              )
            }
          </DropdownMenu>
        </Dropdown> 
        </CardBody>
      </Card>
    </CardDeck>
  );
}