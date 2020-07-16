import countryRegionData from 'country-region-data';

export interface regions {
    name: string;
    shortCode: string;
}

export interface CountryRegionData {
    countryName: string;
    countryShortCode: string;
    regions: regions[];
}

const countryRegionDataList: CountryRegionData[] = countryRegionData;


export function getCountryCode(countryName: string ): string {

     if(!countryName) {
         return "";
     }

     const countryNameObj: CountryRegionData[] = countryRegionDataList.filter( v => v.countryName.toLowerCase() === countryName.toLowerCase());
     if(countryNameObj) {
         return countryNameObj[0].countryShortCode.toLowerCase();
     }

     else {
         return "";
     }

}

export function getCountryName(countryCode: string): string {
     
     if(!countryCode) {
         return "";
     }
     const countryNameObj: CountryRegionData[] = countryRegionDataList.filter( v => v.countryShortCode.toLowerCase() === countryCode.toLowerCase());
     if(countryNameObj) {
        return countryNameObj[0].countryName;
    }

     return "";
}