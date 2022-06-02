import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "../../../components";
import { CarProps } from "../../../interfaces";
import { deleteCar, updateCar } from "../../../redux";
import { ActionIcon, TableBodyCarProp, TableBodyContainer } from "../../../styles";

export const TableBody: FC<CarProps> = ({ id, name, year, speed, economic_rating, users_rating, image_src }) => {
  const [ showModal, setShowModal ] = useState(false);
    const [inputValues, setInputValues] = useState<any>({
    id: id,
    name: name,
    year: year,
    speed: speed,
    economic_rating: economic_rating,
    users_rating: users_rating,
    image_src: image_src
  });
  const dispatch = useDispatch();

  const handleShowModalUpdateCar = () => {
    setShowModal(!showModal);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleUpdateCar = () => {
    dispatch(updateCar(inputValues) as any);
    setShowModal(false);
  };

  const handleDeleteCar = () => {
    dispatch(deleteCar(id) as any);
  }

  return (
    <>
      <TableBodyContainer>
        <TableBodyCarProp>{name}</TableBodyCarProp>
        <TableBodyCarProp>{year}</TableBodyCarProp>
        <TableBodyCarProp>{speed}</TableBodyCarProp>
        <TableBodyCarProp>{economic_rating * 10}/10</TableBodyCarProp>
        <TableBodyCarProp>{users_rating * 10}/10</TableBodyCarProp>
        <div></div>
        <ActionIcon icon="akar-icons:trash-can" onClick={handleDeleteCar} />
        <ActionIcon icon="clarity:edit-line" onClick={handleShowModalUpdateCar} />
      </TableBodyContainer>
      <Modal
        isOpen={showModal}
        handleClose={handleShowModalUpdateCar}
        inputValues={inputValues}
        handleInputChange={handleInputChange}
        handleValuesCar={handleUpdateCar}
      />
    </>
  )
}
