import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profile_pic from '../assets/images/profile_pic.jpeg';
import PostModal from './Post/Modal';
import logo from "../assets/images/project_buddy_logo.png";

function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const [query, setQuery] = useState('');
  const profileNavigator = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(query);
  };

  return (
    <>
      <nav className='bg-white shadow  z-[9999] fixed top-0 left-0 w-[100%] bg-opacity-75 backdrop-blur-md'>
        <div className='mx-auto px-8'>
          <div className='flex justify-between items-center py-4'>
            <div className='flex items-center'>
              <a href='/' className='font-bold text-xl text-indigo-500'>
                <img src={logo} alt="logo" className="h-10 w-10" />
              </a>
              <div className='ml-4 flex items-center text-gray-500 text-sm font-medium'>
                <a href='/' className='hover:text-blue-600 px-3 py-2  text-center justify-center items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    className="bi bi-house-fill ml-2 "
                    viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                  </svg>Home
                </a>
                <a href='/recommendations' className='hover:text-blue-600 px-3 py-2 text-center justify-center items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-people-fill ml-10" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  </svg>Recommendations</a>
                <a href='/messages' className='hover:text-blue-600 px-3 py-2 text-center justify-center items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chat-text-fill ml-5" viewBox="0 0 16 16">
                    <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                  </svg>Messages</a>
                <p onClick={() => setOpenPost(prevState => !prevState)} className='hover:text-blue-600 px-3 py-2 cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus-circle ml-6" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>Create Post</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <form onSubmit={handleSearch}>
                <div className='relative'>
                  <input
                    type='text'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className='bg-gray-200 h-10 px-5 pr-10 rounded text-sm focus:outline-none'
                    placeholder='Search'
                  />
                  <button
                    type='submit'
                    className='absolute top-0 right-0 h-full w-10 text-center text-gray-500'
                  >
                    {/* <FontAwesomeIcon icon={faSearch} /> */}
                  </button>
                </div>
              </form>
              <button>
                <svg aria-labelledby='title desc' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.9 19.7' height='20px' width='20px'><title id='title'>Search Icon</title><desc id='desc'>A magnifying glass icon.</desc><g fill='none' stroke='gray'><path strokeLinecap='square' d='M18.5 18.3l-5.4-5.4' /><circle cx='8' cy='8' r='7' /></g></svg>
              </button>
              <div className='relative flex flex-col justify-center'>
                <img alt='Abhishek_profile' src={profile_pic} className={`w-10 h-10 rounded-full ml-6 border-2 border-transparent hover:border-blue-300 ring-4 ring-offset-2 ring-transparent ${profileOpen && 'ring-blue-600'}`} onClick={() => setProfileOpen(prevState => !prevState)} />
                <div className={`absolute right-0 top-full mt-3 w-64 p-3 bg-white rounded-lg shadow-xl border border-gray-300 ${!profileOpen && 'hidden'}`}>
                  <div className='flex items-center'>
                    <img alt='Abhishek_profile' src={profile_pic} className='rounded-full w-16 h-16' />
                    <div className='flex flex-col justify-center flex-1 pl-3'>
                      <code className='text-gray-900 font-medium text-lg'>Abhishek Jadhav</code>
                      <p className='text-gray-500 text-sm'>Full Stack Developer | Looking for Summer Internships</p>
                    </div>
                  </div>
                  <button className='mx-1/4 text-gray-900 font-medium text-sm py-2 px-3 bg-gray-100 hover:bg-blue-400 rounded-lg mt-3' onClick={() => profileNavigator('/profile/')}>View Profile</button>
                  <br />
                  <hr className='my-3 border border-black-500'></hr>
                  <ul className='flex flex-col gap-3 pl-3 text-gray-500 text-sm font-medium'>
                    <li className='hover:text-blue-600'>
                      <svg className='inline-block mr-1' xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path><polyline points='15 3 21 3 21 9'></polyline><line x1='10' y1='14' x2='21' y2='3'></line></svg>
                      Help
                    </li>
                    <li className='hover:text-blue-600'>
                      <svg className='inline-block mr-1' xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path><polyline points='15 3 21 3 21 9'></polyline><line x1='10' y1='14' x2='21' y2='3'></line></svg>
                      Account Settings
                    </li>
                    <li className='hover:text-blue-600'>
                      <svg className='inline-block mr-1' xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path><polyline points='15 3 21 3 21 9'></polyline><line x1='10' y1='14' x2='21' y2='3'></line></svg>
                      Sign Out
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {openPost && <PostModal isOpen={openPost} onClose={setOpenPost} />}
    </>
  );
}

export default Navbar;