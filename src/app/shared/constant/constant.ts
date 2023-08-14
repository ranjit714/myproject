export const employearr= [
    {id:'101',name:"Ranjit",contact:9028912009,gender:"Male",address:"hingoli",salary:20000,post:"fullstack devoloper"},
    {id:'102',name:"ankita",contact:9028912009,gender:"feMale",address:"pune",salary:12000,post:"linux system admin"},
    {id:'103',name:"naresh",contact:9028912009,gender:"Male",address:"hadapsar",salary:10000,post:"E-Mail marketing"},
    {id:'104',name:"anjali",contact:9028912009,gender:"feMale",address:"sangi",salary:70000,post:"softwere Engineer"},
    {id:'105',name:"anjali",contact:9028912009,gender:"feMale",address:"sangi",salary:60000,post:"softwere dovoloper"},
]

export const RegName: String = "[A-Za-z ]{2,30}";
export const RegPassword: String = "[({8,})(/d)([A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]";
export const RegContact: String = "([0-9]{0,10})";
export const RegEmail: String = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


export const empAPI="http://localhost:3000/employee";

export const Base_Url="http://localhost:3000/";
