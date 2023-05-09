import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfinitScroll from 'react-infinite-scroll-component';


export class News extends Component {

  static defaultProps={
    pageSize:8,
    category:"general",
    country: "in"
  }

  static propTypes={
    pageSize: PropTypes.number,
    category: PropTypes.string,
    country: PropTypes.string
  }

  capital=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  
constructor(props){
    super(props);
    console.log("constructor from news")
    this.state={
      articles:[],
      loading:false,
      page:1,
      totalResults:0
    }
document.title=`${this.capital(this.props.category)} - NEWS-KNOWLEDGE`;
  }
   
 async updatenews(){
  this.props.setProgress(10);
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3af4b8dc0bed448b9adad6a0c1c8e45f&page=${this.state.page}&pageSize=${this.props.pageSize}`; 
    this.setState({loading:true});
    let data= await fetch(url);
    this.props.setProgress(30);
    let parseddata= await data.json();
    this.setState({
      articles: parseddata.articles, 
      totalResults: parseddata.totalResults,
      loading:false
    })
    this.props.setProgress(100);
 }
 

 async componentDidMount(){
  this.updatenews();
 }
 
//     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3af4b8dc0bed448b9adad6a0c1c8e45f&page=1&pageSize=${this.props.pageSize}`; 
//     this.setState({loading:true});
//     let data= await fetch(url);
//     let parseddata= await data.json();
//     this.setState({articles: parseddata.articles, 
//       totalResults: parseddata.totalResults,
//       loading:false})
//  }

 
 
 clickPrev = async()=>{
this.setState({page: this.state.page - 1});
this.updatenews();
}
 
 

clickNext = async()=>{
  this.setState({page: this.state.page + 1});
  this.updatenews();
  }

//     if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

//     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&                        apiKey=3af4b8dc0bed448b9adad6a0c1c8e45f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
//     this.setState({loading:true});
//     let data= await fetch(url);
//     let parseddata= await data.json();
//     this.setState({
//       page: this.state.page+1,
//       articles: parseddata.articles,
//       loading:false
//     })
 // }
//  }
fetchMoreData=async()=>{

  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3af4b8dc0bed448b9adad6a0c1c8e45f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  this.setState({page:this.state.page+1}); 
  this.setState({loading:true});
  let data= await fetch(url);
  let parseddata= await data.json();
  this.setState({
    articles: this.state.articles.concat(parseddata.articles), 
    totalResults: parseddata.totalResults,
    loading:false
  })
}

  

  render() {
    return (
      
      <>
        <h2 className='container text-center' style={{margin:"35px 0px", marginTop:"90px"}}>NEWS KNOWLEDGE ON {this.capital(this.props.category)}</h2>
        
          
          {this.state.loading && <Spinner/>}
        

       <InfinitScroll
        dataLength = {this.state.articles.length}
        next = {this.fetchMoreData}
        hasMore = {this.state.articles.length!==this.state.totalResults}
        loader={<Spinner/>}
      >
        <div className="container">
        <div className="row my-3" >
       
               {this.state.articles.map((element)=>{
                return  <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title?element.title:" "} description={element.description?element.description:""} imageurl={element.urlToImage} newsurl={element.url} date={element.publishedAt} author={element.author} source={element.source.name}/>
                </div>
             
             })}
    </div>
      </div>
      </InfinitScroll> 



      {/* <div className="container d-flex justify-content-between">
      <button type="button" disabled={this.state.page<=1} className="btn btn-success" onClick={this.clickPrev}>&larr; PREVIOUS</button>
      <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-success" onClick={this.clickNext}>NEXT &rarr;</button>


      </div> */}
      </>
    )
  }
}
 
export default News