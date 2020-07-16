import React from 'react';
import { IJobDetails } from './Jobpostings';
import '../styles/dashboard.css';

export interface IJobPostingDisplayProps {
      jobPostings: IJobDetails;
      index: number;
      value?: string;
}

export interface IJobPostingDisplayState {

}

class JobPostingsDisplay extends React.Component<IJobPostingDisplayProps, IJobPostingDisplayState> {
      
       constructor(props: IJobPostingDisplayProps, state: IJobPostingDisplayState) {
             super(props);
       }

       render() {
          let {jobPostings, index} = this.props;
          let name = jobPostings.name;
          let city = jobPostings.location.city;
          let countryName = jobPostings.location.countryName;

          return (
      
               <li key={index} className="jobPosting" data-test="posting">
                                    <b data-test="posting-name" className="cursor" node-info="designation" node-index={index}>{name}</b>
                                    <p data-test="posting-location" className="top" node-info="designation" node-index={index}>{city},{countryName}</p>
                                    
              </li>
          
        )
       }
}

export default JobPostingsDisplay;