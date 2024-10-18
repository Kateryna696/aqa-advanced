function divide(numerator,denominator){
    if (denominator === 0) {
        throw new Error("Division by 0 is impossible.");
      
    }
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Both arguments must be numbers.");
        
    }
    return numerator/denominator;
}  

try {
    let result =  divide(10,5);  
    console.log("The result of dividing is: " + result);  
  } catch (error) {
    console.error('Error:', error.message);
  }finally {
     console.log("The end!")
  }
  try {
    let result =  divide(10,0);  
    console.log("The result of dividing is: " + result);  
  } catch (error) {
    console.error('Error:', error.message);
  }finally {
     console.log("The end!")
  }
  try {
    let result =  divide("10",5);  
    console.log("The result of dividing is: " + result);  
  } catch (error) {
    console.error('Error:', error.message);
  }finally {
     console.log("The end!")
  }