import React from 'react';
import countryRegionData from 'country-region-data';
import JobPostingsDisplay from './JobPostingsDisplay';
import { Redirect } from 'react-router-dom';
import {departmentMap, job_postings_url} from '../common/constants';
import {getCountryCode, CountryRegionData} from '../common/utils';
import {fetchJobPostings} from '../dal/services'

export interface IJobPostingsProps {
    countryName: string;
    departmentName: string;
}

export interface ILocation {
     country: string;
     countryName: string;
     city: string;
}

export interface IDepartment {
     label: string;
}

export interface IJobDetails{
    name: string;
    location: ILocation;
    department: IDepartment;
    id: string;
}

export interface IJobPostingsState  {
    error: string;
    isLoaded: boolean;
    jobPostings: IJobDetails[];
    navigate: boolean;
    redirectUrl: string;
    countryRegionData: CountryRegionData[];
}

export interface IResponse {
    offset: number;
    limit: number;
    totalFound: number;
    content:[];
}


class Jobpostings extends React.Component<IJobPostingsProps, IJobPostingsState> {

    constructor(props: IJobPostingsProps, state: IJobPostingsState) {
           super(props);
           this.state = {
               error: "",
               isLoaded: false,
               jobPostings: [],
               navigate: false,
               redirectUrl: "",
               countryRegionData: countryRegionData
           }
    }

    componentDidUpdate(prevProps: IJobPostingsProps) {
        if(prevProps !== this.props) {
            this.updateJobPostings();
        }
    }

    componentDidMount() {
      this.fetchJobPostingsForUI();
      let result = countryRegionData.filter( v => v.countryName === "Germany");
    }

     updateJobPostings() {
        try{
           let url = "https://api.smartrecruiters.com/v1/companies/smartrecruiters/postings?country={country}&department={dept}";
           const {countryName, departmentName} = this.props;
           const countryShortCode: string = getCountryCode(countryName);
           const deptId: string = departmentMap.get(departmentName) || "";
           url = url.replace("{country}", countryShortCode);
           url = url.replace("{dept}", deptId);
           console.log("Url is:", url);
           fetchJobPostings(url)
             .then(v => this.setState({jobPostings: v}))
             .catch(err => console.log("error occurred is:", err));
        }catch(err) {
             console.log("Error is:", err);
        }
    }

     fetchJobPostingsForUI() {
            let url = job_postings_url ;
            fetchJobPostings(url)
                .then(v => this.setState({jobPostings: v}))
                .catch(err => console.log("error occurred is:", err));
     }

     handleClick = (evt: any) => {
         console.log(evt.target)
         const elem = evt.target;
         const nodeInfo = elem.getAttribute("node-info");
         console.log("Node info is:", nodeInfo);
         if(nodeInfo && nodeInfo === "designation") {
               const index = elem.getAttribute("node-index");
               const jobPosting = this.state.jobPostings[index];
               const postingId = jobPosting.id;
               this.setState({navigate: true, redirectUrl: "/jobdetails/" + postingId});
         }
     }

     render() {
         let {jobPostings, navigate, redirectUrl} = this.state;
         const jobPostingElem = "jobPostingElem"

         if(navigate) {
             return <Redirect to={redirectUrl} push={true} />
         }

         return (
             <div onClick={this.handleClick}>
                 {
                     jobPostings.map( (v, index) => {
                           return  <JobPostingsDisplay jobPostings={v} index={index} value={jobPostingElem} ></JobPostingsDisplay>
                     })
                 }
             </div>
         )
     }
}

export default Jobpostings;