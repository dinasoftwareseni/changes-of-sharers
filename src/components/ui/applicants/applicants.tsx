import React, { FC, useState } from 'react'
import { FlexContainer, Title, Table, elWFull, Button, Icon, elMt7, ButtonGroup } from '@reapit/elements'

export const ApplicantPage: FC = () => {
  const [indexExpandedRow, setIndexExpandedRow] = useState<number | null>(null)
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
                    <Button intent="low" data-testid={'test.button.action'}>
                      <Icon intent="primary" icon="editSolidSystem" data-testid={'test.icon.action'} />
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
        <Button chevronRight intent="primary">
          Next
        </Button>
      </ButtonGroup>
    </FlexContainer>
  )
}
