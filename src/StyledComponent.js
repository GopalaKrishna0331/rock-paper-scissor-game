import styled from 'styled-components'

export const Container = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding-left: 120px;
    padding-right: 120px;
  }
`

export const MainContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  padding: 22px;
  width: 100%;
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  color: #ffffff;
  font-size: 28px;
  margin: 0;
  font-weight: lighter;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border: none;
  border-radius: 12px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ScoreHead = styled.p`
  font-family: ${props => (props.count ? 'Roboto' : 'Bree Serif')};
  font-size: ${props => (props.count ? '36px' : '24px')};
  margin-bottom: 0;
  margin-top: 0;
`

export const UnorderList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 60%;
  padding-left: 0;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 0;
    margin-left: 0px;
  }
`
export const ListElement = styled.li`
  width: 30%;
  margin: 20px;
  align-self: center;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const PopContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const ResultContainer = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`
export const GameResult = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Paragraph = styled.p`
  font-family: 'roboto';
  color: #ffffff;
  font-size: 26px;
  align-self: center;
`
