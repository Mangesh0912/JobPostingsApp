export const posting_details_url = "https://api.smartrecruiters.com/v1/companies/smartrecruiters/postings/{postingID}";
export const job_postings_url = "https://api.smartrecruiters.com/v1/companies/smartrecruiters/postings";


function populateMap() {
    let departmentMap = new Map<string, string>();
     departmentMap.set("Engineering", "18571");
     departmentMap.set("Product", "18588");
     departmentMap.set("Client Success", "18605");
    return departmentMap;
}

export const departmentMap = populateMap();

