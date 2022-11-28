import React, { FC } from 'react'
import { useHistory } from 'react-router'
import { Routes } from '../../../constants/routes'
import { FlexContainer, Title, Table, elWFull, Button, Icon, elMt7, ButtonGroup } from '@reapit/elements'
import { actionButton } from './__style__/style'
import { navigate } from '../../../utils/navigation'

export const ApplicantPage: FC = () => {
  const [indexExpandedRow, setIndexExpandedRow] = React.useState<number | null>(null)
  const applicantDummy = {
    applicants: [
      {
        name: 'Derek',
        address: 'Ketapang Street',
        code: 123,
        phone: '081226213344',
      },
      {
        name: 'Rodney',
        address: 'Melati Street',
        code: 123,
        phone: '081226213344',
      },
      {
        name: 'Brad',
        address: 'Pinus Street',
        code: 123,
        phone: '081226213344',
      },
    ],
  }

  const history = useHistory()

  return (
    <FlexContainer isFlexAuto isFlexColumn>
      <FlexContainer isFlexJustifyBetween>
        <Title>Manage Applicants</Title>
      </FlexContainer>
      <FlexContainer isFlexWrap>
        <Table
          className={elWFull}
          numberColumns={2}
          indexExpandedRow={indexExpandedRow}
          setIndexExpandedRow={setIndexExpandedRow}
          data-testid={'test.table.tenancyCheckSetupTable'}
          rows={applicantDummy.applicants.map((item) => {
            return {
              cells: [
                {
                  label: 'Name',
                  value: item.name,
                  narrowTable: {
                    showLabel: true,
                    isFullWidth: true,
                  },
                  cellHasDarkText: true,
                },
                {
                  label: 'Action',
                  value: (
                    <Button intent="neutral" className={actionButton}>
                      <Icon icon="cancelSolidSystem" intent="primary" iconSize="small" />
                    </Button>
                  ),
                  narrowTable: {
                    showLabel: true,
                    isFullWidth: true,
                    order: 1,
                  },
                },
              ],
            }
          })}
        />
      </FlexContainer>
      <FlexContainer className={elMt7}>
        <Button type="submit" intent="primary">
          Add
        </Button>
      </FlexContainer>
      <ButtonGroup alignment="right">
        <Button chevronRight intent="primary" onClick={navigate(history, Routes.CHECK_KEYS)}>
          Next
        </Button>
      </ButtonGroup>
    </FlexContainer>
  )
}
