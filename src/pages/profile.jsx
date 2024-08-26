import AliceCarousel from 'react-alice-carousel';
import EditModal from "../components/Post/EditModal";
import ContactModal from "../components/ContactModal";
import 'react-alice-carousel/lib/alice-carousel.css';
import profile_banner from '../assets/images/profile_banner.jpeg';
import profile_pic from '../assets/images/profile_pic.jpeg';
import { useState } from 'react';
const posts = [
  {
    id: 1,
    title: 'Project Idea!! Join In! Make the move to create something innovative',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not',
    tags: [
      'Web Development',
      'UI/UX Designing',
      'Graphic Designing',
    ]
  },
  {
    id: 2,
    title: 'Project Idea!! Join In! Make the move to create something innovative',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not',
    tags: [
      'Web Development',
      'UI/UX Designing',
      'Graphic Designing',
    ]
  },
  {
    id: 3,
    title: 'Project Idea!! Join In! Make the move to create something innovative',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not',
    tags: [
      'Web Development',
      'UI/UX Designing',
      'Graphic Designing',
    ]
  },
  {
    id: 4,
    title: 'Project Idea!! Join In! Make the move to create something innovative',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not',
    tags: [
      'Web Development',
      'UI/UX Designing',
      'Graphic Designing',
    ]
  },
  {
    id: 5,
    title: 'Project Idea!! Join In! Make the move to create something innovative',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not',
    tags: [
      'Web Development',
      'UI/UX Designing',
      'Graphic Designing',
    ]
  },
]

