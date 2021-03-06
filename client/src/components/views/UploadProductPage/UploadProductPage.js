import React, { useState } from 'react';
import {Typography, Button, Form, Input, Descriptions} from 'antd';
import FileUpload from '../../utils/FileUpload'

const {Title} = Typography;
const {TextArea} = Input;

const Continents = [
    {key:1, value: "Africa"},
    {key:2, value: "Europe"},
    {key:3, value: "Asia"},
    {key:4, value: "North America"},
    {key:5, value: "South America"},
    {key:6, value: "Australia"},
    {key:7, value: "Antarctica"},
]

function UploadProductPage(props) {

    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[price, setPrice] = useState(0);
    const[continent, setContinent] = useState(1);
    const[images, setImages] = useState([]);
 

    const titleChangeHandler= (event) =>{
        setTitle(event.currentTarget.value);
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value);
    }

    const priceChangeHandler = (event) => {
        setPrice(event.currentTarget.value);
    }

    const continentChangeHandler = (event) => {
        setContinent(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{textAlign: 'center', marginBottom:'2rem'}}>
                <Title level={2}>여행 상품 업로드</Title>
            </div>
        <Form>
            <FileUpload refreshFunction={updateImages}/>
            <br />
            <br />
            <table>이름</table>
            <Input onChange={titleChangeHandler} value={title}/>
            <br/>
            <br/>
            <label>설명</label>
            <TextArea onChange={descriptionChangeHandler} value={description}/>
            <br/>
            <br/>
            <label>가격($)</label>
            <Input type="number" onChange={priceChangeHandler} value={price}/>
            <br/>
            <br/>
            <select onChange={continentChangeHandler}>
                {Continents.map(item => (
                    <option key={item.key} value={continent}>{item.value}</option>
                ))}
            </select>
            <br/>
            <br/>
            <Button>
                확인
            </Button>


        </Form>
        </div>
    );
}

export default UploadProductPage;