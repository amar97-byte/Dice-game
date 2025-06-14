import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play Dice Game</h2>
      <div className="text">
        <p>Select any Number</p>
        <p>Click on Dice Image</p>
        <p>After clicking on Dice , if selected numeber is equal to the Dice number you will get some points as Dice{""}</p>
        <p>If you get wrong guess then 2 point will be deducted</p>
      </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
max-width: 800px;
margin: 0 auto;
margin-top: 40px;
border-radius: 10px;
background-color: #fbf1f1;
padding: 20px;

h2{
    font-size: 24px;
}

.text{
    margin-top: 24px;
}
`
