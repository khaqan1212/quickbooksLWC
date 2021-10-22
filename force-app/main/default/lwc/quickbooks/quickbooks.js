import { LightningElement , wire, track, api} from 'lwc';
import fetchDataHelper from '@salesforce/apex/QuickbooksLwcController.getAllCustomers';
//import fetchDataHelper from './fetchDataHelper';

const columns = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];


export default class Quickbooks extends LightningElement {

    @track mapData = [];
    columns = columns;
    //console.log('lwc contriller');
    // eslint-disable-next-line @lwc/lwc/no-async-await
    @wire(fetchDataHelper)
    wiredCustomerInfo({error, data}){
        if(data){
            //this.mapData = data;
            this.error = undefined;
            console.log('data is:'+this.data);
            //for (let key in data) {
            //    this.mapData.push({value:data[key], key:key});
            //}
        } else if(error){
          this.error = error;
          this.buildingInfos = undefined;
          
          }
    }
}