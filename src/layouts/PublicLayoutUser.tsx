import { getToken } from '../utils/index'
import { Outlet } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { useAppDispatch } from '../store'
import { fetchUserInfo } from '../store/user'
import { Skeleton } from 'antd'
import NavbarComponent from '../components/navbarComponent/index'

const PublicLayoutUser = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const token = getToken()
    if (token) {
      dispatch(fetchUserInfo())
    }
  }, [])

  return (
    <div>
      <div className="">header layout</div>

      <Outlet />
      <Suspense fallback={<Skeleton />}>
        <div>footer layout</div>
      </Suspense>
    </div>
  )
}

export default PublicLayoutUser
