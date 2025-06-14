import styled from 'styled-components'
import { Button } from '../styles/Button';

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
     <img src="/Images/dices.png" alt="Dices" />
      </div>

     <div className="Content">
      <h1>Dice Game</h1>
      <Button onClick={toggle} >Play Now</Button>
     </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
max-width: 1180px;
display: flex;
height: 100vh;
margin: 0 auto;
align-items: center;

.Content {
    h1{
      font-size: 96px;
      white-space: nowrap;
      margin-bottom: auto;
    }
  }
`;


