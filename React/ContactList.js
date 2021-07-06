import React from "react";
import * as ReactDOM from "react-dom";
function TestOutput(props) {
    return null;
}
class App extends React.Component{
    firstName;
    lastName;
    first_name;
    last_name;
    className;
    render() {
        this.state=[
                        {avatar: "https://reqres.in/img/faces/2-image.jpg",
                email: "janet.weaver@reqres.in",
                first_name: "Janet",
                id: 2,
                last_name: "Weaver",name:"Janat weaver",description:"2 mins ago",text:"Message"},
            {id: 7, email: "michael.lawson@reqres.in", first_name: "Michael", last_name: "Lawson", avatar: "https://reqres.in/img/faces/7-image.jpg",name:"Michael lawson",description:"2 mins ago"},
            {id: 10, email: "byron.fields@reqres.in", first_name: "Byron", last_name: "Fields", avatar: "https://reqres.in/img/faces/10-image.jpg",name:"Byron Fields",description:"2 mins ago"},
            {id: 7, email: "michael.lawson@reqres.in", first_name: "Tobias", last_name: "Funke", avatar: "https://reqres.in/img/faces/9-image.jpg",name:"Tobias Funke",description:"2 mins ago"},
            {id: 10, email: "george.edwards@reqres.in", first_name: "George", last_name: "Edwards", avatar: "https://reqres.in/img/faces/11-image.jpg",name:"George Edwards",description:"2 mins ago"},
        ];
        return (
            <div className={"main"}>
                <h2 style={{position:"relative",
                left:"600px",
                height:"44px",
                width:"500px",
                padding:"-41px",
                top:"820px",
                backgroundColor:"blueviolet"}}> </h2>
                <h1 style={{padding:"28px",
                    top:"9px",
                    backgroundColor:"blueviolet",
                    width:"445px",
                    position:"relative",
                    fontFamily:"sans-serif",
                    color:"white",
                    left:"600px",
                    fontSize:"31px"}}>Message</h1>
<img src="https://img.icons8.com/ios/452/chat-message--v2.png" style={{width:"20px",position:"relative",top:"651px",left:"696px"}}/>
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/profile-1413099-1199196.png" style={{width:"20px",position:"relative",top:"651px",left:"780px"}}/>
                <img src="https://wp-media.patheos.com/blogs/sites/556/2015/12/Next_Arrow.svg_.png" style={{width:"20px",position:"relative",top:"651px",left:"900px"}}/>


                { this.state.map((userInfo) =>{
                    return(
                    <div className={"one"} style={{height:"130px",
                            position:"relative",
                            backgroundColor:"whitesmoke",
                            width:"500px",left:"600px",top:"-37px"}}>
                        <form style={{left:"54px",
                                padding:"10px",
                                backgroundColor:"antiquewhite",
                                height:"56px",
                                position:"relative",
                                paddingLeft:"20px",
                                border:"1px solid wheat",
                                borderRadius:"19px",
                                width:"355px",
                            bottom:"-20px"}}>
                                <img src={userInfo.avatar} style={{height:"50px",borderRadius:"500px"}}/>
                            <h1 style={{bottom:"65px",fontSize:"16px",
                                left:"70px",fontFamily:"system-ui",
                                position:"relative"}}>{userInfo.name }</h1>
                            <h1 style={{bottom:"70px",fontSize:"15px",
                                left:"70px",
                                position:"relative",fontWeight:"inherit"}}>{userInfo.email}</h1>
                                <h1 style={{position:"relative",fontSize:"10px",bottom:"95px",left:"247px"}}>{userInfo.description}</h1>
                                <h1 style={{fontSize:"11px",width:"10px",bottom:"121px",left:"320px",padding:"3px",position:"relative",backgroundColor:"blueviolet",color:"white",borderRadius:"25px"}}>{userInfo.id}</h1></form>
                    </div>)

                })}
            </div>
        );

         }
}
ReactDOM.render(<App />, document.getElementById('root'));
