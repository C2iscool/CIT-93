# Week 12 Implement class into mileage

# My idea of first starting would involve going into handleinput.js and making a new class there miles with the miles, gallons and price. If we need to export it to the other modules, then we can do that. I don't think we need to hide or encapsulate our objects or variables, but if we do, I can understand that. I imagine then that we can also call back our calculation code too, but outside the class.

# Since we imported our class into main.js, I know where we are looking. I figure we may put inside our evemtListener right where the mileage calculation is called. I just don't know if we can put the class into dataObj or if we can copy it over next to it.

# For me, a lot broke. I cleared out the local storage like you did and it gives me an error an empty array with no initial value. If I submit the numbers, it doesn't even render anything. It appears that anywhere that MY_DATA is associated with the old value of miles, gallons and price, the code is broken. MY_DATA cannot be defined. I think we need to go out and change all the instances it is mentioned and replace them with the underscored version.