import React from "react";

function OnChange(){

    function handleClick(event){
    event.preventDefault()
    console.log(event.target.value)
    }

    return(
        <section className="form-event">
            <form>
                <input onChange={handleClick} type="text" placeholder='Enter your full name'/>
                <input type="email" placeholder='Enter your email'/>
                <input type="password" placeholder='Enter your full name'/>
                <input type="Submit" value='submit'/>
            </form>
        </section>
    )
}

export default OnChange;