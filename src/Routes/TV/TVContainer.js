import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "api";


export default class extends React.Component{
    state={
        topRate:null,
        popular:null,
        airingToday:null,
        loading:true,
        error:null

    }

    async componentDidMount() {
        try{
            const {data: {results:topRate}} = await tvApi.topRate();
            const {data: {results:popular}} = await tvApi.popular();
            const {data: {results:airingToday}}= await tvApi.airingToday();
            this.setState({
                topRate,
                popular,
                airingToday
            })

        }catch(err){
            this.setState({
                error:"Can`t find TV imformation."
            });

        }finally{
            this.setState({loading:false});
        }

    }

    render(){
        const {topRate,popular,airingToday,loading,error} = this.state;
        return<TVPresenter 
        topRate={topRate}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
        
        />
    }
}