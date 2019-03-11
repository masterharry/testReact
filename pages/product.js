import React,{ Component } from "react";
import LayoutComponent from "../components/LayoutComponent";
import ItemComponent from "../components/ItemComponent";
import fetch from 'isomorphic-unfetch';

class Product extends Component 
{
    static async getInitialProps (context) {
        const { id } = context.query
        let item = await fetch(`http://5b35ede16005b00014c5dc86.mockapi.io/view/${id}`);

        item = await item.json();

        console.log(item);
        
        return {
            item
        }
    }

    render() 
    {
        const {item} = this.props;

        return(
            <LayoutComponent>
                <ItemComponent item={item}/>
            </LayoutComponent>
        )
    }
}

export default Product;