import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi } from "../../api";


export default class extends React.Component{
    state={
       movieResults:null,
       tvResults:null,
       searchTerm:"",
       loading:false,
       error:null
    };
 
    handleSubmit = event => {
        event.preventDefault();
        const {searchTerm} =this.state;
        if(searchTerm !== ""){
            this.searchByTerm();
        }
    };

    updateTerm = event =>{
        const {
            target : {value}
         }= event;
        console.log(value);
        this.setState({
            searchTerm:value
        });
    };

    searchByTerm = async() => {
        const {searchTerm} =this.state;
        try{
            const {data:{results:movieResults}} = await moviesApi.search(searchTerm);
            const {data:{results:tvResults}}= await moviesApi.search(searchTerm);
            this.setState({
                movieResults,
                tvResults
            })
            this.setState({loading:true});
        }catch(err){
            this.setState({error:"Can't find results."});
        }finally{
            this.setState({loading:false});
        }
    };



    render(){
        const {tvResults,movieResults,searchTerm,loading,error} = this.state;
        return(
        <SearchPresenter 
        movieResults={movieResults}
        tvResults={tvResults}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        />
        );
    }
}