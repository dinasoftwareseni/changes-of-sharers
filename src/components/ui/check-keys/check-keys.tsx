import React, { FC } from 'react'
import {
  Button,
  ButtonGroup,
  Select,
  FormLayout,
  PageContainer,
  FlexContainer,
  Title,
  InputWrap,
  Label,
  Input,
} from '@reapit/elements'
import { formLayoutStyle } from './__style__/style'

const CheckKeysPage: FC = () => {
  return (
    <PageContainer>
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
    </PageContainer>
  )
}

export default CheckKeysPage
