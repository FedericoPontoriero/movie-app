import React from "react"
import Router from 'next/router'
import { getMovieById, updateMovie } from "../../../actions"
import MovieCreateForm from '../../../components/MovieCreateForm'
class EditMovie extends React.Component {

    // static getInitialProps({query}) {
    //     return {query}
    // }

    static async getInitialProps({query}) {
        const movie = await getMovieById(query.id)

        return {movie}
    }

    handleUpdateMovie = movie => {
		updateMovie(movie).then(updatedMovie => {
			Router.push(`/movies/${movie.id}`);
		});
    }

    // state = {
    //     movie: {
	// 	name: '',
	// 	description: '',
	// 	rating: '',
	// 	image: '',
	// 	longDesc: '',
    //     }
    // }

    // componentDidMount() {
    //     const { id } = this.props.query
    //     getMovieById(id).then((movie) => {
    //         this.setState({movie})
    //     });
    // }

    render() {
        const { movie } = this.props
        return (
            <div className="container">
                <h1>Edit the Movie</h1>
                <MovieCreateForm submitButton='Update' initialData={movie} handleFormSubmit={this.handleUpdateMovie}/>
            </div>
        )
    }
}

export default EditMovie