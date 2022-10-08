import React, { Component } from 'react'
import NewsItems from './NewsItems';

export default class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    async componentDidMount() {
        const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=21c36b36212c4b4a9a0f9e06ef5e8ec5"
        const response = await fetch(url);
        const responseData = await response.json();
        this.setState({ data: responseData });
    }

    render() {
        return (
            <div className='container my-3'>
                <NewsItems data = {this.state.data}/>
            </div>
        )
    }
}
