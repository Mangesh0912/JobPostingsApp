import {IJobDetails, IResponse} from '../components/Jobpostings';
import {getCountryName} from '../common/utils';

export async function fetchJobPostings(url: string): Promise<IJobDetails[]> {
   
    const jobPostingsArr: IJobDetails[] = [];
    try {
        let res = await fetch(url);
        let response: IResponse = await res.json();
        const content: IJobDetails[] = response.content;
        const jobPostingsArr: IJobDetails[] = [];
        content.forEach( v => {
             const countryCode = v.location.country;
             const countryName = getCountryName(countryCode);
             const city = v.location.city;
             const departmentName = v.department.label;
             const postingId = v.id;
             jobPostingsArr.push({name: v.name, 
                   location: {country: countryCode, countryName: countryName, city: city},
                   department: {label : departmentName},
                   id: postingId
                });
        });

        return jobPostingsArr;        
     
     }catch(err) {
         console.log("Error occurred during fetching:", err);
     }

    return jobPostingsArr;
    
}