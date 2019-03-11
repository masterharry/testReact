import React,{ Component } from "react";

class ItemComponent extends Component
{
    render()
    {
        const {item} = this.props;
        console.log(item);
        return(
            <div className="{styles.product}">
                <div className="title">
                    <div className="title">
                        {item && item.data && item.data.attributes.title}
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemComponent;