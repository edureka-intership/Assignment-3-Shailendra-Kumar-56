const orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
    }; 


    // ---------------------------Assigment 3 2(a)--------------------------------------
    const total = Object.values(orderData).reduce(( first, second ) => first + second, 0);
    
    // ---------------------------Assigment 3 2(a) Output--------------------------------------
    console.log(`Total number of orders placed = ${total}`);

    // ---------------------------Assigment 3 2(b)--------------------------------------
     const proportion = Object.keys(orderData).map((key, index)=>({
        id: index + 1
      }))
       // ---------------------------Assigment 3 2(b) Output--------------------------------------
      console.log(`Total number of order proportions = ${proportion.length}`);


    // ---------------------------Assigment 3 2(c)--------------------------------------
    const result =Object.keys(orderData).map((key, index)=>({
      id: index + 1,
      order: key,
      order_percentage: (100 * orderData[key] / total).toFixed(2),
      'restaurant': 'Punjabi Tadka'
    }))
    
 // ---------------------------Assigment 3 2(c) Output--------------------------------------
    console.log(result)