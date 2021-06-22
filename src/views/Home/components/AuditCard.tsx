import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Link } from 'tapswap-uikit'

const StyledFarmStakingCard = styled(Card)`
  display: flex;
  flex: 1;
  background-color: rgba(15, 14, 47, 0.5) !important;
  border: 0.6px solid rgba(255, 255, 255, 0.7);
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
        <Heading size="lg">Security Audit</Heading>
        <LinkAudit href="/TapSwap_Audit.pdf" target="__blank" rel="noreferrer noopener">
          Techrate
        </LinkAudit>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default AuditCard
