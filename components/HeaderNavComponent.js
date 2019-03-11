import React,{ Component } from "react";
import Link from 'next/link';

class HeaderNavComponent extends Component
{
    render()
    {
        return(
            <div className="navbar navbar-inverse-blue">
                
                <div className="navbar-inner">
                    <div className="container">
                        
                        <ul>
                            <li className="green">
                                <Link href="/">
                                    <a className="icon-home">Home</a>
                                </Link>
                            </li>
                        </ul> 

                    </div>

                </div>
            </div>
        )
    }
}

export default HeaderNavComponent;