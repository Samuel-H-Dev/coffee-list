import { useState } from "react"


export default function Coffees(){
const [coffeeList, setCoffeeList] = useState()
const [message, setMessage] = useState("Click a button above to get coffee list")


const getCoffee = async (type) => {
    setMessage("Loading...")
    setCoffeeList()

    const response = await fetch(`https://api.sampleapis.com/coffee/${type}`)
    const data = await response.json()
    setCoffeeList(data)
}

    return (
        <main>
            <div className="button-container">
                <button onClick={ () => {getCoffee("hot")}}>Hot</button>
                <button onClick={ () => {getCoffee("iced")}}>Iced</button>
            </div>

            <div className="coffee-list">

            {!coffeeList
             ? <p className="Message"> {message} </p>
             : coffeeList.map(coffee => (
                <div key={coffee.id} className="coffeeCard">
                    <h2>{coffee.title}</h2>
                    <div className="coffeeCardImg" 
                    style={{ backgroundImage: `url(${coffee.image})`}} />
                    {/* <img src={coffee.image} alt={coffee.description} /> */}
                </div>
             ))
             
            }            
            </div>
        </main>
        )
}