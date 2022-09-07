class resturant_Manager{        //ResturantManager class, Type- Array 
    resturant_list =[
        {
            name:"Punjabi Tadka", address:"Mohali Road",city:"Chandigarh"
        },
        {
            name:"Champaran Meat House", address:"Gola Road",city:"Patna"
        },
        {
            name:"Starbucks", address:"10 No Market",city:"Bhopal"
        },
        {
            name:"Pizza Hut", address:"Namkom Market",city:"Ranchi"
        },
        {
            name:"Khatta Meetha", address:"City Center 4",city:"Bokaro"
        }
    ];

// PrintAllResturantNames, Type- Function , Arguments type-none 
             printAllResturantNames(){
    this.resturant_list.forEach((restro) => {
        console.log(restro.name);
    });
}
// 
// FilterResturant
filterResturantByCity(city){
    let restaurantarray = this.resturant_list.filter(item=>item.city==city);
	console.log("Filtered by ",city,restaurantarray)  
}

}

let obj = new resturant_Manager();
obj.printAllResturantNames();
obj.filterResturantByCity("Patna");