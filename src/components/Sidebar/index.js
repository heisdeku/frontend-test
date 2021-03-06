import React from 'react'
import { Link } from 'react-router-dom'

//hooks
import useWindowListener from '../../hooks/useWindowListener'
export const Sidebar = () => {
  const [width] = useWindowListener()
  return (
    <div className='menu'>
      {width <= 500 ? (
        <nav aria-label='Profile Navigation'>
          <div className='main-title'>
            <b>Kumba</b>Foods
          </div>
          <ul>
            <li class='dropdown'>
              <span tabindex='-1' class='dropdown__title' id='dropdown-box'>
                <div class='menu-con'>
                  <div class='profile'>
                    <div class='image'></div>
                  </div>
                  <div class='menu'>
                    <div class='dot'></div>
                    <div class='dot'></div>
                    <div class='dot'></div>
                  </div>
                </div>
              </span>
              <ul class='dropdown__menu' aria-labelledby='dropdown-box'>
                <li>
                  <Link to='/profile'>My Account</Link>
                </li>
                <li>
                  <Link to='/order-summary'>My Order</Link>
                </li>
                <li>
                  <Link to='#'>Settings</Link>
                </li>
                <li>
                  <Link to='#'>Logout</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      ) : (
        <div className='sidebar'>
          <div className='main-title'>
            <b>Kumba</b>Foods
          </div>
          <div className='links'>
            <div className='link first'>
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z'
                  fill='#152A46'
                />
              </svg>
              <div className='desc'>
                <Link to='/profile'>My Account</Link>
              </div>
            </div>

            <div className='link'>
              <svg
                width='23'
                height='24'
                viewBox='0 0 26 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.6882 3.4957e-05C16.4882 0.00803496 16.2952 0.044035 16.0942 0.094035L2.50022 3.40603C0.892223 3.80003 -0.113777 5.42204 0.281223 7.03103L2.18722 14.813C2.30272 15.2766 2.52761 15.7057 2.84304 16.0644C3.15848 16.4232 3.55528 16.7012 4.00022 16.875V15C4.00022 12.243 6.24322 10 9.00022 10H21.5942L19.7192 2.28103C19.5534 1.61005 19.1612 1.01678 18.6089 0.601267C18.0566 0.185749 17.3779 -0.0265974 16.6872 3.4957e-05H16.6882ZM17.9062 4.31304L18.7192 7.71903L15.3442 8.53104L14.5002 5.15603L17.9062 4.31304ZM9.00022 12C7.34422 12 6.00022 13.344 6.00022 15V23C6.00022 24.656 7.34422 26 9.00022 26H23.0002C24.6562 26 26.0002 24.656 26.0002 23V15C26.0002 13.344 24.6562 12 23.0002 12H9.00022ZM9.00022 13.594H23.0002C23.7712 13.594 24.4062 14.229 24.4062 15V16H7.59422V15C7.59422 14.229 8.22922 13.594 9.00022 13.594ZM7.59422 19H24.4062V23C24.4062 23.771 23.7712 24.406 23.0002 24.406H9.00022C8.62798 24.4039 8.27157 24.2551 8.00835 23.9919C7.74513 23.7287 7.59632 23.3723 7.59422 23V19Z'
                  fill='#7C7A7A'
                />
              </svg>
              <div className='desc'>
                <Link to='/order-summary'>My Order</Link>
              </div>
            </div>
          </div>
          <div className='tools-con'>
            <hr></hr>
            <div className='tools'>
              <div className='tool'>
                <svg
                  width='21'
                  height='22'
                  viewBox='0 0 21 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M18.8999 11.66C18.7396 11.4775 18.6512 11.2429 18.6512 11C18.6512 10.7571 18.7396 10.5225 18.8999 10.34L20.1799 8.90002C20.3209 8.74269 20.4085 8.54472 20.4301 8.33452C20.4516 8.12433 20.4061 7.9127 20.2999 7.73002L18.2999 4.27002C18.1948 4.08754 18.0348 3.94289 17.8426 3.8567C17.6505 3.77051 17.4361 3.74718 17.2299 3.79002L15.3499 4.17002C15.1107 4.21945 14.8616 4.17961 14.6498 4.05802C14.4379 3.93643 14.2779 3.7415 14.1999 3.51002L13.5899 1.68002C13.5228 1.4814 13.395 1.30888 13.2245 1.18686C13.0541 1.06484 12.8495 0.999476 12.6399 1.00002H8.6399C8.42183 0.988635 8.20603 1.04894 8.02546 1.17173C7.84489 1.29452 7.70948 1.47304 7.6399 1.68002L7.0799 3.51002C7.0019 3.7415 6.84187 3.93643 6.63001 4.05802C6.41815 4.17961 6.16911 4.21945 5.9299 4.17002L3.9999 3.79002C3.80445 3.7624 3.6052 3.79324 3.42724 3.87866C3.24929 3.96407 3.1006 4.10025 2.9999 4.27002L0.999896 7.73002C0.891056 7.91067 0.842118 8.1211 0.860079 8.33124C0.878039 8.54138 0.961979 8.74046 1.0999 8.90002L2.3699 10.34C2.53022 10.5225 2.61863 10.7571 2.61863 11C2.61863 11.2429 2.53022 11.4775 2.3699 11.66L1.0999 13.1C0.961979 13.2596 0.878039 13.4587 0.860079 13.6688C0.842118 13.8789 0.891056 14.0894 0.999896 14.27L2.9999 17.73C3.10499 17.9125 3.26502 18.0571 3.45715 18.1433C3.64928 18.2295 3.86372 18.2529 4.0699 18.21L5.9499 17.83C6.18911 17.7806 6.43815 17.8204 6.65001 17.942C6.86187 18.0636 7.0219 18.2585 7.0999 18.49L7.7099 20.32C7.77948 20.527 7.91489 20.7055 8.09546 20.8283C8.27603 20.9511 8.49183 21.0114 8.7099 21H12.7099C12.9195 21.0006 13.1241 20.9352 13.2945 20.8132C13.465 20.6912 13.5928 20.5186 13.6599 20.32L14.2699 18.49C14.3479 18.2585 14.5079 18.0636 14.7198 17.942C14.9316 17.8204 15.1807 17.7806 15.4199 17.83L17.2999 18.21C17.5061 18.2529 17.7205 18.2295 17.9126 18.1433C18.1048 18.0571 18.2648 17.9125 18.3699 17.73L20.3699 14.27C20.4761 14.0873 20.5216 13.8757 20.5001 13.6655C20.4785 13.4553 20.3909 13.2573 20.2499 13.1L18.8999 11.66ZM17.4099 13L18.2099 13.9L16.9299 16.12L15.7499 15.88C15.0297 15.7328 14.2805 15.8551 13.6445 16.2238C13.0085 16.5925 12.53 17.1819 12.2999 17.88L11.9199 19H9.3599L8.9999 17.86C8.76975 17.1619 8.29128 16.5725 7.6553 16.2038C7.01932 15.8351 6.27012 15.7128 5.5499 15.86L4.3699 16.1L3.0699 13.89L3.8699 12.99C4.36185 12.44 4.63383 11.7279 4.63383 10.99C4.63383 10.2521 4.36185 9.54004 3.8699 8.99002L3.0699 8.09002L4.3499 5.89002L5.5299 6.13002C6.25012 6.27724 6.99932 6.1549 7.6353 5.78622C8.27128 5.41753 8.74975 4.82818 8.9799 4.13002L9.3599 3.00002H11.9199L12.2999 4.14002C12.53 4.83818 13.0085 5.42753 13.6445 5.79622C14.2805 6.1649 15.0297 6.28724 15.7499 6.14002L16.9299 5.90002L18.2099 8.12002L17.4099 9.02002C16.9235 9.56878 16.6549 10.2767 16.6549 11.01C16.6549 11.7433 16.9235 12.4513 17.4099 13ZM10.6399 7.00002C9.84877 7.00002 9.07541 7.23461 8.41761 7.67414C7.75982 8.11366 7.24713 8.73838 6.94438 9.46928C6.64163 10.2002 6.56241 11.0045 6.71675 11.7804C6.8711 12.5563 7.25206 13.269 7.81147 13.8284C8.37088 14.3879 9.08361 14.7688 9.85954 14.9232C10.6355 15.0775 11.4397 14.9983 12.1706 14.6955C12.9015 14.3928 13.5262 13.8801 13.9658 13.2223C14.4053 12.5645 14.6399 11.7911 14.6399 11C14.6399 9.93915 14.2185 8.92174 13.4683 8.17159C12.7182 7.42144 11.7008 7.00002 10.6399 7.00002ZM10.6399 13C10.2443 13 9.85765 12.8827 9.52876 12.663C9.19986 12.4432 8.94351 12.1308 8.79214 11.7654C8.64076 11.3999 8.60116 10.9978 8.67833 10.6098C8.7555 10.2219 8.94598 9.86551 9.22568 9.5858C9.50539 9.3061 9.86175 9.11562 10.2497 9.03845C10.6377 8.96128 11.0398 9.00088 11.4053 9.15226C11.7707 9.30363 12.0831 9.55998 12.3028 9.88888C12.5226 10.2178 12.6399 10.6045 12.6399 11C12.6399 11.5304 12.4292 12.0392 12.0541 12.4142C11.679 12.7893 11.1703 13 10.6399 13Z'
                    fill='#7C7A7A'
                  />
                </svg>
                <div className='desc first-desc'>Settings</div>
              </div>
              <div className='tool'>
                <svg
                  width='19'
                  height='20'
                  viewBox='0 0 19 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3 16H5V18H17V2H5V4H3V1C3 0.734784 3.10536 0.48043 3.29289 0.292893C3.48043 0.105357 3.73478 0 4 0H18C18.2652 0 18.5196 0.105357 18.7071 0.292893C18.8946 0.48043 19 0.734784 19 1V19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20H4C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19V16ZM5 9H12V11H5V14L0 10L5 6V9Z'
                    fill='#7C7A7A'
                  />
                </svg>
                <div className='desc'>Logout</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
