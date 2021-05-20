import { useEffect, useState } from 'react'
import { connectorLocalStorageKey, ConnectorNames } from '@pancakeswap-libs/uikit'
import useAuth from 'hooks/useAuth'

console.log('State', 'sample state');
const useEagerConnect = () => {
  const { login } = useAuth()
  const [state, setstate] = useState('s')
  
  useEffect(() => {
    const connectorId = window.localStorage.getItem(connectorLocalStorageKey) as ConnectorNames
    if (connectorId) {
      login(connectorId)
    }
  }, [login])
}

export default useEagerConnect
