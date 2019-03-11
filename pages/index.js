import React,{ Component } from "react";
import LayoutComponent from "../components/LayoutComponent";
import fetch from 'isomorphic-unfetch';
import ItemsComponent from "../components/ItemsComponent";

class Index extends Component 
{
    static async getInitialProps () {
        
        let list = await fetch('http://5b35ede16005b00014c5dc86.mockapi.io/list');

        list = await list.json();

        console.log(list);
        
        return {
            list
        }
    }

    render() 
    {
        const {list} = this.props;

        return(
            <LayoutComponent>
                <ItemsComponent items={list}/>
            </LayoutComponent>
        )
    }
}

export default Index;