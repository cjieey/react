import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card from './myComponents/myCard';
import Collections from './myComponents/collection';

function App() {
    const [allData, setData] = useState([
      {
        id: 1,
        firstName: "Celjie Magbunag",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDWfb29_-xKXNebDXtuAwzzUDcZstreaOuDsGUrDeUQ&s",
        Title:"PowerFull"
      },
      {
        id: 2,
        firstName: "Celjie Magbunag",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDWfb29_-xKXNebDXtuAwzzUDcZstreaOuDsGUrDeUQ&s",
        Title:"PowerFull"
      },
      {
        id: 3,
        firstName: "Celjie Magbunag",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDWfb29_-xKXNebDXtuAwzzUDcZstreaOuDsGUrDeUQ&s",
        Title:"PowerFull"
      },
      {
        id: 4,
        firstName: "Celjie Magbunag",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDWfb29_-xKXNebDXtuAwzzUDcZstreaOuDsGUrDeUQ&s",
        Title:"PowerFull"
      },
      {
        id: 5,
        firstName: "Celjie Magbunag",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDWfb29_-xKXNebDXtuAwzzUDcZstreaOuDsGUrDeUQ&s",
        Title:"PowerFull"
      },
      {
        id: 6,
        firstName: "Celjie Magbunag",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDWfb29_-xKXNebDXtuAwzzUDcZstreaOuDsGUrDeUQ&s",
        Title:"PowerFull"
      },
      {
        id: 7,
        firstName: "Celjie Magbunag",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDWfb29_-xKXNebDXtuAwzzUDcZstreaOuDsGUrDeUQ&s",
        Title:"PowerFull"
      },
      {
        id: 8,
        firstName: "Celjie Magbunag",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDWfb29_-xKXNebDXtuAwzzUDcZstreaOuDsGUrDeUQ&s",
        Title:"PowerFull"
      },
      {
        id: 9,
        firstName: "Celjie Magbunag",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDWfb29_-xKXNebDXtuAwzzUDcZstreaOuDsGUrDeUQ&s",
        Title:"PowerFull"
      },
      {
        id: 10,
        firstName: "Celjie Magbunag",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDWfb29_-xKXNebDXtuAwzzUDcZstreaOuDsGUrDeUQ&s",
        Title:"PowerFull"
      },
    ])
    const [allPic, setPic] = useState([
      {
        id: 1,
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDWfb29_-xKXNebDXtuAwzzUDcZstreaOuDsGUrDeUQ&s",
      },
      {
        id: 2,
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDWfb29_-xKXNebDXtuAwzzUDcZstreaOuDsGUrDeUQ&s",
      },
      {
        id: 3,
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDWfb29_-xKXNebDXtuAwzzUDcZstreaOuDsGUrDeUQ&s",
      },
      {
        id: 4,
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDWfb29_-xKXNebDXtuAwzzUDcZstreaOuDsGUrDeUQ&s",
      },
      {
        id: 5,
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDWfb29_-xKXNebDXtuAwzzUDcZstreaOuDsGUrDeUQ&s",
      },
      {
        id: 6,
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDWfb29_-xKXNebDXtuAwzzUDcZstreaOuDsGUrDeUQ&s",
      },
      {
        id: 7,
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDWfb29_-xKXNebDXtuAwzzUDcZstreaOuDsGUrDeUQ&s",
      },
    ])
    return(
        <div>
            <Card datav={allData}/>
            <Collections datac={allPic}/>
        </div>
    );

}

export default App;
