import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'

function DefaultLayout() {
    return (
        <div style={{ display: 'flex' }}>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default DefaultLayout