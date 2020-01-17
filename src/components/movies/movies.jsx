import SearchBox from "./searchBox";

import React, {Component} from "react";
import {getMovies} from "../../services/fakeMovieService";
import Pagination from "../common/pagination";
import {paginate} from "../../utils/paginate";
import ListGroup from "../common/listGroup";
import {getGenres} from "../../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import {Link} from "react-router-dom";

class Movies extends Component{

    //STATE
    state = {
        movies: [],
        genres:[],
        currentPage: 1,
        pageSize: 5,
        searchQuery:"",
        sortColumn:{path:'title',order:'asc'}
    };

    //COMPONENT_DID_MOUNT
    componentDidMount() {
        const genres = [{_id:'',name:'All Genres'},...getGenres()];
        this.setState({movies:getMovies(),genres})
    }

    //HANDLE_DELETE_FUNCTION
    onDeleteHandler = (movie) => {
        const movies = this.state.movies.filter(m => m._id!==movie._id);
        this.setState({movies});
    };

    //HANDLE_LIKE_FUNCTION
    handleLike = (movie) =>{
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    };

    //HANDLE_PAGE_CHANGE_FUNCTION
    handlePageChange = page =>{
        this.setState({currentPage:page})
    };

    //HANDLE_SELECT_GENRES_FUNCTION
    handleGenresSelect = genre => {
        this.setState({selectedGenre: genre,currentPage:1})
    };

    //HANDLE_SEARCH_FUNCTION
    handleSearch = query => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
    };

    //HANDLE_SORT_FUNCTION
    handleSort = sortColumn => {
        this.setState({sortColumn})
    };

    //PAGE_DATA
    getPageData = () => {
        const {pageSize,currentPage,selectedGenre,searchQuery,movies:allMovies,sortColumn} = this.state;
        let filtered = allMovies;
        if (searchQuery)
            filtered = allMovies.filter(m =>
                m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        else if (selectedGenre && selectedGenre._id)
            filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

        const sorted = _.orderBy(filtered,[sortColumn.path],[sortColumn.order]);
        const movies = paginate(sorted,currentPage,pageSize);

        return {totalCount:filtered.length,data:movies};
    };

    //RENDER_ALL_COMPONENTS_AND_FUNCTION
    render() {

        //DEFINE_ALL_CONSTANTS
        const {length: count} = this.state.movies;
        const {pageSize,currentPage,sortColumn,searchQuery} = this.state;
        const {totalCount,data:movies} = this.getPageData();

        //RETURN_FUNCTION
        return (count === 0 ? <p className="text-white badge badge-primary text-wrap p-2 m-2" style={{fontSize:20}}>There are No Movies in the Database</p> : (
            <div className="row">

                {/*LIST_GROUP_GENRES*/}
                <div className="col-sm-3">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenresSelect}
                    />
                </div>

                {/*LIST_OF_MOVIES*/}
                <div className="col-sm-9">
                    <Link
                        style={{marginBottom:20}}
                        to="/movies/new"
                        className="btn btn-primary"
                    >
                        New Movies
                    </Link>

                    <SearchBox value={searchQuery} onChange={this.handleSearch}/>;

                    <p
                        className="text-black"
                        style={{fontSize:20}}
                    >
                        Showing {totalCount} Movies in Database
                    </p>

                    {/*MOVIES_TABLE*/}
                    <MoviesTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={this.handleLike}
                        onDelete={this.onDeleteHandler}
                        onSort={this.handleSort}
                    />

                    {/*PAGINATION*/}
                    <Pagination
                        itemsCount={totalCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        ));
    }
}
export default Movies;
