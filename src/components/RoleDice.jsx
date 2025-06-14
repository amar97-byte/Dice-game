import styled from "styled-components"

const RoleDice = ({roleDice , currentDice}) => {

  return (
    <DiceContainer>
     <div className="dice" onClick={roleDice}>
        <img src={`/Images/dice_${currentDice}.png`} alt="Dice 1" />
     </div>

     <p>click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;

    p{
        font-size: 24px;
    }

    .dice{
        cursor: pointer;
    }
`;
