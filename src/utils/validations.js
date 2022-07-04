
export const validateAge = (year) => {
  return year != "Invalid Date" || year >= 18 ? true : false
};

export const validateEmail = (email) => {
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
  if(!email.legth == 0 || regex.test(email) === false){
        return false;
        }
   return true;
};

export const calculateAge = (birthday) => { 
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}