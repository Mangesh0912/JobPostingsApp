import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {posting_details_url} from '../common/constants';
import {Markup} from 'interweave';
import { Redirect } from 'react-router-dom';
import {getCountryName} from '../common/utils'

export interface IJobpostingDetailsProps {
    
}

export interface IJobpostingDetailsState {
    jobDescription: string;
    qualifications: string;
    navigate: boolean;
    name: string;
    city: string;
    country: string;
}


class JobpostingDetails extends React.Component<IJobpostingDetailsProps, IJobpostingDetailsState> {

    constructor(props: IJobpostingDetailsProps, state: IJobpostingDetailsState) {
           super(props);
           this.state = {
              jobDescription: "",
              qualifications: "",
              navigate: false,
              name: "",
              city: "",
              country: ""
           }
    }

    componentDidMount() {
       this.fetchJobDetails();
    }

    async fetchJobDetails() {
         let url = posting_details_url;
         let path = window.location.pathname;
         let postingId = path.split("/")[2];
         url = url.replace("{postingID}", postingId);
         try {
           let res = await fetch(url);
           let response = await res.json();
           let jobDescription = response.jobAd.sections.jobDescription.text;
           const qualifications = response.jobAd.sections.qualifications.text;
           const name = response.name;
           const city = response.location.city;
           const countryCode = response.location.country;
           const country = getCountryName(countryCode);
           this.setState({jobDescription: jobDescription, qualifications: qualifications, name: name, city: city, country: country});
         }catch(err) {
              console.log("Error occurred:", err);
         }

    }

    navigateToJobPostingsPage = () => {
          this.setState({navigate: true});
    }
    
    render() {
        let {jobDescription, qualifications, navigate, name, city, country} = this.state;
        if(navigate) {
             return <Redirect to="/" push={true} ></Redirect>
        }

        return(
            <div className="dashboard">
                 <br/>
                 <div className="container">
                     <p onClick={this.navigateToJobPostingsPage} className="cursor" data-test="back">
                         <i className="fa fa-long-arrow-left" aria-hidden="true"></i> back to the list
                      </p>
                     <br/>
                     <b data-test="posting-name">{name}</b>
                     <p data-test="posting-location" className="top">{city}, {country}</p>
                     <br/>
                     <b>Job Description</b>
                     <div data-test="job-description"><Markup  content = {jobDescription}/></div>
                     <div data-test="job-qualifications"> <Markup content = {qualifications}/></div>
                  </div>   
            </div>
        )
    }
}

export default JobpostingDetails;