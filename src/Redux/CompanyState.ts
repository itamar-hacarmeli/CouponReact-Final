import Company from "../Models/Company";



export class CompanyState{
    public companies:Company[] = [];
}

export enum CompanyActionType{
    CompanyDownloaded="CompanyDownloaded",
    CompanyAdded = "CompanyAdded",
    CompanyUpdated = "CompanyUpdated",
    CompanyDelete = "CompanyDelete"
}

export interface CompanyAction{
    type:CompanyActionType;
    payload?: any;
}

export function couponDownloadedAction(companies: Company[]):CompanyAction{
    return {type: CompanyActionType.CompanyDownloaded, payload:companies}
}
export function couponAddedAction(companies: Company):CompanyAction{
    return {type: CompanyActionType.CompanyAdded, payload:companies}
}

export function couponUpdateAction(companies: Company):CompanyAction{
    return {type: CompanyActionType.CompanyUpdated, payload:companies}
}

export function couponDeleteAction(id:number):CompanyAction{
    return {type: CompanyActionType.CompanyDelete, payload:id}
}


//reducer
export function companyReducer(currentState: CompanyState = new CompanyState, action:CompanyAction):CompanyState{
    const newState = {...currentState};

    switch(action.type){
        case CompanyActionType.CompanyDownloaded:
            newState.companies = action.payload
            break;
        case CompanyActionType.CompanyAdded:
            newState.companies.push(action.payload)
            break;
        case CompanyActionType.CompanyUpdated:
            newState.companies.push(action.payload)
            break;
        case CompanyActionType.CompanyDelete:
            localStorage.removeItem("companies")
            break;
    }
    return newState;
}