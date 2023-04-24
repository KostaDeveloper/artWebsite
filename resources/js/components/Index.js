import React from 'react';
import ReactDOM from 'react-dom';


import { ImageList } from '@mui/material';
import {ImageListItem} from '@mui/material/ImageListItem';

//import   Route from 'react-router-dom/Route';

import NavigationRouter from './NavigationRouter';

import NavigationBar from './navigationbar/NavigationBar';
import Footer from './footer/Footer';

import ImageGallery from './pages/gallery/imageGallery'

class Main extends React.Component{
    constructor(props) {
        super(props);

    this.state = {};
   

    }
         

    render(){
        

      return(

        <div>
                   <div class="kostaLogo">
            Kosta
        </div>
        <NavigationBar/>
 
        <NavigationRouter />
          
        <ImageGallery />
        <Footer />

        </div>
        
  

        
        
        )
    }
}

//ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Main />, document.getElementById('root'));