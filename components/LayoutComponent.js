import React,{ Component } from "react";
import HeaderComponent from "./HeaderComponent";

class LayoutComponent extends Component 
{
    render()
    {
        return (
            <div>
                <HeaderComponent/>
                {this.props.children}
            </div>
        );
    }

}

export default LayoutComponent;