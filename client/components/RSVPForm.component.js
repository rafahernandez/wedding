/**
 * Implements the reservation form wizard and interaction with the server.
 * 
 * id (string): Identifier for the element
 */

'use strict';

import APIClient from '../api/api-client';
import isEmail from 'validator/lib/isEmail';
import React from 'react';

// For compatibility with older Internet Explorer browsers
require('es6-object-assign').polyfill();

/**
 * Implements the RSVP form.
 */
class RSVPForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            guestInfo: {},

            submitStatus: null,
        };
    }

    render() {
        var self = this;

        const guestInfo = this.state.guestInfo;

        return (
            <div id={this.props.id} className="wizard-form">
                <p>Por favor completa los datos para dejarnos saber si nos acompañaran en Atlixco.
                </p>
                <br />

                <p>Los campos marcados con * son obligatorios.</p>
                <br />

                {this.renderTextInput('name', 'Name*:', guestInfo)}
                {this.renderTextInput('email', 'Email*:', guestInfo)}
                <br />

                {this.renderRadioInput(
                    'attendance',
                    'Attendance*:',
                    [
                        { label: 'SI VOY A ATENDER', value: 'yes' },
                        { label: 'LO SIENTO NO PODRE ACOMPAÑARLOS', value: 'no' }
                    ],
                    guestInfo)
                }
                <br />

                {guestInfo.attendance === 'yes' &&
                    <div>
                        {this.renderRadioInput(
                            'meal',
                            'Restricciones del menu*:',
                            [
                                { label: 'NINGUNA', value: 'meat' },
                                { label: 'SOY VEGETARIANO', value: 'vegetarian' }
                            ],
                            guestInfo)}
                        <br />

                        {this.renderTextInput(
                            'dietaryRestrictions',
                            '¿Alguna otra restricción?',
                            guestInfo)}
                        <br />

                        {this.renderRadioInput(
                            'hangoverBrunch',
                            '¿Nos acompañaran a la presentación de César (El día después de la boda)*?',
                            [
                                { label: 'SI', value: 'yes' },
                                { label: 'NO', value: 'no' }
                            ],
                            guestInfo)}
                        <br />

                    </div>
                }
                <br />

                {this.state.submitStatus &&
                    <div className={this.state.submitStatus.isError ? 'alert-error' : 'alert-success'}>
                        <span className="alert-closebtn"
                            onClick={() => { self.state.submitStatus = null; self.setState(self.state); }}>&times;</span>
                        {this.state.submitStatus.message}
                    </div>
                }
                <br />

                <button onClick={this.submitRSVP.bind(this)}>Submit</button>
            </div>
        );
    }

    /**
     * Validates that the form can be submitted and returns null on success or a string message with
     * the validation error otherwise.
     */
    validate() {
        function validateGuestDetail(info) {
            if (!info.meal)
                return "Por favor elige las restricciones alimentarias.";
            if (!info.hangoverBrunch)
                return 'Por favor dejános saber si atenderas a la presentación de César';

            return null;
        }

        const guestInfo = this.state.guestInfo;

        if (!guestInfo.name || guestInfo.name.trim().empty)
            return 'Escribe tu nombre por favor';

        if (!guestInfo.attendance)
            return 'Nos acompañaras?';

        if (guestInfo.attendance === 'no')
            return null;

        if (!guestInfo.email || guestInfo.email.trim().empty || !isEmail(guestInfo.email))
            return 'Tu email no es correcto';

        const guestValidation = validateGuestDetail(guestInfo);
        if (guestValidation) {
            return guestValidation;
        }
    }

    /**
     * Renders a text input with a label. Gets its state and updates the specified @stateObj.
     */
    renderTextInput(name, label, stateObj) {
        const self = this;
        const value = stateObj[name];

        function onChange(event) {
            stateObj[name] = event.target.value;
            self.setState(self.state);
        }

        return (
            <div className="rsvp-section">
                <label>{label}</label>
                <input type="text"
                    name={name}
                    value={value}
                    onChange={onChange} />
            </div>
        );
    }

    /**
     * Renders a text input with a label and the specified set of options. Gets its state and
     * updates the specified @stateObj.
     * 
     * The format of the options is an array of JSON objects with the following properties:
     *  label - Label of the option
     *  value - Value of the option to be set on the @stateObj
     */
    renderRadioInput(name, label, options, stateObj) {
        const self = this;
        const value = stateObj[name];

        function onChange(event) {
            stateObj[name] = event.target.value;
            self.setState(self.state);
        }

        return (
            <div className="rsvp-section">
                <label>{label}</label>
                {
                    options.map(function (option) {
                        return (
                            <div key={option.value}>
                                <input type="radio"
                                    value={option.value}
                                    checked={value === option.value}
                                    onChange={onChange} />
                                <label>{option.label}</label>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    /**
     * Retrieves the client for the web service API.
     */
    getAPIClient() {
        return new APIClient(document.location.protocol + '//' + document.location.host + '/api/rsvp');
    }

    /**
     * Takes the collected wizard input across all forms and submits it to the database.
     */
    submitRSVP() {
        const self = this;
        const state = this.state;

        if (this.validate()) {
            self.state.submitStatus = { isError: true, message: this.validate() };
            self.setState(self.state);
            return;
        }

        var guestInfo = Object.assign({}, state.guestInfo);

        // TODO: This is a hack, find a way to properly construct the request
        const willAttend = guestInfo.attendance === 'yes';
        delete guestInfo['attendance'];      

        this.getAPIClient().rsvp(guestInfo, willAttend, function (errorMsg, successMsg) {
            if (errorMsg) {
                self.state.submitStatus = { isError: true, message: errorMsg };
                self.setState(self.state);
            } else {
                self.state.submitStatus = {
                    isError: false, message: 'Tu datos se enviaron correctamente. ¡Gracias!'
                };
                self.setState(self.state);
            }
        });
    }
}

export default RSVPForm;
