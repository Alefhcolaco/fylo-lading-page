import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '/public/logo.svg'
import Image1 from '/public/bg-curvy-desktop.svg'
import imageIntro from '/public/image-intro.png'
import { Button1 } from '../components/Button1';
import { Button2 } from '../components/Button2';
import { Button3 } from '../components/Button3'
import Access from '/public/icon-access-anywhere.svg'
import Security from '/public/icon-security.svg'
import Clock from '/public/icon-collaboration.svg'
import AnyFile from '/public/icon-any-file.svg'
import ImageStayProductive from '/public/image-stay-productive.png'
import Aspas from '/public/bg-quotes.png'
import Avatar1 from '/public/profile-1.jpg'
import Avatar2 from '/public/profile-2.jpg'
import Avatar3 from '/public/profile-3.jpg'
import IconLocation from '/public/icon-location.svg'
import IconPhone from '/public/icon-phone.svg'
import IconEmail from '/public/icon-email.svg'
import Facebook from '/public/facebook.svg'
import Twitter from '/public/twitter.svg'
import Instagram from '/public/instagram.svg'

export default function Home() {
  return (
    <div className='grid grid-cols-1 grid-rows-3 grid-rows-[218px_3189px_564px] scroll-smooth'>
      <header className='bg-[#1C2230] justify-between pr-[87px] pl-[87px] flex items-center'>
        <Image src={Logo} width={193} height={59} alt="Logo do site" />
        <nav>
          <ul className='flex gap-[60px]'>
            <li><a className='hover:border-solid hover:border-[#fff] hover:border-b-[1.5px] ' href="#features">Features</a></li>
            <li><a className='hover:border-solid hover:border-[#fff] hover:border-b-[1.5px]' href="#team">Team</a></li>
            <li><a className='hover:border-solid hover:border-[#fff] hover:border-b-[1.5px]' href="#sign-in">Sign In</a></li>
          </ul>
        </nav>
      </header>
      <main className='bg-[#181E2A]'>
        <section className='h-[1100px] bg-[#1C2230]'>
          <div className='block m-0 m-auto w-[790px] h-[986px] z-10 relative'>
            <Image src={imageIntro} width={790} height={586} alt="imagem de introdução"/>
            <h1 className='mb-[51px] text-center text-[46.5px] leading-[58px]'>All your files in one secure location,<br /> accessible anywhere.</h1>
            <p className='text-center mb-[65px] text-[22px]'>Fylo stores all your most important files in one secure location. <br />Access them wherever you need, share and collaborate with<br /> friends family, and co-workers.</p>
            <Button1 />
          </div>
          <div className="bg-curvy h-[503px] w-full grow bg-cover relative top-[-320px] z-0 relative">
          </div>
        </section>
        <section id="features" className='bg-[#181E2A] mb-[164px]'>
          <div className='w-[966px] h-[223px] block m-0 m-auto flex gap-[145px] mb-[108px]'>
            <div className='relative z-10 w-[403px] h-[223px]'>
              <div className='block w-[92px] h-[85px] m-0 m-auto mb-[35px]'>
                <Image src={Access} width={92} height={85} alt="Ícone de um computador e um celular"/>
              </div>
              <h2 className='text-center mb-[16px]'>Access your files, anywhere</h2>
              <p className='text-center text-[15px] leading-[24px]'>The ability to use a smartphone, ablet, or computer<br /> to access your account means your files follow you<br /> everywhere.</p>
            </div>
            <div className='relative z-10 w-[418px] h-[223px]'>
              <div className='block w-[92px] h-[98px] m-0 m-auto mb-[23px]'>
                <Image src={Security} width={92} height={98} alt="Ícone de segurança"/>
              </div>
              <h2 className='text-center mb-[16px]'>Security you can trust</h2>
              <p className='text-center text-[15px] leading-[24px]'>2-factor authentication and user-controlled encryption are<br /> just a couple of the security features we allow to help<br /> secure your files.</p>
            </div>
          </div>
          <div className='w-[966px] h-[215px] block m-0 m-auto flex gap-[145px]'>
            <div className='relative z-10 w-[403px] h-[215px]'>
              <div className='block w-[93px] h-[78px] m-0 m-auto mb-[38px]'>
                <Image src={Clock} width={93} height={78} alt="Ícone de um relógio"/>
              </div>
              <h2 className='text-center mb-[14px]'>Real-time collaboration</h2>
              <p className='text-center text-[15px] leading-[24px]'>Securely share files and folders with friends, family and<br /> colleagues for live collaboration. No email attachments<br /> required.</p>
            </div>
            <div className='relative z-10 w-[418px] h-[215px]'>
              <div className='block w-[101px] h-[72px] m-0 m-auto mb-[43px]'>
                <Image src={AnyFile} width={101} height={72} alt="Ícone de uma pasta"/>
              </div>
              <h2 className='text-center mb-[12.5px]'>Store any type of file</h2>
              <p className='text-center text-[15px] leading-[24px]'>Whether you re sharing holidays photos or work<br /> documents, Fylo has you covered allowing for all file<br /> types to be securely stored and shared.</p>
            </div>
          </div>
        </section>
        <section className='bg-[#181E2A]'>
          <div className='flex justify-center mb-[140px]'>
            <div>
              <Image src={ImageStayProductive} width={675} height={509} alt="Imagem de pessoas conversando sobre negócios"/>
            </div>
            <div id="team" className='w-[675px] h-[509px] pl-[60px] pt-[138px]'>
              <h2 className='text-[45px] leading-[45px] mb-[36px]'>Stay productive,<br /> wherever you are</h2>
              <p className='mb-[27px]'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>

              <p className='mb-[36px]'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
              <Button3 />
            </div>
          </div>
          <div className='w-[1283px] z-10 relative mb-[224px] block m-0 m-auto'>
            <div className='w-[61px] h-[49px] z-0 relative top-[15px]'>
              <Image src={Aspas} width={61} height={49} alt="Ícone de aspas"/>
            </div>
            <div className='flex gap-[44px] justify-center'>
              <div className='bg-[#21293C] w-[395px] h-[219px] rounded-[4px] pt-[40px] pl-[28px]'>
                <p className='text-[16px] mb-[20px]'>Fylo has improved our team productivity by<br /> an order of magnitude. Since making the<br /> switch our team has become a well-oiled collaboration machine.</p>
                <div className='flex items-center gap-[7px] w-[155px]'>
                  <Image src={Avatar1} width={30} height={30} className='rounded-[50%]' alt="Imagem de uma pessoa"/>
                  <div>
                    <h3 className='text-[15px]'>Satish Patel</h3>
                    <h4 className='text-[10.4px] relative'>Founder & CEO, Huddle</h4>
                  </div>
                </div>
              </div>
              <div className='bg-[#21293C] w-[395px] h-[219px] rounded-[4px] pt-[40px] pl-[28px]'>
                <p className='text-[16px] mb-[20px]'>Fylo has improved our team productivity by<br /> an order of magnitude. Since making the<br /> switch our team has become a well-oiled collaboration machine.</p>
                <div className='flex items-center gap-[7px] w-[155px]'>
                  <Image src={Avatar2} width={30} height={30} className='rounded-[50%]' alt="Imagem de uma pessoa"/>
                  <div>
                    <h3 className='text-[15px]'>Bruce McKenzie</h3>
                    <h4 className='text-[10.4px] relative'>Founder & CEO, Huddle</h4>
                  </div>
                </div>
              </div>
              <div className='bg-[#21293C] w-[395px] h-[219px] rounded-[4px] pt-[40px] pl-[28px]'>
                <p className='text-[16px] mb-[20px]'>Fylo has improved our team productivity by<br /> an order of magnitude. Since making the<br /> switch our team has become a well-oiled collaboration machine.</p>
                <div className='flex items-center gap-[7px] w-[155px]'>
                  <Image src={Avatar3} width={30} height={30} className='rounded-[50%]' alt="Imagem de uma pessoa"/>
                  <div>
                    <h3 className='text-[15px]'>Iva Boyd</h3>
                    <h4 className='text-[10.4px] relative'>Founder & CEO, Huddle</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='bg-[#1C2230] w-[946px] h-[299px] m-0 m-auto block relative rounded-[10px]'>
          <h2 className='text-[36.8px] text-center pt-[46px] mb-[16px]'>Get early access today</h2>
          <p className='text-center text-[14.5px] w-[678px] block m-auto m-0 mb-[40px]'>It only takes a minute sto sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
          <div id="sign-in" className='w-[780px] block m-0 m-auto'>
            <input placeholder='email@example.com' type="text" className='rounded-[24px] w-[484px] h-[52px] pl-[42px] text-[#000000] mr-[32px]' />
            <Button2 />
          </div>
        </div>
      </main>
      <footer className='bg-[#0C1524] pt-[219px] pl-[131px] pr-[89px]'>
        <Image src={Logo} width={193} height={59} alt="Logo do site" />
        <div className='flex justify-between items-start mt-[38px]'>
          <div className='w-[414px] h-[80px] flex items-start gap-[31px]'>
            <div className='w-[13px] h-[20px] relative top-[5.5px]'>
              <Image src={IconLocation} width={13} height={20} alt="Ícone de localização"/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div>
            <div className='w-[200px] h-[24px] gap-[30px] flex mb-[25px]'>
              <Image src={IconPhone} width={20} height={20} alt="Ícone de telefone"/>
              <span>+1-543-123-4567</span>
            </div>
            <div className='flex items-center gap-[27px] w-[210px] h-[22px]'>
              <Image src={IconEmail} width={21} height={17} alt="Ícone de e-mail"/>
              <span>example@fylo.com</span>
            </div>
          </div>
          <ul className='leading-[38px] relative top-[-9px]'>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
          <ul className='leading-[38px] relative top-[-9px]'>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
          <div className='gap-[14px] flex w-[130px]'>
            <Image src={Facebook} className='cursor-pointer' alt="Ícone do Facebook"/>
            <Image src={Twitter} className='cursor-pointer' alt="Ícone do Twitter"/>
            <Image src={Instagram} className='cursor-pointer' alt="Ícone do Instagram"/>
          </div>
        </div>
      </footer>
    </div>
  );
}
