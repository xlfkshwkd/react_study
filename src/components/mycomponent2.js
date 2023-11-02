
const Mycomponent =( {name,favoriteNumber,children})=>{
   // const {name,favoriteNumber,children}=props;

    return (
        <>
    <div>나의 두번째 컴포넌트</div>
    <div>나의 {name} 컴포넌트</div>
    <div>나의 {favoriteNumber} 컴포넌트</div>
    <div>나의 {children} 컴포넌트</div>
    </>
    )

}



export default Mycomponent;

