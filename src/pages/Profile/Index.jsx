import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const data = [
  {id:1,value:"350",label:"Article"},
  {id:2,value:"25k",label:"Flowers"},
  {id:3,value:"30k",label:"friend"},


]

const socialLinks = [
  {id:1,icon:<FaFacebookSquare/>,link:"https://facebook.com/"},
  {id:2,icon:<FaPinterest/>,link:"https://facebook.com/"},
  {id:3,icon:<FaLinkedin/> , link:"https://facebook.com/"},
  {id:4,icon:<FaTwitter/>,link:"https://facebook.com/"},
  {id:5,icon:<FaYoutube/>,link:"https://facebook.com/"}

]
const Profile = () => {

  return (
    <main className='pt-5 xl:pt-10 min-h-screen'>
      <section className='flex flex-col justify-center items-center'>
        <figure>
        <img src="https://scontent.fzyl6-1.fna.fbcdn.net/v/t39.30808-6/485085259_686056674093483_5987201166601905456_n.jpg?stp=dst-jpg_tt6&cstp=mx373x450&ctp=s373x450&_nc_cat=103&cb=99be929b-878c9f95&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGijm9aU5lJ-PeWVDl05ejrjO0phKT4yeSM7SmEpPjJ5G_NKO3C-Yri5aO6OqXbt_aXBH7w0J4UWhLrXBMEc99z&_nc_ohc=HSeSqYiNUOwQ7kNvwG_zDbG&_nc_oc=Adnut_GUrSHldzBxa-3A2rLGmfV3Jtcnk67M-nWTRKeNEkgePFy3IiToYXLFFye9wWU&_nc_zt=23&_nc_ht=scontent.fzyl6-1.fna&_nc_gid=8rjjE6UQpVPUdKFH8M47DA&oh=00_AfW_htPNUwEujTqGKb42Z2U4N3-tpd5FLzONxrLBlvNg8A&oe=68968F77" className='size-[200px] rounded-full' alt="" />
        </figure>
        <div className='text-center space-y-3.5 pt-2'>
          <h1 className='text-xl md:text-2xl font-bold xl:text-4xl'>Sujon biswas</h1>
          <div className='space-y-0.5'>
            <h2 className='text-lg font-semibold'>Frontend Developer</h2>
            <p className='text-sm text-gray-400 max-w-[600px] mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, a? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates accusamus facere vero iste ipsa consequuntur</p>
          </div>
          
        </div>

      </section>

      <section className='flex items-center justify-center gap-5 pt-5 md:px-58 py-5 my-4 md:bg-[#06023a] w-full p-5 rounded-2xl'>
        {
          data.map((item)=>{
           return <div key={item.id} className='bg-[#09122e] overflow-x-scroll hide-scrollbar px-20 py-4 not-last:border-r not-last:border-gray-500 space-y-3 cursor-pointer hover:bg-[#21293b]'>
              <h5 className='text-xl md:text-3xl lg:text-4xl font-black'>{item.value}</h5>
              <p className='text-lg md:text-xl'>{item.label}</p>
            </div>
          })
        }
      </section>
      <section className='pt-4 text-white'>
      <div className="flex justify-center gap-x-7 ">
        {
          socialLinks.map((items)=>{
           return <span className='flex text-xl lg:text-3xl cursor-pointer ' key={items.id}>
              {items.icon}
            </span>
          })
        }
      </div>

      </section>


    </main>
  )
}

export default Profile