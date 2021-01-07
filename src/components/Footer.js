import React from 'react';
import {SocialIcon} from 'react-social-icons';


export default function Footer(){
    return <footer class="bg-gray-200">    
                    <div className="flex items-center justify-right p-6">
                        <SocialIcon url="https://github.com/IwuEmmanuel" className="px-8 mr-4 ml-20" target="_blank" fgColor="ffff" style={{height:35, width:35}}/>
                        <SocialIcon url="https://m.facebook.com/iwu.emmanuel" className="px-8 mr-4" target="_blank" fgColor="ffff" style={{height:35, width:35}}/>
                        <SocialIcon url="https://www.linkedin.com/in/iwu-emmanuel-137882163/" className="px-8 mr-4" target="_blank" fgColor="ffff" style={{height:35, width:35}}/>
                        <SocialIcon url="https://twitter.com/iwu__emmanuel" className="px-8 mr-4" target="_blank" fgColor="ffff" style={{height:35, width:35}}/>
                    </div>
                <p class="p-2 text-center text-xs">Copyright © 2021 IWU EMMANUEL .C. All Rights Reserved.</p>
            </footer>
      
}