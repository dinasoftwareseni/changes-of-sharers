import React, { FC } from 'react'
import { Button, ModalProps, FlexContainer, FormLayout, Input, Icon, Table, elMb7, elWFull } from '@reapit/elements'
import { APPLICANTS_DATA } from '../../../constants/applicant-data'
import { formLayoutModal, modalApplicant } from '../applicants/__style__/style'

export type AddApplicantModalProps = {
  Modal: React.FC<Partial<ModalProps>>
  isOpen: boolean
  onModalClose: () => void
}

export const AddApplicantModal: FC<AddApplicantModalProps> = ({ Modal, isOpen, onModalClose }) => {
  const [indexExpandedRow, setIndexExpandedRow] = React.useState<number | null>(null)
  return (
    <Modal className={modalApplicant}>
      <FlexContainer isFlexColumn>
        <FormLayout hasMargin className={formLayoutModal}>
          <Input type="search" placeholder="search by name" />
          <Input type="search" placeholder="search by address" />
          <Input type="search" placeholder="search by code" />
          <Input type="search" placeholder="search by telephone" />
          <Input type="search" placeholder="search by email" />
        </FormLayout>
      </FlexContainer>
      <FlexContainer className={elMb7}>
        <Button type="submit" intent="primary">
          Search
        </Button>
      </FlexContainer>
      <FlexContainer isFlexWrap>
        <Table
          className={elWFull}
          numberColumns={2}
          indexExpandedRow={indexExpandedRow}
          setIndexExpandedRow={setIndexExpandedRow}
          data-testid={'test.table.tenancyCheckSetupTable'}
          rows={APPLICANTS_DATA.applicants.map((item) => {
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
                    <Button intent="neutral">
                      <Icon icon="tickSolidSystem" intent="primary" iconSize="small" />
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
    </Modal>
  )
}
