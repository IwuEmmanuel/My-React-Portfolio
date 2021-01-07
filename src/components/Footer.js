import React from 'react';
import {SocialIcon} from 'react-social-icons';


export default function Footer(){
    return <footer class="flex items-center justify-between flex-wrap bg-gray-200">    
                    <div className="flex items-center xl:justify-right md:justify-center p-6">
                        <SocialIcon url="https://github.com/IwuEmmanuel" className="mr-4 ml-4" target="_blank" fgColor="ffff" style={{height:35, width:35}}/>
                        <SocialIcon url="https://m.facebook.com/iwu.emmanuel" className="mr-4 ml-4" target="_blank" fgColor="ffff" style={{height:35, width:35}}/>
                        <SocialIcon url="https://www.linkedin.com/in/iwu-emmanuel-137882163/" className="mr-4 ml-4" target="_blank" fgColor="ffff" style={{height:35, width:35}}/>
                        <SocialIcon url="https://twitter.com/iwu__emmanuel" className="mr-4 ml-4" target="_blank" fgColor="ffff" style={{height:35, width:35}}/>
                    </div>
                <p class="p-2 text-center text-xs sm:justify-center sm:mr-5">Copyright © 2021 IWU EMMANUEL .C. All Rights Reserved.</p>
            </footer>
      
}