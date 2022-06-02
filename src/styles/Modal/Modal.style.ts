
import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const ModalBackground = styled.div`
  position: fixed; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  background-color: rgba(255, 255, 255, 0.3);
  overflow: auto;
`

export const ModalContainer = styled.div`
  width: 684px;
  left: 308px;
  top: 136px;
  background: #EBEFF2;
  box-shadow: 0px 6px 24px 3px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  margin: 136px auto;
`

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: #1D2527;
    margin: 40px;
  }
`

export const ModalHeaderBtn = styled(Icon)`
  color: #1D2527;
  font-size: 21px;
  margin-right: 41px;
  cursor: pointer;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
`

export const InputImage = styled.div`
  display: flex;
  flex-direction: column;

  & > img {
    width: 225px;
    width: 225px;
    height: 225px;
    border-radius: 24px;
  }

  & label {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 200%;
    margin-top: 16px;
  }
`

export const InputText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > label {
    color: #808080;
    font-size: 16px;
  }

  & > input {
    color: #1D2527;
    background: transparent;
    width: 323px;
    height: 40px;
    border: 1px solid #1D2527;
    border-radius: 6px;
    padding-left: 16px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
  }
`

export const BtnSection = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
  padding: 40px;

  & .btn__cancel {
    background: transparent;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 200%;
    color: #000000;
    border: none;
  }

  & .btn__add {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #1D2527;
    border-radius: 21px;

    & > p {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 200%;
      color: #EBEFF2;
      margin: 0;
      padding: 8px 72px;
    }
  }
`