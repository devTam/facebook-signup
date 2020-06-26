import React from 'react';
import { render } from 'react-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
      
        return (
            <div className="header">
                <div className="header__brand">
                    <h1>facebook</h1>
                </div>
                <div className="header__form">
                    <div className="email-container">
                        <label htmlFor="email">Email or phone</label>
                        <input type="text" className="form-input" id="email"/>
                    </div>
                    <div className="password-container">
                        <label htmlFor="password">Password</label>
                        <input type="text" className="form-input" id="password"/>
                        <p>Forgotten account?</p>
                    </div>
                    <button type="button"className="submit">Log In</button>
                </div>
                
            </div>
        )
    }
}

export default Header;