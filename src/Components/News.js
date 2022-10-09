import React, { Component } from 'react'
import NewsItems from './NewsItems';
import Spinner from './Spinner';

export default class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            page:1
        }
    }
    async componentDidMount() {
        this.state.loading = true;
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ee23271e28ba43669903efa79a2164b9&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}`
        const response = await fetch(url);
        const responseData = await response.json();
        this.setState({
            data: responseData.articles,
            loading: false,
            page:this.state.page,
            totalResults:responseData.totalResults
        });
        console.log(responseData);
    }

    handlePrev = async () => {
        console.log("prev button clicked");
        this.state.loading = true;
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ee23271e28ba43669903efa79a2164b9&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page-1}`
        const response = await fetch(url);
        const responseData = await response.json();
        this.setState({
            data: responseData.articles,
            loading: false,
            page:this.state.page-1
        });
    };
    handleNext = async () => {
        console.log("Next button clicked");
        this.state.loading = true;
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ee23271e28ba43669903efa79a2164b9&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page+1}`
        const response = await fetch(url);
        const responseData = await response.json();
        this.setState({
            data: responseData.articles,
            loading: false,
            page:this.state.page+1
        });
    };

    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center'>Welocme to {this.props.category} News</h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.data.map((article) => {
                        return (
                            <div className="col-md-4" key={article.url}>
                                <NewsItems url={article.url} urlToImage={article.urlToImage} title={article.title} description={article.description} category={this.props.category} />
                            </div>
                        )
                    })}
                </div>
                <div className="d-flex justify-content-between mb-6">
                    <button disabled ={this.state.page <=1}  className='btn btn-primary btn-md' onClick={this.handlePrev}>&laquo; Prev</button>
                    <button disabled ={(this.props.pageSize*(this.state.page)) > this.state.totalResults} className='btn btn-primary btn-md' onClick={this.handleNext}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}
