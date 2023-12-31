import React from 'react';
import styled from 'styled-components';

const DivWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  background-color: #1e1f21;
  color: #dcdddd;
  padding: 16px;
`;
const TextWrapper = styled('span')`
  font-size: 32px;
`;
const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 8px;
`;
const ButtonWrapper = styled('button')`
  border: unset;
  background-color: #565759;
  height: 20px;
  margin-right: 2px;
  border-radius: 4px;
  color: #e6e6e6;
  cursor: pointer;
`;
const TodayButton = styled(ButtonWrapper)`
  padding: 0 16px;
  font-weight: bold;
`;
const ButtonsWrapper = styled('div')`
  display: flex;
  align-items: center;
`;

const Monitor = ({today, prevHandler, todayHandler, nextHandler}) => {
  return (
    <DivWrapper>
      <div>
        <TitleWrapper>{today.format('MMMM')}</TitleWrapper>
        <TextWrapper>{today.format('YYYY')}</TextWrapper>
      </div>
      <ButtonsWrapper>
        <ButtonWrapper onClick={prevHandler}> &lt; </ButtonWrapper>
        <TodayButton onClick={todayHandler}> Today </TodayButton>
        <ButtonWrapper onClick={nextHandler}> &gt; </ButtonWrapper>
      </ButtonsWrapper>
    </DivWrapper>
  )
}

export {Monitor}