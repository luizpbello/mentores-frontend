import {
  ContainerBoardModal,
  ContainerOnBoarding,
  OnBoardImage,
} from '@/styles/pages/onBoarding'
import onBoardImage from '@/assets/onBoarding/Ilustrações.svg'
import OnBoardModal from '@/components/molecules/OnBoardModal'
import { withAuth } from '@/context/Auth/withAuth'

function OnBoarding() {
  return (
    <ContainerOnBoarding>
      <OnBoardImage src={onBoardImage} alt="Background" />
      <ContainerBoardModal>
        <OnBoardModal />
      </ContainerBoardModal>
    </ContainerOnBoarding>
  )
}

export default withAuth(OnBoarding)
