import React,{ Component } from "react";
import Head from 'next/head';
import HeaderNavComponent from '../components/HeaderNavComponent'

class HeaderComponent extends Component
{
    render()
    {
        return(
            <div>
                <Head>
                    <title>Digital Diary</title>
                    
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta content="text/html; charset=utf-8" />

                    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css" />
                    <link href='//fonts.googleapis.com/css?family=Oswald:300,400,700' rel='stylesheet' type='text/css' />
                    <link href='//fonts.googleapis.com/css?family=Ubuntu:300,400,500,700' rel='stylesheet' type='text/css' />

                    <link href="static/css/bootstrap-3.1.1.min.css" rel='stylesheet' type='text/css' />
                    <link href="static/css/font-awesome.css" rel="stylesheet" />
                    
                </Head>
                <HeaderNavComponent/>
            </div>
        )
    }
}

export default HeaderComponent;