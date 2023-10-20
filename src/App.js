
import {AiOutlineMail, AiFillGithub} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {ImLocation} from 'react-icons/im'
import {FaGraduationCap} from 'react-icons/fa'
import {GoDotFill} from 'react-icons/go'
function App() {
  return (
    <div className="">
      <div className="bg-green-500 h-[100vh] w-[20%]"> 
      <img src="/assets/mypic.jpg" className=""/>
      <div className="m-4">
        <div className='mb-6'>
        <p className=" ml-8 text-2xl">
          Contacts
        </p>
        <div className="flex flex-row items-center space-x-4 mb-2">

          <AiOutlineMail />
        <p>niyomutonilucie@gmail.com</p>
        </div>
        <div className="flex flex-row items-center space-x-4 mb-2">
          <BsFillTelephoneFill />
          <p>+250788864959</p>

        </div>
        
        <div className="flex flex-row items-center space-x-4 mb-2">

          <AiFillGithub />
          <p>Luciefifi</p>

        </div>
        
        <div className="flex flex-row items-center space-x-4 mb-2">

          <ImLocation />
          <p>Kigali-Rwanda</p>
        </div>
        </div>
        <div>
        <div className="flex flex-row items-center space-x-4 mb-2 text-3xl">

<FaGraduationCap  />
<p>Education</p>
</div>
<div className="flex flex-row items-center space-x-4 mb-2">

<GoDotFill />
<p>University of Rwanda</p> 
</div>
        </div>
      </div>
      </div>

    </div>
  );
}

export default App;
