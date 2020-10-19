import { AreaType } from "../types/area/AreaType";
import { DateCreated } from "../types/created/DateCreatedType";
import { EventType } from "../types/event/EventType";
import { SeverityType } from "../types/severity/SeverityType";

export async function executeRequest(path: string, options: {}) {
    let response = await fetch(path, options);
    if (response.ok && response.status !== 204) {
        return response.json();
    }
    return response;
}

export function getAllEvents() {
    return executeRequest('/events', {
        headers: { "Content-Type": "application/json" },
    });
}

export function getAllAreas() {
    return executeRequest('/areas', {
        headers: { "Content-Type": "application/json" },
    });
}

function createQueryParams(areaId: string, severityType: string, eventType: string, startDate: string){    
    let params = new URLSearchParams();
    let created = '';
    if(areaId !== AreaType.ALL){
        params.append('area_id', areaId);
    }
    if(severityType !== SeverityType.ALL){
        params.append('severity', severityType);
    }
    if(eventType !== EventType.ALL){
        params.append('event_type', eventType);
    }
    if(startDate !== DateCreated.ALL){
        created = '&created=>' + startDate + '-01-01';
    }
    return params + created;
}

export function filterEvents(areaId: string, severityType: string, eventType: string, startDate: string) {
    const queryParams = createQueryParams(areaId, severityType, eventType, startDate);        
    return executeRequest('/events?' + queryParams, {
        headers: { "Content-Type": "application/json" },
    });
}