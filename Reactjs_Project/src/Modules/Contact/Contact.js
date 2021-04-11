import React, { Component } from 'react';
import FormContact from './FormContact';

class Contact extends Component {
    render() {
        return (
            <div className="contact_form">
                <div className="background_form_map container">
                    <div className="title_form">
                        Liên hệ
                    </div>

                    <div className="ban_do col-xs-12 col-md-6">
                        <FormContact />
                    </div>


                    <div className="ban_do col-xs-12 col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.57306663076!2d106.68721422094836!3d10.781161676488882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3ca0da684d%3A0x32c352459c6757c8!2sGit%20Academy%20Vietnam!5e0!3m2!1svi!2s!4v1618151663470!5m2!1svi!2s" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>

                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}

export default Contact;