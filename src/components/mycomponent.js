import { Component } from "react";
import PropTypes from "prop-types";

class Mycomponent extends Component{
    static defaultProps ={
      name:'(이름없음)',    
    }
    render(){
      const {name,favoriteNumber,children} =this.props;
  //    console.log(this.props)
        return (
        <>
        <div>나의 첫번째 컴포넌트 </div>
        <div>나의 이름: {name} </div>
        <div>나의 좋아하는 숫자는? {favoriteNumber} </div>
        <div>나의 두번째: {children} </div>
        
        </>
        );
    }
}

Mycomponent.defaultProps={
  name:'(이름 없음)',
}

Mycomponent.propTypes={
  favoriteNumber:PropTypes.number.isRequired,
  
}


export default Mycomponent;