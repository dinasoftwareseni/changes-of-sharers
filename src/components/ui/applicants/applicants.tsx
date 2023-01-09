import React, { FC, useState } from 'react'
import { useHistory } from 'react-router'
import { Routes } from '../../../constants/routes'
import {
  Modal,
  FlexContainer,
  Title,
  Table,
  elWFull,
  Button,
  Icon,
  elMt7,
  elMb7,
  ButtonGroup,
  Input,
  FormLayout,
  useModal,
} from '@reapit/elements'
import { actionButton, formLayoutModal, modalSearch } from './__style__/style'
import { navigate } from '../../../utils/navigation'
import { AddApplicantModal } from '../add-applicant-modal/add-applicant-modal'

export const ApplicantPage: FC = () => {
  const [indexExpandedRow, setIndexExpandedRow] = React.useState<number | null>(null)

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const {
    Modal: AddApplicantModalView,
    modalIsOpen: addApplicantModalIsOpen,
    openModal: openAddApplicantModal,
    closeModal: closeAddApplicantModal,
  } = useModal('root')

  function doOpenAddApplicantModal() {
    openAddApplicantModal()
  }

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
    <>
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
          <Button type="submit" intent="primary" onClick={() => setModalIsOpen(!modalIsOpen)}>
            Add Applicant
          </Button>
        </FlexContainer>
        <ButtonGroup alignment="right">
          <Button
            chevronRight
            intent="primary"
            onClick={doOpenAddApplicantModal}
            // onClick={navigate(history, Routes.CHECK_KEYS)}
          >
            Next
          </Button>
        </ButtonGroup>
      </FlexContainer>

      {addApplicantModalIsOpen && (
        <AddApplicantModal
          Modal={AddApplicantModalView}
          isOpen={addApplicantModalIsOpen}
          onModalClose={closeAddApplicantModal}
        />
      )}

      <Modal
        className={modalSearch}
        isOpen={modalIsOpen}
        onModalClose={() => setModalIsOpen(!modalIsOpen)}
        title="Add Applicants"
      >
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
          <Button type="submit" intent="primary" onClick={() => setModalIsOpen(!modalIsOpen)}>
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
    </>
  )
}
