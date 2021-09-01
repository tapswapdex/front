import React from 'react'
import styled from 'styled-components'
import orderBy from 'lodash/orderBy'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon } from 'tapswap-uikit'
import { NavLink } from 'react-router-dom'
import pools from 'config/constants/pools'
import { Pool } from 'state/types'
import FaucetIcon from 'assets/svg/icons/faucet'

const StyledFarmStakingCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  background-color: rgba(15, 14, 47, 0.5) !important;
  border: 0.6px solid rgba(255, 255, 255, 0.7);
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  color: ${({ theme }) => (theme.isDark ? 'white' : '#41aa29')};
  line-height: 44px;
`
const EarnAssetCard = () => {
  const activeNonCakePools = pools.filter((pool) => pool.isBush && !pool.isFinished && !pool.tokenName.includes('CAKE'))
  const latestPools: Pool[] = orderBy(activeNonCakePools, ['sortOrder', 'pid'], ['desc', 'desc']).slice(0, 3)
  // Always include CAKE
  const assets = [...latestPools.map((pool) => pool.tokenName)].join(', ')

  return (
    <StyledFarmStakingCard>
      <NavLink exact activeClassName="active" to="/bush">
        <CardBody>
          <Heading size="md">Earn {assets}</Heading>

          <Flex justifyContent="space-between">
            <Heading size="md">in Yield Guilds</Heading>
          </Flex>
          <div
            style={{
              position: 'absolute',
              right: 20,
            }}
          >
            <FaucetIcon />
          </div>
        </CardBody>
      </NavLink>
    </StyledFarmStakingCard>
  )
}

export default EarnAssetCard
