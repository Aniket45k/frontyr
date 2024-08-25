import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, ToastUtils } from './components';
import { HomePage, Auth, ProfilePage, Recommendations, Messages, QnA, Answers } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ToastUtils />
      <Navbar />
      <div className='mt-[72px]'>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/profile/:username' element={<ProfilePage />} />
          <Route path='/recommendations' element={<Recommendations />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/qna' element={<QnA />} />
          <Route path='/answers' element={<Answers />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;