// Create Function sumObjectValues() that will sum all values of
// the fields that contain numbers . ensure that iteration is
// done only over own property of the object

function sumObjectValues(){
    let car = {
        carName : 'Bmw',
        carPrice : 1000000,
        downPayment : 300000,
        installment : 11700,
        installmentYears : 5,
        insuranceYears : 3,
        paymentDone : 'Yes'
    }
    let totalSum = 0;
    // let keys = Object.keys(car);
    for (let i=0; i<Object.keys(car).length; i++){
        if(typeof(Object.values(car)[i]) == 'number'){
            totalSum +=Object.values(car)[i];
        }
    }
    console.log(totalSum);
}
sumObjectValues();