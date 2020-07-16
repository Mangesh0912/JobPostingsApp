import React from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/dashboard.css';
import countryRegionData from 'country-region-data';


const useStyles = makeStyles((theme) => ({
    label: {
      display: 'block',
    },
    input: {
      width: 200,
    },
    listbox: {
      width: 200,
      margin: 0,
      padding: 0,
      zIndex: 1,
      position: 'absolute',
      listStyle: 'none',
      backgroundColor: theme.palette.background.paper,
      overflow: 'auto',
      maxHeight: 200,
      border: '1px solid rgba(0,0,0,.25)',
      '& li[data-focus="true"]': {
        backgroundColor: '#4a8df6',
        color: 'white',
        cursor: 'pointer',
      },
      '& li:active': {
        backgroundColor: '#2977f5',
        color: 'white',
      },
    },
  }));
  

export interface IOptions {
    title: string;
}

export interface IAutoCompleteProps {
    handleChange(data: IAutoCompleteParams): void;
    componentType: string;
    placeHolder: string;
}

export interface IAutoCompleteState {
     
}

export interface IAutoCompleteParams {
     componentName: string;
     componentValue: string;
}


export const AutoCompleteComponent = (props: IAutoCompleteProps) => {
    const classes = useStyles();
    const {componentType, placeHolder} = props;
    const [textboxData, setTextBoxData] = React.useState({componentName:'', componentValue:''})
    const onTextChange = (event: any) => {
        setTextBoxData({ ...textboxData, [event.target.name]: event.target.value, "componentName": componentType });
    }
    
    React.useEffect(() => {
        if (props.handleChange) {
          console.log("Text box data is:", textboxData)  
          props.handleChange(textboxData)
        }
      }, [textboxData.componentName, textboxData.componentValue])
    
    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
      } = useAutocomplete({
        id: 'use-autocomplete-demo',
        options: (componentType === "Country") ? countryValues : departmentValues,
        getOptionLabel: (option) => option.title,
      });
  
     return (
         <div>
             <div {...getRootProps()}>
              <input className={classes.input} {...getInputProps()} name="componentValue" onBlur={onTextChange} placeholder={placeHolder} />
            </div>
            {groupedOptions.length > 0 ? (
               <ul className={classes.listbox} {...getListboxProps()}>
                 {groupedOptions.map((option, index) => (
                    <li {...getOptionProps({ option, index })}>{option.title}</li>
                  ))}
              </ul>
      ) : null}
         </div>
     )
}


const countryValues: IOptions[] = getCountryValues();

const departmentValues: IOptions[] = [
    {title: "Product"},
    {title: "Client Success"},
    {title: "Engineering"}
]

function getCountryValues() : IOptions[] {
    const countryValues: IOptions[] = [];

    console.log("Country region data:", countryRegionData);
    countryRegionData.forEach( v => {
        countryValues.push({title: v.countryName});
    })

    return countryValues;
}


