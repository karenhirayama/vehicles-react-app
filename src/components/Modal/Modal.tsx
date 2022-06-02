import { FC } from "react";
import { CarProps } from "../../interfaces";
import { AddIcon, BtnSection, InputContainer, InputImage, InputSection, InputText, ModalBackground, ModalContainer, ModalHeader, ModalHeaderBtn } from "../../styles";
import inputImg from '../../assets/images/input-image.png'
interface ModalProps {
  isOpen: boolean;
  handleClose: any;
  inputValues: CarProps;
  handleInputChange: any;
  handleValuesCar: any;
  handleAddNewCar?: boolean;
};

export const Modal: FC<ModalProps> = ({ isOpen, handleClose, inputValues, handleInputChange, handleValuesCar, handleAddNewCar }) => {
  if (!isOpen) return null;

console.log(inputValues.image_src)
  return (
    <ModalBackground>
      <ModalContainer>
        <ModalHeader>
          <h1>Adicionar novo</h1>
          <ModalHeaderBtn icon="ant-design:close-circle-outlined" onClick={handleClose} />
        </ModalHeader>
        <InputContainer>
          <InputImage>
            <img src={inputValues.image_src || inputImg} alt="Input" />
            <label htmlFor="file">Selecionar Image</label>
            <input type="file" id="file" name="Input" style={{ visibility: 'hidden' }}
                onChange={(e) => handleInputChange(e)} />
          </InputImage>
          <InputText>
            <InputSection>
              <label htmlFor="name">Nome</label>
              <input name="name" id="name" type="text" maxLength={12}
                value={inputValues?.name}
                onChange={(e) => handleInputChange(e)} />
            </InputSection>
            <InputSection>
              <label htmlFor="year">Ano</label>
              <input name="year" id="year" type="number"
                value={inputValues?.year}
                onChange={(e) => handleInputChange(e)} />
            </InputSection>
            <InputSection>
              <label htmlFor="speed">Velocidade Máxima Km/h</label>
              <input name="speed" id="speed" type="number"
                value={inputValues?.speed}
                onChange={(e) => handleInputChange(e)} />
            </InputSection>
            <InputSection>
              <label htmlFor="economic_rating">Nota economica</label>
              <input name="economic_rating" id="economic_rating" type="number" min="0" max="1"
                value={inputValues?.economic_rating}
                onChange={(e) => handleInputChange(e)} />
            </InputSection>
            <InputSection>
              <label htmlFor="users_rating">Nota usuários</label>
              <input name="users_rating" id="users_rating" type="number" min="0" max="1" 
                value={inputValues?.users_rating}
                onChange={(e) => handleInputChange(e)} />
            </InputSection>
            <InputSection>
              <label htmlFor="product_link">Link produto</label>
              <input name="product_link" id="product_link" type="text" maxLength={50}
                value={inputValues?.product_link}
                onChange={(e) => handleInputChange(e)} />
            </InputSection>
          </InputText>
        </InputContainer>
        <BtnSection>
          <button className="btn__cancel" onClick={handleClose}>Close</button>
          <button className="btn__add" onClick={handleValuesCar}>
            {handleAddNewCar ?
              <p>
                <AddIcon icon="carbon:add" style={{ color: '#EBEFF2', marginRight: '8px', fontSize: '25px' }} />
                Adicionar Novo</p>
              : <p>Salvar</p>
            }
          </button>
        </BtnSection>
      </ModalContainer>
    </ModalBackground>
  )
}
