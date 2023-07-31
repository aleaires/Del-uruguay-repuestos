import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ContactFAQ from './ContactFAQ';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ContactHours from './ContactHours';
import ContactMap from './ContactMap';
import ContactSocial from './ContactSocial';

const Contactenos = () => {
    return (
        <div>
            <Header />
            <div className="component">
                <ContactForm />
            </div>
            <div className="component">
                <ContactInfo />
            </div>
            <div className="component">
                <ContactMap />
            </div>
            <div className="component">
                <ContactHours />
            </div>
            <div className="component">
                <ContactFAQ />
            </div>
            <div className="component">
                <ContactSocial />
            </div>
            <Footer />
        </div>
    );
};

  export default Contactenos;