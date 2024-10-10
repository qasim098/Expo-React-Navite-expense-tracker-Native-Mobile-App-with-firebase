import axios from "axios";
async function storeexpence(expencedata){
const response=await axios.post('your api key',expencedata);
const id=response.data.name;
return id;
}
export async function  fetchexpences(){
  const response=await axios.get('your api key');
  const expences=[];
  for(const key in response.data){
    const expenseobj={
    id:key,
    amount:response.data[key].amount,
    date:new Date(response.data[key].date),
    description:response.data[key].description,
    };
    expences.push(expenseobj);
  }
  return expences;
}
export async function updateexpense(id,expencedata){
 return axios.put(`your api key`,expencedata)

}
export async function deleteexpense(id){
 return axios.delete(`your api key`)

}
export default storeexpence;