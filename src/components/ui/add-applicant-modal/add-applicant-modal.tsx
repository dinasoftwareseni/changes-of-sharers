import React, { FC } from 'react'
import {
  Button,
  ButtonGroup,
  ModalProps,
  FlexContainer,
  Title,
  FormLayout,
  InputWrap,
  Select,
  useMediaQuery,
  elMl3,
  InputGroup,
  Label,
  Input,
} from '@reapit/elements'
import { formLayoutStyle } from '../check-keys/__style__/style'

export type AddApplicantModalProps = {
  Modal: React.FC<Partial<ModalProps>>
  isOpen: boolean
  onModalClose: () => void
}

export const AddApplicantModal: FC<AddApplicantModalProps> = ({ Modal, isOpen, onModalClose }) => {
  return (
    <Modal>
      <FlexContainer isFlexAuto isFlexColumn>
        <FlexContainer>
          <Title>Check Keys</Title>
        </FlexContainer>
        <FormLayout hasMargin className={formLayoutStyle}>
          <InputWrap>
            <Label>Start Date</Label>
            <Input type="date" />
          </InputWrap>
          <InputWrap>
            <Label>Term</Label>
            <Select>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </Select>
          </InputWrap>
          <InputWrap>
            <Label>Rent (pcm)</Label>
            <Input type="number" />
          </InputWrap>
        </FormLayout>
      </FlexContainer>
      <ButtonGroup alignment="right">
        <Button chevronRight intent="primary">
          Create Clone
        </Button>
      </ButtonGroup>
    </Modal>
  )
}
