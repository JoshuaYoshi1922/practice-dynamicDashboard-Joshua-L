let IsPremium = false;

function isPremium(){
 return IsPremium ? 
    (<h3>  "Thank you for
        being a premium member!"</h3>):     
    (<h3>   "Upgrade to premium to enjoy exclusive
            features!"</h3>)
    }



export default isPremium
