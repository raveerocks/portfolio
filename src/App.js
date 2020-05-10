import React, {Component}from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.jpg'

class App extends Component{

    state = {displayBio: false};
    toggleDisplyBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }

    // constructor(){
    //     super();
    //     this.toggleDisplyBio = this.toggleDisplyBio.bind(this);
    //     this.toggleDisplyBio = () =>{...};
    // }
    

    render () {
        return(
            <div>
                <img src={profile} alt='profile' className='profile'/>
                <h1>Hello!</h1>
                <p>My name is Raveendra. I'm a software engineer.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                this.state.displayBio ? (
                    <div>
                        <p>I live in Mumbai, and code everyday</p>
                        <p>My favourite language is JavaScript, and I think Ract.js is awesome.</p>
                        <p>Besides coding, I also love music and ramen!</p>
                        <button onClick={this.toggleDisplyBio}>Show less</button>
                    </div>
                    ):
                    (<div>
                        <button onClick={this.toggleDisplyBio}>Read more</button>
                    </div>
                )
                }
                 <hr />
                 <Projects/>
                 <hr/>
                 <SocialProfiles />
            </div>
        )
    }
}
export default App;