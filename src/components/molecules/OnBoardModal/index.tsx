import GridSpecialities from '@/components/atoms/GridSpecialities'
import {
  ModalContainer,
  TabsContainer,
  Tab,
  TabLabel,
  TabWrapper,
  TabLine,
} from './styled'
import { useState } from 'react'
import PerfilTab from '../PerfilTab'

export default function OnBoardModal() {
  const [step, setStep] = useState<1 | 2>(1)

  const changeSteps = (step: number) => {
    setStep(2)
  }

  return (
    <ModalContainer style={{ height: step === 1 ? '547px' : '767px' }}>
      <TabsContainer>
        <TabWrapper>
          <Tab>
            <TabLabel>ESPECIALIDADES</TabLabel>
            <TabLine style={{ width: step === 1 ? '258px' : '0' }} />
          </Tab>
        </TabWrapper>
        <TabWrapper>
          <Tab>
            <TabLabel>PERFIL</TabLabel>
            <TabLine style={{ width: step === 2 ? '258px' : '0' }} />
          </Tab>
        </TabWrapper>{' '}
      </TabsContainer>
      {step === 1 && <GridSpecialities stepNumber={changeSteps} />}
      {step === 2 && <PerfilTab onStep={setStep} />}
    </ModalContainer>
  )
}
