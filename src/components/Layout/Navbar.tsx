import React from 'react'

const Navbar = () => {
  return (
    <div className='container mx-auto pt-2 pb-4 z-10'>
      <div className="navbar bg-base-100 shadow-lg rounded-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" href='./#'>SQLDashboard</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className='md:block hidden'><a href='https://github.com/waitlistSawana/Tableau-Like-Dashboard' target='_blank'>Github</a></li>
            <li className='md:block hidden'><a href='./#'>主页</a></li>
            <li className='md:block hidden'><a href='./table'>表格</a></li>
            <li className='md:hidden block'>
              <details>
                <summary>
                  菜单
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none z-10">
                  <li><a href='./table'>表格</a></li>
                  <li><a href='https://github.com/waitlistSawana/Tableau-Like-Dashboard' target='_blank'>Github</a></li>
                  <li><a href='./#'>主页</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar