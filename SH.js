function companyPay(Hrs, EHrs){
    
    Ehrs_value = 200;

    let total = (+Hrs * 1000) + (+EHrs * Ehrs_value) ;
    return total;

};
companyPay(4, 0);
/*
Hrs = hours
EHrs = extra hours
Ehrs_value

*/