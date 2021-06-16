import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Link } from '@pancakeswap-libs/uikit'

const StyledFarmStakingCard = styled(Card)`
  display: flex;
  flex: 1;
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  color: ${({ theme }) => (theme.isDark ? 'white' : '#4bca4b')};
  line-height: 44px;
`

const LinkAudit = styled(Link)`
  font-size: 32px;
  font-weight: 600;
`

const AuditCard = () => {
  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="lg">Security Oracle</Heading>
        <LinkAudit href="https://www.certik.org/projects/tapswapfinance" target="__blank" rel="noreferrer noopener">
          {/* <img src="/images/tapswap/shield.svg" height="24px" width="24px" alt="Certik" />  */}Certik Skynet
        </LinkAudit>
        <LinkAudit href="/TapSwap_Audit.pdf" target="__blank" rel="noreferrer noopener">
          Techrate
        </LinkAudit>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default AuditCard
