import React,{ Component } from "react";
import Link from 'next/link';
import ItemComponent from "./ItemComponent";

class ItemsComponent extends Component
{

    render()
    {
        const {items} = this.props;
        console.log(items.data);

        return(
            <div className="navbar navbar-inverse-blue">
                <div className="navbar-inner">
                    <div className="container">
                        

                        {
                            items && items.data && items.data.map((item) => (
                                    <div key={item.id} className="md-2" >
                                        <div className="title">
                                            <Link as={`/product/${item.id}`} href={`/product?id=${item.id}`}>
                                                <a>{item.attributes.title}</a>
                                            </Link>
                                        </div>
                                        <div className="image">
                                            {item.attributes.links.image}
                                        </div>
                                    </div>
                                ))
                        }

                    </div>
                </div>
            </div>
        )
    }
}

export default ItemsComponent;