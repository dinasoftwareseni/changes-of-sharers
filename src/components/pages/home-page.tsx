import React, { FC } from 'react'
import { PageContainer } from '@reapit/elements'
import { ApplicantPage } from '../ui/applicants/applicants'

export const HomePage: FC = () => (
  <>
    <PageContainer>
      <ApplicantPage />
    </PageContainer>
  </>
)

export default HomePage
