import SideBar from './Components/SideBar'
import PropTypes from 'prop-types';
import './index.css'
function Layout({children}) {
  return (
    <>
    <header>
        <SideBar/>
    </header>
    <main className='main'>{children}</main>
    </>
  )
}
Layout.propTypes = {
    children: PropTypes.node.isRequired
  };

export default Layout