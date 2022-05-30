import { useNavigate } from "react-router-dom"
import { ComeBackBtn, MessageContainer, NotFoundContainer, NotFoundTitle, WarningIcon } from "../../styles";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate('/');
  }

  return (
    <NotFoundContainer>
      <MessageContainer>
        <NotFoundTitle>Página não encontrada</NotFoundTitle>
        <WarningIcon icon="ep:warning-filled" />
      </MessageContainer>
      <ComeBackBtn onClick={handleHomePage}>Volte para página inicial</ComeBackBtn>
    </NotFoundContainer>
  )
}
