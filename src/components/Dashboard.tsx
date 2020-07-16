import React from 'react';
import '../styles/dashboard.css';
import 'font-awesome/css/font-awesome.min.css';
import Jobpostings from './Jobpostings';
import 'react-dropdown/style.css';
import {AutoCompleteComponent, IAutoCompleteParams} from '../common/AutoCompleteComponent';

export interface IDashboardProps {

}
export interface IDashboardState {
    countryName: string;
    departmentName: string;
    countryNameParams: string;
    departmentNameParams: string;
}

class Dashboard extends React.Component<IDashboardProps, IDashboardState> {

    constructor(props: IDashboardState, state: IDashboardState) {
         super(props);
         this.state = {
             countryName: "",
             departmentName: "",
             countryNameParams: "",
             departmentNameParams: ""
         }
    }

    handleChange = (data: IAutoCompleteParams) => {
        console.log("Data from Autocomplete component is:", data);
        let componentType = data.componentName;
        let componentValue = data.componentValue;
        if(componentType === "Country") {
             this.setState({countryNameParams: componentValue});
        }
        else if(componentType === "Department") {
            this.setState({departmentNameParams: componentValue});
        }
    }

    applyFilter = () => {
        const{countryNameParams, departmentNameParams} = this.state;
        this.setState(
            {countryName: countryNameParams, departmentName: departmentNameParams}
        )
    }


    render() {
        let {countryName, departmentName} = this.state;
        return (
            <div data-test="app" className="dashboard">
                <br/>
                <br/>
                <div className="container">
                   <b>SmartRecruiters Postings List App</b>
                   <br/>
                   <br/>
                   <div className="box">
                      <AutoCompleteComponent handleChange={this.handleChange} 
                        componentType="Country" placeHolder="Country"
                      ></AutoCompleteComponent>
                       &nbsp;&nbsp;&nbsp;&nbsp;
                      <AutoCompleteComponent handleChange={this.handleChange}
                        componentType="Department" placeHolder="Department"
                      ></AutoCompleteComponent>
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <button onClick={this.applyFilter}>Filter List</button>
                   </div>
                   
                   
                   <br/>
                   <br/>
                   
                   <Jobpostings countryName={countryName} departmentName={departmentName}></Jobpostings>
                </div>
            </div>
        )
    }
}

export default Dashboard;

