import { useId, useState } from 'react';
import { useDispatch } from "react-redux";
import { createCar } from "../../redux";
import { Table } from "../../layout";
import { AddBtn, AddIcon, ListContainer, ListHeader, ListTitle } from "../../styles";
import { Modal } from "../../components";

export const List = () => {
  const [showModal, setShowModal] = useState(false);
  const newId = useId()
  const [inputValues, setInputValues] = useState<any>({
    id: newId,
    name: '',
    year: 2015,
    speed: 180,
    economic_rating: 9 / 10,
    users_rating: 8 / 10,
    image_src: ''
  });
  const dispatch = useDispatch();

  const handleShowModalCreteCar = () => {
    setShowModal(!showModal);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleCreateCar = () => {
    dispatch(createCar(inputValues) as any);
    setShowModal(false);
  }

  return (
    <>
      <ListContainer>
        <ListHeader>
          <ListTitle>Lista</ListTitle>
          <AddBtn onClick={handleShowModalCreteCar}>
            <AddIcon icon="carbon:add" />
            <p>Adicionar Novo</p>
          </AddBtn>
        </ListHeader>
        <div>
          <Table />
        </div>
      </ListContainer>
      <Modal
        isOpen={showModal}
        handleClose={handleShowModalCreteCar}
        inputValues={inputValues}
        handleInputChange={handleInputChange}
        handleValuesCar={handleCreateCar}
        handleAddNewCar={true}
      />
    </>
  )
}
