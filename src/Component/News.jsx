import React, { Component } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {
    static defultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general'
    }

    static propsTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News`;
    }

    // Fetching data
    componentDidMount() {
        this.setState({ loading: true })
        axios.get(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pagesize=${this.props.pageSize}`)
            .then((res) => {
                // console.log(data);
                let data = res.data;
                this.setState({
                    articles: data.articles,
                    totalResults: data.totalResults,
                    loading: false
                })
            })
    }

    nextClick = () => {
        if (Math.ceil(this.state.totalResults / this.props.pageSize) >= this.state.page + 1) {
            this.setState({ loading: true })
            axios.get(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`)
                .then((res) => {
                    let data = res.data;
                    this.setState({
                        articles: data.articles,
                        page: this.state.page + 1,
                        loading: false
                    })
                })
        }
    }

    previousClick = () => {
        this.setState({ loading: true })
        axios.get(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`)
            .then((res) => {
                let data = res.data;
                this.setState({
                    articles: data.articles,
                    page: this.state.page - 1,
                    loading: false
                })
            })
    }

    render() {
        return (
            <div className='container my-4'>
                <h1 className='mb-4' style={{marginTop: '70px'}}>Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && < Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((ele, pos) => {
                        return <div className="col-md-6" key={pos}>
                            <NewsItem title={ele.title ? ele.title.slice(0, 94) : ""} desc={ele.description ? ele.description.slice(0, 93) : ""} imgUrl={ele.urlToImage ? ele.urlToImage : "https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA="} newsUrl={ele.url} date={ele.publishedAt} source={ele.source.name} />
                        </div>
                    })}
                    <div className="d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} className="btn btn-dark" type='button' onClick={this.previousClick}>&larr; Previous</button>
                        <button disabled={this.state.page === Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" type='button' onClick={this.nextClick}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}