function ProfilePage() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
}
  const handleDragStart = (e) => e.preventDefault();
  const [openPost, setOpenPost] = useState(false);
  const [openPost1, setOpenPost1] = useState(false);


  return (
    <>
    <EditModal/>
    <main className='mx-auto my-10 rounded-lg md:w-3/5 w-11/12 border border-gray-500 shadow-lg'>
      <img alt='profile_banner_image' src={profile_banner} className='w-full max-h-[180px] object-cover' />
      <div className='px-4 mb-4'>
        <div className='flex'>
          <img alt='Name' src={profile_pic} className='z-10 -mt-[50px] h-[160px] w-[160px] rounded-full  border-4 border-white' />
          <div className='flex flex-end flex-1 items-center justify-end'>
            <button onClick={() => setOpenPost1(prevState => !prevState)} className='mr-3 px-4 py-2 rounded outline-none border hover:border-transparent hover:bg-blue-400 hover:text-white'>Edit Profile</button>
          </div>
        </div>
        <div className='flex items-center'>
          <code className='text-3xl font-semibold'>First Last</code>
          <span className='text-gray-500 text-sm ml-2 bg-gray-300 px-2 py-[0.8px] rounded'>Full Stack Developer | Looking for Summer Internships</span>
        </div>
        <div className='flex flex-row flex-wrap'>
          <div className='md:w-1/2 w-full border-r border-transparent'>
            <span className='text-gray-500'>@username</span>
            <span className='mx-2 text-gray-500'>•</span>
            <span onClick={() => setOpenPost(prevState => !prevState)} className='text-blue-400 font-medium hover:underline cursor-pointer'>Contact Details</span>
            <p className='mt-1 text-gray-700 tracking-wide'>🎂 {'25/10/2002'}</p>
          </div>
          <div className='md:w-1/2 w-full md:border-l md:border-gray-300 border-l-0'>
            <div className='md:px-6 md:my-0 my-3'>
              <p className='text-lg font-medium'>Skills</p>
              <hr className='border-black-500'></hr>

            </div>
          </div>
        </div>
        <div className='p-3 px-6 border border-gray-300 mt-3 rounded'>
          <p className='text-lg font-medium'>About Me</p>
          <hr className='border-black-500'></hr>
          <p>Hi, I am a driven third-year undergraduate student at Pune Institute of Computer Technology (PICT) pursuing a B.E in Electronics and Telecommunications. With a passion for Web Development, UI UX Designing, and Graphic Designing, I have honed my skills in creating visually appealing designs and user-friendly websites. I am a quick learner and continuously seek to expand my knowledge in the field. I am currently learning C++ and Java programming languages, which will further enhance my skills. I am not only a talented designer and developer, but also a natural leader who is a hard worker and a great team player. I thrive under pressure and am confident in meeting tight deadlines.</p>
        </div>
        <div className='p-3 px-6 border border-gray-300 mt-3 rounded'>
          <p className='text-lg font-medium'>Education</p>
          <hr className='border-black-500'></hr>
          <p className='font-medium mt-1'>Pune Institute of Computer Technology, Pune</p>
          <span className='text-sm'>First Year</span>
          <span className='mx-2 text-gray-500'>•</span>
          <span className='text-sm'>Information Technology</span>
        </div>
        {/* <div className='p-3 px-6 border border-gray-300 mt-3 rounded w-full'>
          <p className='text-lg font-medium'>Posts</p>
          <hr className='border-black-500'></hr>
          <AliceCarousel mouseTracking keyboardNavigation='true' responsive={{ items: 3, itemsFit: 'fill' }} items={
            posts.map(({ id, title, description, tags }) => (
              <div className='w-full rounded max-w-xs border border-gray-500 p-2 flex flex-col gap-4  overflow-y-scroll mb-8' key={id} onDragStart={handleDragStart} role="presentation">
                <p className='max-w-full underline'>{title}</p>
                <hr className='border-black-700'></hr>
                <p className='text-sm'>{description}</p>
                <p className='max-w-full bg-gray-300 rounded-b p-1'>
                  <span className='text-sm'>Posted by: </span>
                  <span className='text-sm font-medium'>@username</span>
                </p>
              </div>
            ))
          } />
        </div> */}
        <div className='p-3 px-6 border border-gray-300 mt-3 rounded w-full'>
  <p className='text-lg font-medium'>Posts</p>
  <hr className='border-black-500'></hr>
  <AliceCarousel
        mouseTracking
        items={
      posts.map(({ id, title, description, tags }) => (
        <div
          className='w-fit rounded max-w-xs border border-gray-500 p-2 flex flex-col gap-4  overflow-y-scroll mb-8'
          key={id}
          onDragStart={handleDragStart}
          role='presentation'
        >
          <p className='max-w-full underline'>{title}</p>
          <hr className='border-black-700'></hr>
          <p className='text-sm'>{description}</p>
          <p className='max-w-full bg-gray-300 rounded-b p-1'>
            <span className='text-sm'>Posted by: </span>
            <span className='text-sm font-medium'>@username</span>
          </p>
        </div>
      ))
    }
        responsive={responsive}
        controlsStrategy="alternate"
    />
  {/* <AliceCarousel
    mouseTracking
    keyboardNavigation='true'
    responsive={{ items: 3, itemsFit: 'fill' }}
    items={
      posts.map(({ id, title, description, tags }) => (
        <div
          className='w-full rounded max-w-xs border border-gray-500 p-2 flex flex-col gap-4  overflow-y-scroll mb-8'
          key={id}
          onDragStart={handleDragStart}
          role='presentation'
        >
          <p className='max-w-full underline'>{title}</p>
          <hr className='border-black-700'></hr>
          <p className='text-sm'>{description}</p>
          <p className='max-w-full bg-gray-300 rounded-b p-1'>
            <span className='text-sm'>Posted by: </span>
            <span className='text-sm font-medium'>@username</span>
          </p>
        </div>
      ))
    }
  /> */}
</div>

      </div>

    </main>
    {openPost && <ContactModal isOpen={openPost} onClose={setOpenPost} />}
      {openPost1 && <EditModal isOpen={openPost1} onClose={setOpenPost1} />}

    </>
  );
}

export default ProfilePage;