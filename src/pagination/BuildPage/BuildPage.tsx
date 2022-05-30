
import { useNavigate } from 'react-router-dom';
import { BuildIcon, BuildPageComeBackBtn, BuildPageContainer, BuildPageMessageContainer, BuildPageTitle } from '../../styles';


export const BuildPage = () => {
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate('/');
  }

  return (
    <BuildPageContainer>
      <BuildPageMessageContainer>
        <BuildPageTitle>Página em construção</BuildPageTitle>
        <BuildIcon icon="ic:round-build-circle" />
      </BuildPageMessageContainer>
      <BuildPageComeBackBtn onClick={handleHomePage}>Volte para página inicial</BuildPageComeBackBtn>
    </BuildPageContainer>
  )
}

