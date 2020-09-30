import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from './moviesTable'
import Pagination from './common/pagination'
import { Paginate } from '../utils/paginate' 
import { getGenres } from "../services/fakeGenreService";
import ListGroup from './common/listGroup'
import _ from 'lodash'
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn : { path :'title', order: 'asc'}
  };
  componentDidMount(){
    const genres = [ {_id: "",name:"All Genres"}, ...getGenres() ] 
    this.setState({movies:getMovies(), genres : genres})
    
  }
  handlePageChange = (page) =>{
    
    this.setState({currentPage : page})
  }
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies:movies });
  };
  handleLike  = (movie) => {
    
    let movies = this.state.movies.map( (m) => {

      if(m._id === movie._id)
      m.liked = !m.liked
      return m;

    })
    this.setState({movies: movies})
  }
  handleSort = (sortColumn) => {
    this.setState({sortColumn})
  }
  handleGenreSelect = (genre) => {
    this.setState({selectedGenre: genre,currentPage:1 })
  }
  render() {
   
    
    const {
    sortColumn, 
    pageSize, 
    currentPage, 
    movies: allMovies, 
    selectedGenre}  = this.state 
    

    const filtered = selectedGenre && selectedGenre._id
    ? allMovies.filter( m=>  m.genre._id === selectedGenre._id )
    : allMovies
    const { length : count } = filtered;
    if (count === 0) return <p>There are no movies in the database.</p>
    let sorted = _.orderBy(filtered, [sortColumn.path] , [sortColumn.order])
    const movies = Paginate(sorted, currentPage, pageSize )
    return (
      <div className = "row">
        <div className = "col-3">
        <ListGroup 
        selectedItem = {selectedGenre}
        items = {this.state.genres} 
        onItemSelect = {this.handleGenreSelect}/>
      </div>
        <div className = "col">
        <p>Showing {count} movies in the database.</p>

        <MoviesTable 
        sortColumn = {this.state.sortColumn}
        movies = {movies} 
        onLike = {this.handleLike}
        onSort = {this.handleSort}
        onDelete = { this.handleDelete }/>

        <Pagination 
        itemCount = {count} 
        pageSize = {pageSize}
         onPageChange = {this.handlePageChange}
          currentPage = {currentPage} />
        </div>
        
      </div>
    );
  }
}

export default Movies;
