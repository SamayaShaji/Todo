import React from 'react'
import twitter from "../../../Assets/icons/MicrosoftTeams-image.png"
import facebook from "../../../Assets/icons/facebook.svg"
import instagram from "../../../Assets/icons/instagram.svg"
import { Icon } from '../../../Components/Sicons/Icon';
const socialLink = [
    {
        image:twitter,
        link: "https://twitter.com/IonaughtTech"
    },
    {
        image:facebook,
        link: "https://www.facebook.com/profile.php?id=100090408459673"
    },
   
    {
        image:instagram,
        link: "https://www.instagram.com/babble_ai/"
    }
];

const Social = () => {
  return (
    <div className='bg-red-900 h-screen flex justify-end space-x-4 end-0.' >
        {socialLink.map((item,i)=>
        <Icon href={item.link} icon={item.image}/>

        )}
        
       


    </div>
  )
}

export default Social