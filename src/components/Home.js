import React from 'react'
import styled from "styled-components"
import Section from './Section'

const data = [{
    title: "Model S",
    description: "Order Online for Touchless Delivery",
    leftBtnText: "Custom Order",
    rightBtnText: "Existing Inventory",
    backgroundImg: "model-s.jpg"
},
{
    title: "Model Y",
    description: "Order Online for Touchless Delivery",
    leftBtnText: "Custom Order",
    rightBtnText: "Existing Inventory",
    backgroundImg: "model-y.jpg"
},
{
    title: "Model 3",
    description: "Order Online for Touchless Delivery",
    leftBtnText: "Custom Order",
    rightBtnText: "Existing Inventory",
    backgroundImg: "model-3.jpg"
},
{
    title: "Model X",
    description: "Order Online for Touchless Delivery",
    leftBtnText: "Custom Order",
    rightBtnText: "Existing Inventory",
    backgroundImg: "model-x.jpg"
},
{
    title: "Lowest Cost Solar Panels in America",
    description: "Money-back guarantee",
    leftBtnText: "Order Now",
    rightBtnText: "Learn more",
    backgroundImg: "solar-panel.jpg"
},
{
    title: "Solar for New Roofs",
    description: "Solar Roof Costs Less Than a New Roof Plus Solar Panels",
    leftBtnText: "Order Now",
    rightBtnText: "Learn more",
    backgroundImg: "solar-roof.jpg"
},
{
    title: "Accessories",
    leftBtnText: "SHop Now",
    backgroundImg: "accessories.jpg"
}]

function Home() {
    return (
        <Container>
           {data.map(item => (
            <Section
                title={item.title}
                description={item.description}
                leftBtnText={item.leftBtnText}
                rightBtnText={item.rightBtnText}
                backgroundImg={item.backgroundImg}
            />
           ))}
           
        </Container>
    )
}

export default Home


const Container = styled.div`
    height: 100vh;
`