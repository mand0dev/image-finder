import React, { useState } from 'react';
import axios from '../axios';
import { SearchBar, Form, Input, Button, Container, Gallery } from './elements/StyledComponents';
import ImageContent from './ImageContent';

const Navbar = () => {

    const [ query, setQuery ] = useState("");
    const [ response, setResponse ] = useState([]);


    const handleQuery = (e) => {
        const value = e.target.value;
        setQuery(value);
    }

    const fetchRequest = async () => {
        try {
            const { data } = await axios.get("/search/photos?page=1&query=" + query + "&client_id=woHY6Vk7Q4mKkE_8_7LsYZuwL0vJlJSdJjY-pisclbo&per_page=21");
            //console.log(data?.results);
            return data?.results;
            
        } catch (error) {
            console.log(error);
            
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        const results = await fetchRequest();
        setResponse(results);
        console.log(results);
    }


    return (
        <div>
            <SearchBar>
                <Form>
                    <Input 
                        type='text' 
                        placeholder='Search Images...' 
                        value={query} 
                        onChange={handleQuery} 
                    />
                    <Button onClick={ handleSearch }>Search</Button>
                </Form>
            </SearchBar>

            <Container>
                <Gallery>
                    { response? response.map((val) => {
                        return <ImageContent val={val} key={val.id}/>
                    }) : (<p>Not images found</p>)}
                </Gallery>
            </Container>
               
        </div>
    );
}

export default Navbar;