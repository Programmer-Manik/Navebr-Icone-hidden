import React from 'react';
import { useState } from 'react';

const inddex = () => {

    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className='md:hidden' onClick={() => setOpen(!open) }>
                <span>{open === true ? 
                 <bars3Icons className="h-4 w-6 text-purple-500"/>
                
                :   <XMarkIcon className="h-4 w-6 text-purple-500"/> 
                }
                </span>
               
             </div>

            <ul className={`md:flex absolute md:static duration-500 ${open ? 'top-6': '-top-45'}`}>

                {


                    routes.map(route => <link 
                        key={route.id}
                        route={route}
                    >
                    
                    </link>)

                }
                
            </ul>
        </div>
    );
};

export default inddex;